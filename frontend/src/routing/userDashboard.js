import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import UserUrl from "../components/UserUrl"


export const userDashboard = createRoute({
    getParentRoute: () => rootRoute,
    path: '/userDashboard',
    component: UserUrl,
    
  })