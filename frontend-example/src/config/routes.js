import { AppLayout } from "../Layout/Layout";
import { Admin } from "../pages/admin/Admin";
import { SignIn } from "../pages/admin/SignIn";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";

const AdminRoutes = [
    {
        path: '/admin',
        component: Admin,
        layout: AppLayout
    },
    {
        path: 'admin/sign-in',
        component: SignIn,
        layout: AppLayout
    }
]

const GeneralRoutes = [
    {
        path: '/',
        component: Home,
        layout: AppLayout
    },
    {
        path: '/contact',
        component: Contact,
        layout: AppLayout
    },
    {
        path: '/*',
        component: NotFound,
        layout: AppLayout
    }
];

const allRoutesProject = [...GeneralRoutes, ...AdminRoutes];

export default allRoutesProject;