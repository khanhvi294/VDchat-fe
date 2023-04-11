import { createBrowserRouter } from "react-router-dom";
import Test from "../component/Test";
import MainLayout from "../layouts/MainLayout";
import ChatSidebar from "../layouts/ChatSidebar";

export const appRoutes = {
  CHAT: '/chat'
}
const router = createBrowserRouter([
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
]);

export default router;
