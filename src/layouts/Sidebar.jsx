import { Tabs } from "antd";
import ChatSidebar from "./ChatSidebar";
const Sidebar = () => {
  return (
    <div>
      <Tabs
        className="h-screen bg-white "
        defaultActiveKey="1"
        tabPosition="left"
        tabBarGutter={8}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: <ChatSidebar />,
          };
        })}
      />
    </div>
  );
};
export default Sidebar;
