import React from "react";
import "./App.css";

import { PageHeader, Avatar, Button, Row, Space, Badge, Dropdown, List, Card, Menu } from "antd";

import { NotificationOutlined } from "@ant-design/icons";

function App() {
  return (
    <PageHeader
      ghost={false}
      avatar={{
        icon: <span className="iconfont icon-github-fill" style={{ fontSize: "32px" }}></span>,
        style: { background: "black" },
      }}
      extra={
        <Space>
          <Badge overflowCount={5} count={0} showZero={true} color={"#3498db"}>
            <NotificationOutlined style={{ fontSize: 24 }} />
          </Badge>
          <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            arrow
            overlay={
              <Menu>
                <Menu.Item key="1">new repo</Menu.Item>
                <Menu.Item key="2">import repo</Menu.Item>
                <Menu.Item key="3">new gist</Menu.Item>
                <Menu.Item key="4">new organization</Menu.Item>
              </Menu>
            }
          >
            <div>
              <span className="iconfont icon-add" style={{ fontSize: "20px", marginRight: "2px" }}></span>
              <span
                className="iconfont icon-caretdown
"
                style={{ fontSize: "20px" }}
              ></span>
            </div>
          </Dropdown>

          <Button shape="circle" size="large">
            Go
          </Button>
        </Space>
      }
    >
      <h1> 当前页面使用技术点:</h1>
      <ul>
        <li> 页头使用了 ghost:false属性，使用了一个白底，和容器元素背景区分开</li>
        <li>page header属于一个UI视图层面的高级封装组件，不够灵活，需要根据实际情况使用</li>
        <li>space组件水平控制间隔，并调整垂直对齐</li>
        <li>使用badge修改徽标</li>
        <li>使用font awesome图标库</li>
        <li>使用阿里巴巴iconfont图标库</li>
        <li>avatar支持多种形式, 包括src属性添加图片形式，和icon属性添加组件形式</li>
        <li>dropdown(下拉菜单)一般直接配合menu，不用搭配card, List等组件,可能会造成card的自带样式失效</li>
        <li>用于数据展示的列表可以用List通用列表,用于地址跳转的可以用Menu，菜单列表</li>
      </ul>
    </PageHeader>
  );
}

export default App;
