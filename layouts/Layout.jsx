import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";
import { isAdmin } from "../src/config/isAdmin";

export const Layout=isAdmin?AdminLayout:MainLayout;

