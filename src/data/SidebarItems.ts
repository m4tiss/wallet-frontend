import { LayoutDashboard, PiggyBank, ChartNoAxesCombined } from 'lucide-react';
import { SidebarItem } from '../interfaces/SidebarItem';

export const sidebarItems: SidebarItem[] = [
  {
    path: "/dashboard",
    icon: LayoutDashboard,
    title: "Strona główna",
  },
  {
    path: "/bonds",
    icon: PiggyBank,
    title: "Obligacje",
  },
  {
    path: "/etf",
    icon: ChartNoAxesCombined,
    title: "ETF",
  },
];
