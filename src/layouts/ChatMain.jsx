import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import StickyBox from "react-sticky-box";

const ChatMain = () => {
  return (
    <Layout className="bg-white h-screen">
      <Header className="border-b-2 h-20 bg-white sticky top-0" />
      <Content className="overflow-y-auto overflow-hidden">
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
        <div className="w-20 h-52 bg-slate-500">content</div>
      </Content>
      <Footer className="bg-white border-t-2 h-20 sticky bottom-0" />
    </Layout>
  );
};

export default ChatMain;
