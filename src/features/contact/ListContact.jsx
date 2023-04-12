import { Avatar, List } from "antd";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const ListContact = () => (
  <List
    className="p-6"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item className="!justify-start !border-b-0 hover:bg-slate-200 rounded-lg !px-1">
        <Avatar size="large" className="mr-2" />
        <p className=" text-black font-medium">{item.title}</p>
      </List.Item>
    )}
  />
);

export default ListContact;
