"use client";
import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import debounce from "lodash/debounce";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { CommandItem } from "cmdk";
import { MapPin } from "lucide-react";
import { useMap } from "react-leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const Polygon = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polygon),
  { ssr: false }
);

import "leaflet/dist/leaflet.css";

export default function Geocoder() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState<any | null>(null);

  // Ensure map and Leaflet configuration only run on client side
  useEffect(() => {
    // Configure Leaflet icons only on the client side
    import("leaflet").then((L) => {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
  }, []);

  const handleSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setSelectedCity(null);
        return;
      }
      try {
        const response = await fetch(
          `/api/maps?query=${encodeURIComponent(searchQuery)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Search results:", data);
        setResults(data);
        setSelectedCity(null);
      } catch (error) {
        console.error("Error fetching from API:", error);
        setResults([]);
        setSelectedCity(null);
      }
    }, 500),
    []
  );
  const handleInputChange = (value: string) => {
    setQuery(value);
    handleSearch(value);
  };

  return (
    <div className="p-5">
      <div className="mb-5 flex gap-4">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search for a city or location..."
            value={query}
            onValueChange={handleInputChange}
          />
          {query != "" && !selectedCity && (
            <CommandList>
              <CommandEmpty>No location found</CommandEmpty>
              {results.length > 0 && (
                <CommandGroup>
                  {results.map((result: any) => (
                    <CommandItem
                      key={result.place_id}
                      onSelect={() => {
                        setSelectedCity(result);
                        setQuery(result.display_name);
                        setResults([]);
                      }}
                      className="flex items-center gap-2"
                    >
                      <MapPin />
                      <p>{result.display_name}</p>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          )}
        </Command>
      </div>

      <MapContainer
        center={
          selectedCity
            ? [parseFloat(selectedCity.lat), parseFloat(selectedCity.lon)]
            : [0, 0]
        }
        zoom={5}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedCity && <MapContent selectedCity={selectedCity} />}
      </MapContainer>
    </div>
  );
}
function MapContent({ selectedCity }: { selectedCity: any }) {
  const map = useMap();
  useEffect(() => {
    if (selectedCity) {
      const lat = parseFloat(selectedCity.lat);
      const lon = parseFloat(selectedCity.lon);
      map.setView([lat, lon], 10);
      map.setZoom(8);
    }
  }, [selectedCity, map]);
  let polygonPositions = null;
  const popupText = `${selectedCity?.display_name || ""} (Bounding Box)`;
  if (selectedCity) {
    if (selectedCity.geojson?.type === "Polygon") {
      // Swap [lon, lat] to [lat, lon] for react-leaflet
      polygonPositions = selectedCity.geojson.coordinates[0].map(
        ([lon, lat]: [number, number]) => [lat, lon]
      );
    } else if (selectedCity.boundingbox) {
      // Fallback to boundingbox if not a Polygon
      polygonPositions = getPolygonCoordinates(selectedCity.boundingbox);
    }
  }
  return (
    <>
      <div key={selectedCity.place_id}>
        <Marker
          position={[
            parseFloat(selectedCity.lat),
            parseFloat(selectedCity.lon),
          ]}
        >
          <Popup>{selectedCity.display_name}</Popup>
        </Marker>
          <Polygon
            positions={polygonPositions}
            pathOptions={{
              color: "blue",
              fillColor: "blue",
              fillOpacity: 0.2,
              weight: 2,
            }}
          >
            <Popup>{popupText}</Popup>
          </Polygon>
        
      </div>
    </>
  );
}
const getPolygonCoordinates = (boundingbox: any) => {
  const [minLat, maxLat, minLon, maxLon] = boundingbox.map(Number);
  return [
    [minLat, minLon], // Bottom-left
    [minLat, maxLon], // Bottom-right
    [maxLat, maxLon], // Top-right
    [maxLat, minLon], // Top-left
    [minLat, minLon], // Close the polygon
  ];
};
