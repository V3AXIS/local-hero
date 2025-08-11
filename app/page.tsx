import HeroSection from "@/components/hero-section";
import { getCurrentUser } from "@/server/userAction";

export default async function HomePage() {
  const user = await getCurrentUser();
  return (
    <HeroSection />
  );
}