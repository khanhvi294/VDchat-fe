import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import StickyBox from "react-sticky-box";

const ChatMain = () => {
  return (
    // <div className="">
    <Layout className="bg-white flex flex-col">
      {/* <div style={{ display: "flex" }}> */}
      <Header className="border-b-2 h-20 bg-white" />
      {/* </div> */}
      <Content className="overflow-y-auto overflow-hidden">
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
      </Content>
      <Footer className="bg-white border-t-2 h-20" />

      {/* <StickyBox>
        </StickyBox> */}
    </Layout>
    // </div>
  );
};

export default ChatMain;
