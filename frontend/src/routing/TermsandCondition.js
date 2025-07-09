import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import TermsAndConditionsPage from "../components/TermsAndConditon"

export const TermsAndCondition = createRoute({
    getParentRoute: () => rootRoute,
    path: '/TermsAndCondition',
    component: TermsAndConditionsPage
  })