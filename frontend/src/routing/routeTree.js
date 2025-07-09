import { createRootRoute } from "@tanstack/react-router";
import  { RootLayout } from "../RootLayout";
import { homePageRoute } from "./homepage";
import { authRoute } from "./auth.route";
import { dasboardRoute } from "./dashboard";
import { userDashboard } from "./userDashboard";
import { TermsAndCondition } from "./TermsandCondition";

export const rootRoute=createRootRoute({
    component:RootLayout
})
export const routeTree=rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dasboardRoute,
    userDashboard,
    TermsAndCondition,
])
