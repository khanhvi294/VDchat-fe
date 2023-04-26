import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ChatList from "../features/chat/ChatList";
import Contact from "../features/contact/Contact";
import MainLayout from "../layouts/MainLayout";
import GroupList from "../features/group/GroupList";
const Page401 = lazy(() => import("../pages/Page401"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Page404 = lazy(() => import("../pages/Page404"));
const RedirectPage = lazy(() => import("../pages/RedirectPage"));

const ProtectedPage = lazy(() => import("../routes/ProtectedRoutes"));
const PublicRoutes = lazy(() => import("../routes/PublicRoutes"));

export const appRoutes = {
  CHAT: "/",
  AUTH: "/login",
  AUTH_REDIRECT: "/auth/redirect",
  PAGE_401: "/401",
  CONVERSATION: "/chat/:conversationId",
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
            exact: true,
            element: <ChatList />,
          },
          {
            path: "/chat",
            exact: true,
            element: <ChatList />,
          },

          {
            path: appRoutes.CONVERSATION,
            exact: true,
            element: <ChatList />,
          },
          {
            path: "/groups",
            exact: true,
            element: <GroupList />,
          },
          {
            path: "/contacts",
            excat: true,
            element: <Contact />,
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
