import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ChatList from "../features/conversation/ChatList";
import Contact from "../features/contact/Contact";
import MainLayout from "../layouts/MainLayout";
import GroupList from "../features/group/GroupList";
import ChatBackground from "../features/chat/ChatBackground";
import ChatContainer from "../features/chat/ChatContainer";
const ChatMain = lazy(() => import("../layouts/ChatMain"));
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
  CONVERSATION: "/:conversationId",
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
            path: appRoutes.CHAT,
            exact: true,
            element: <ChatBackground />,
          },
          {
            path: appRoutes.CONVERSATION,
            exact: true,
            element: <ChatContainer />,
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
