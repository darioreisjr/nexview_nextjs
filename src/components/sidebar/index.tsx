import { SidebarNavigation } from '@/components/sidebarNavigation';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { PanelBottom } from 'lucide-react';
import SidebarSheetNavigation from '../sidebarSheetNavigation';

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <SidebarNavigation />
      </aside>

      <SidebarHeader />
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelBottom className="w-5 h-5" />
              <span className="sr-only">Abrir / fechar menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-x">
            <SidebarSheetNavigation />
          </SheetContent>
        </Sheet>
        <h2>Menu</h2>
      </header>
    </div>
  );
}
