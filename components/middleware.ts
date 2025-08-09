// import { NextResponse, type NextRequest } from "next/server";
// import { createSupabaseReqResClient } from "@/lib/supabase/server-client";

// export async function middleware(request: NextRequest) {
//   const { supabase, response } = createSupabaseReqResClient(request);

//   const { data: { session } } = await supabase.auth.getSession();

//   const { data: userProfile } = await supabase
//     .from('user')
//     .select('preferredTownId')
//     .single();

//   const url = request.nextUrl.clone();
//   const publicRoutes = ['/', '/sign-in', '/sign-up'];
//   const isPublicRoute = publicRoutes.includes(url.pathname);
//   const isOnboardingRoute = url.pathname === '/select-location';

//   // If user is not logged in and trying to access a protected route, redirect to sign-in
//   if (!session && !isPublicRoute && !isOnboardingRoute) {
//     return NextResponse.redirect(new URL('/sign-in', request.url));
//   }

//   // If user is logged in
//   if (session) {
//     const hasSetLocation = !!userProfile?.preferredTownId;

//     // If they haven't set a location, force them to the selection page
//     if (!hasSetLocation && !isOnboardingRoute) {
//       return NextResponse.redirect(new URL('/select-location', request.url));
//     }

//     // If they have set a location and are trying to access the root or onboarding, send them to their hub
//     if (hasSetLocation && (isPublicRoute || isOnboardingRoute)) {
//       return NextResponse.redirect(new URL(`/town-hub/${userProfile.preferredTownId}`, request.url));
//     }
//   }

//   return response;
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };