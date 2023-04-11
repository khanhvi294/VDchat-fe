import Sider from "antd/es/layout/Sider";

const ChatSidebar = () => {
  return (
    <Sider
      className="!bg-[#f5f7fb] overflow-y-auto h-screen overflow-hidden"
      width="380px"
    >
      <div className="w-20 h-52 bg-slate-500">content</div>
      {/* 
          <div className='w-20 h-52 bg-slate-500'>content</div>
          <div className='w-20 h-52 bg-slate-500'>content</div>
          <div className='w-20 h-52 bg-slate-500'>content</div>
          <div className='w-20 h-52 bg-slate-500'>content</div>
          <div className='w-20 h-52 bg-slate-500'>content</div> */}
    </Sider>
  );
};

export default ChatSidebar;
