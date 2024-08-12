import { Package, Home, ShoppingBag, Users, Settings2, LogOut } from 'lucide-react';
import { TooltipProvider } from '../ui/tooltip';
import { IconLink } from '../iconLink';

export function SidebarNavigation() {
  return (
    <TooltipProvider>
      <nav className="flex flex-col items-center gap-4 px-2 py-5">
        <IconLink href="#" icon={Package} tooltip="Dashboard Avatar" className="bg-primary text-primary-foreground rounded-full" />
        <IconLink href="#" icon={Home} tooltip="Início" />
        <IconLink href="#" icon={ShoppingBag} tooltip="Pedidos" />
        <IconLink href="#" icon={Package} tooltip="Produtos" />
        <IconLink href="#" icon={Users} tooltip="Clientes" />
        <IconLink href="/settings" icon={Settings2} tooltip="Configurações" />
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
        <IconLink href="/login" icon={LogOut} tooltip="Sair" className="text-red-500" />
      </nav>
    </TooltipProvider>
  );
}
