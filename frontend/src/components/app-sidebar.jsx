import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Gamepad, Home, Pencil, ChevronDown, ChevronUp, LucideGitGraph } from "lucide-react";
import { useState } from "react";

const item = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
        className: "text-xl font-bold",
    },
    {
        title: "User Details",
        url: "/UserDetails",
        icon: Pencil,
        className: "text-xl font-bold",
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: LucideGitGraph,
        className: "text-xl font-bold",
    },
];

export function AppSidebar() {
    const [isGamesOpen, setIsGamesOpen] = useState(false);

    const toggleGamesDropdown = () => {
        setIsGamesOpen((prev) => !prev);
    };

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <span className="text-3xl font-bold mt-10">Child Rights Portal</span>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="py-10">
                            <SidebarMenu>
                                {/* Render standard menu items */}
                                {item.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="flex items-center gap-4 mt-12 px-10">
                                                <item.icon />
                                                <span className={item.className}>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}

                                {/* Games dropdown */}
                                <SidebarMenuItem>
                                    <div
                                        className="flex items-center gap-4 mt-12 px-10 cursor-pointer"
                                        onClick={toggleGamesDropdown}
                                    >
                                        <Gamepad />
                                        <span className="text-xl font-bold">Games</span>
                                        {isGamesOpen ? <ChevronUp /> : <ChevronDown />}
                                    </div>
                                    {isGamesOpen && (
                                        <div className="ml-12 mt-4 space-y-2">
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <a
                                                        href="/games/level1"
                                                        className="block text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        Level 1
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <a
                                                        href="/games/level2"
                                                        className="block text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        Level 2
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <a
                                                        href="/games/level3"
                                                        className="block text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        Level 3
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <a
                                                        href="/games/level4"
                                                        className="block text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        Level 4
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </div>
                                    )}
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
