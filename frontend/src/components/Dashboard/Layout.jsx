import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import Navbar from "../Shared/Navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <SidebarProvider>
                {/* <SidebarTrigger /> jab sidebar close ho raha tha to ye dikh raha tha  */}
                <AppSidebar />
                <main className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                    <Navbar/>
                    <SidebarTrigger className="" />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;
