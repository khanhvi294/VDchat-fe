import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ChatSidebar from "../layouts/ChatSidebar";
const Page401 = lazy(() => import("../pages/Page401"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Page404 = lazy(() => import("../pages/Page404"));
const RedirectPage = lazy(() => import("../pages/RedirectPage"));

const ProtectedPage = lazy(() => import("../routes/ProtectedRoutes"));
const PublicRoutes = lazy(() => import("../routes/PublicRoutes"));

export const appRoutes = {
  CHAT: "/chat",
  AUTH: "/login",
  AUTH_REDIRECT: "/auth/redirect",
  PAGE_401: "/401",
};

const publicRoutes = [];

const router = createBrowserRouter([
  {
    element: <ProtectedPage />,
    children: [
      {
        element: <MainLayout />,
        // errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <ChatSidebar />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        path: appRoutes.AUTH,
        element: <LoginPage />,
      },
      {
        path: appRoutes.AUTH_REDIRECT,
        element: <RedirectPage />,
      },
      {
        path: appRoutes.PAGE_401,
        element: <Page401 />,
      },
    ],
  },
]);

export default router;
