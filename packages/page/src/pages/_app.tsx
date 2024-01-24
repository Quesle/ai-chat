import "@/styles/globals.css";
import "@arco-design/web-react/dist/css/arco.css";

import type { AppProps } from "next/app";
import ChatMenu from "@/components/bind/ChatMenu";
import { Layout } from "@arco-design/web-react";
import Panel from "@/components/ui/Panel";

const Header = Layout.Header;
// const Footer = Layout.Footer;
const Content = Layout.Content;

export default function App({ Component, pageProps }: AppProps) {
  const onClickMenu = (path: string) => {
    console.log(path);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Header>
        <ChatMenu onClick={onClickMenu} />
      </Header>
      <Content>
        <Panel>
          <Component {...pageProps} />
        </Panel>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}
