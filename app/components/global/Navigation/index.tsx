import { getNavigation } from "@/sanity/sanity-utils";
import NavigationLayout from "./NavigationLayout";

export async function Navigation() {
    const menuItems = await getNavigation();
    return <NavigationLayout data={menuItems} />
}