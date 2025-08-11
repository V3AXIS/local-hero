import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      query
    )}&format=json&addressdetails=1&limit=5&featureType=settlement&polygon_geojson=1`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'localhero/1.0 (email@example.com)',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching from Nominatim:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Nominatim' }, { status: 500 });
  }
}