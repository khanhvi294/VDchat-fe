import { Suspense } from "react";
import router from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./api/userApi";
import { updateUserInfo } from "./redux/slices/userSlice";

function App() {
  const { isLogin } = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  console.log("isLogin", isLogin);
  useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    enabled: isLogin,
    onSuccess: (data) => {
      console.log("user info data", data);
      dispatch(updateUserInfo(data.data));
    },
  });

  return (
    <>
      <Suspense fallback={<h3>loading...</h3>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
