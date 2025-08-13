import Geocoder from "@/components/maps/Geocoder";
import { getSession } from "@/server/getSession";
import { checkUserOnboarding } from "@/server/userAction";
import { redirect } from "next/navigation";

const page = async () => {
  const res=await getSession();
  if(!res){
    redirect('/');
  }
  const data= await checkUserOnboarding(res.user.id!);
  if (data!.hasProfile && data!.onboardingCompleted) {
    redirect('/profile');
  }
  return (
    <Geocoder/>
  )
}

export default page