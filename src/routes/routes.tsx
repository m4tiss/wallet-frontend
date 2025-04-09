import Bonds from '@/pages/Bonds';
import Dashboard from '@/pages/Dashboard';
import Etf from '@/pages/Etf';
import { Settings } from 'lucide-react';


const routes = [
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bonds",
        element: <Bonds />,
      },
      {
        path: "/etf",
        element: <Etf />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
];

export default routes;
