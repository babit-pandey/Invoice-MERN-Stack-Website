import { DashboardLayout } from "@/components/Layout/";
import { ProtectedRoute } from "@/components/Misc/";
import { productsRoutes } from "@/features/products";

const protectedRoutes = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [{ children: [{ element: <DashboardLayout />, children: productsRoutes }] }],
  },
];

export default protectedRoutes;
