// import { createSupabaseReqResClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";
import LandingPage from "@/components/layout/LandingPage";

export default async function HomePage() {
  // const supabase = createSupabaseReqResClient();
  // const { data } = await supabase.auth.getSession();

  // if (data.session) {
  //   redirect("/town-hub/1"); 
  // }

  // If the user is not authenticated, show the public landing page.
  return <LandingPage />;
}