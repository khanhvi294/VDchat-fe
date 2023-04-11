import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import ChatMain from "./ChatMain";
import Sidebar from "./Sidebar";
import StickyBox from "react-sticky-box";
import ChatSidebar from "./ChatSidebar";
import Sider from "antd/es/layout/Sider";

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <ChatSidebar />
        <ChatMain />
      </Layout>
    </Layout>

    // <Layout>
    //   {/* <div style={{ display: "flex", alignItems: "flex-start" }}> */}
    //   {/* <StickyBox> */}
    //   <div className="">
    //     <Sidebar />
    //     {/* <ChatSidebar /> */}
    //   </div>
    //   {/* </StickyBox> */}
    //   {/* </div> */}
    //   {/* <Layout> */}
    //   {/*ml-20  <Outlet /> */}
    //   {/* <div className="flex-1"> */}
    //   <ChatMain />
    //   {/* </div> */}
    //   {/* </Layout> */}
    // </Layout>
  );
};

export default MainLayout;
