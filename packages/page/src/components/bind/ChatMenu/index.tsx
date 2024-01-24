import { Menu } from "@arco-design/web-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const MenuItem = Menu.Item;

export interface ChatMenuProps {
  onClick: (key: string) => void;
}

const ChatMenu: React.FC<ChatMenuProps> = (props) => {
  const { onClick } = props;
  const [selectedKey, setSelectedKey] = useState("translation");

  useEffect(() => {
    if (window.location.pathname.includes("/translation")) {
      setSelectedKey("translation");
    } else {
      window.location.href = "/translation";
      // redirect("/translation");
    }
  }, []);

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[selectedKey]}
      defaultSelectedKeys={[selectedKey]}
      onClickMenuItem={(key: string) => {
        setSelectedKey(key);
        onClick(key);
      }}
    >
      <MenuItem key="translation">
        <Link href="/translation">百度翻译</Link>
      </MenuItem>
      {/* <MenuItem key="ai-translation">
        <Link href="/ai-translation">AI 翻译</Link>
      </MenuItem> */}
    </Menu>
  );
};

export default ChatMenu;
