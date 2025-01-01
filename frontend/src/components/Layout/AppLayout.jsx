import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { FiActivity, FiZap } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import ThemeToggle from "../ThemeToggle/themeToggle";
import { routes } from "../../routes";

const { Header, Sider, Content } = Layout;

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const menuItems = routes.map((route) => ({
    key: route?.path,
    icon: route?.icon,
    label: <Link to={route?.path}>{route?.name}</Link>,
  }));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={150}
        collapsedWidth={55}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            // background: 'rgba(255, 255, 255, 0.2)',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {collapsed ? (
            <FiActivity size={20} color="white" />
          ) : (
            <FiZap size={34} color="white" />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ padding: "0 14px", display: "flex", alignItems: "center" }}
          >
            {collapsed ? (
              <RxHamburgerMenu
                size={24}
                onClick={() => setCollapsed(!collapsed)}
              />
            ) : (
              <IoCloseCircleOutline
                size={24}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
          </div>
          <div style={{ padding: "0 24px" }}>
            <ThemeToggle />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
