import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='container mx-auto px-10 mt-4'>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
