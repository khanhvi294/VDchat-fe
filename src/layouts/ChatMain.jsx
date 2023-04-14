import { Avatar, Badge, Dropdown, Input, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import {
  DotChartOutlined,
  FileImageOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import StickyBox from "react-sticky-box";

const ChatMain = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <Layout className="bg-white h-screen">
      <Header className="border-b-2 h-20 bg-white sticky top-0 px-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Avatar size="large" />
            <p className=" text-black font-medium mx-2 text-lg">Khánh Vi</p>
            <Badge size="default" status="success" />
          </div>
          <div className="flex justify-between items-center w-32">
            <SearchOutlined />
            <SearchOutlined />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow={{
                pointAtCenter: true,
              }}
              trigger={["click"]}
              className="font-normal"
            >
              <DotChartOutlined />
            </Dropdown>
          </div>
        </div>
      </Header>
      <Content className="overflow-y-auto overflow-hidden mx-6">
        <div className="flex items-end ">
          <Avatar size="large" className="mr-2" />
          <div>
            <p className=" text-black font-medium ml-2">Khánh Vi</p>
            <div className="w-fit px-4 py-1 bg-[#a49eed] rounded-3xl ">
              content
            </div>
          </div>{" "}
        </div>
        <div className=" rounded-3xl float-right  bg-[#e6ebf5] w-fit px-4 py-1">
          ahahahahahah
        </div>
      </Content>
      <Footer className="bg-white border-t-2 h-20 sticky bottom-0 flex justify-between items-center">
        <Input
          size="large"
          placeholder="Message"
          className="rounded-2xl bg-[#e6ebf5] text-black hover:border-[#a49eed]"
        />
        <div className="flex justify-around w-24">
          <SmileOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
          <FileImageOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
        </div>
      </Footer>
    </Layout>
  );
};

export default ChatMain;
