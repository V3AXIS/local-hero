import { signIn } from "@/lib/auth/auth-client";
import { toast } from "sonner";

export const handleGoogleSignIn = async () => {
    const { error } = await signIn.social({
        provider: "google"
    });
    if (error) {
        toast.error("Google sign-in failed, Please try again.");
    }
};