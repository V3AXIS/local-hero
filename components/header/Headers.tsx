import { getCurrentUser } from "@/server/userActions";
import DesktopHeader from "./DesktopHeader";

export const revalidate = 0;

const Header = async () => {
    const user = await getCurrentUser();
    return <DesktopHeader user={user} />;
};

export default Header;
