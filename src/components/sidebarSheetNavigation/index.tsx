import Link from 'next/link';
import { Package, Home, ShoppingBag, Users, Settings2, LucideIcon } from 'lucide-react';

function SidebarSheetNavigation() {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        href="#"
        className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
        prefetch={false}
      >
        <Package className="h-5 w-5 transition-all" />
        <span className="sr-only">logo do projeto newview</span>
      </Link>

      <SidebarSheetLink href="#" icon={Home} label="Início" />
      <SidebarSheetLink href="#" icon={ShoppingBag} label="Pedidos" />
      <SidebarSheetLink href="#" icon={Package} label="Produtos" />
      <SidebarSheetLink href="#" icon={Users} label="Clientes" />
      <SidebarSheetLink href="#" icon={Settings2} label="Configurações" />
    </nav>
  );
}

function SidebarSheetLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      prefetch={false}
    >
      <Icon className="h-5 w-5 transition-all" />
      {label}
    </Link>
  );
}

export default SidebarSheetNavigation;
