import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";

import {
  PageHeader,
  Avatar,
  Button,
  Row,
  Space,
  Badge,
  Dropdown,
  List,
  Card,
  Menu,
  Input,
  Breadcrumb,
  Typography,
} from "antd";

import { NotificationOutlined, EditOutlined, CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;
const Content: React.FC<Record<string, any>> = function (props) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};

function App() {
  const [inputExpanded, setInputExpanded] = useState(false);
  const baseStyle = { transition: "all 0.1s ease-in-out" };
  const inputStyle = (inputExpanded && { ...baseStyle, width: "400px" }) || baseStyle;
  const inputSuffix = !inputExpanded ? <EditOutlined /> : <div></div>;
  return (
    <div>
      <PageHeader
        className="app-header"
        ghost={false}
        avatar={{
          icon: <span className="iconfont icon-github-fill" style={{ fontSize: "32px" }}></span>,
          style: { background: "black" },
        }}
        extra={
          <Space>
            <Input
              placeholder="search or jump to ... "
              style={{ ...inputStyle }}
              suffix={inputSuffix}
              onFocus={() => {
                setInputExpanded(true);
              }}
              onBlur={() => {
                setInputExpanded(false);
              }}
            />
            <Menu mode="horizontal">
              <Menu.Item key="1">pull request</Menu.Item>
              <Menu.Item key="2">issues</Menu.Item>
              <Menu.Item key="3">marketplace </Menu.Item>
              <Menu.Item key="4">explore</Menu.Item>
            </Menu>
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
          <li>按钮点击后出下拉菜单:1: 使用 dropdown 包裹自定义的button样式 2. dropdown.button有相对固定的api</li>
        </ul>
      </PageHeader>
      <Content className="app-content">
        <Row>
          <Breadcrumb separator="/">
            <Breadcrumb.Item>
              <Text className="text">gsoft-inc</Text>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text className="text" strong>
                craco
              </Text>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Space style={{ marginLeft: "auto" }}>
            <Dropdown
              placement="bottomLeft"
              overlay={() => {
                return (
                  // <Menu>
                  //   <Menu.Item>Menu</Menu.Item>
                  // </Menu>
                  <Card extra={<CloseCircleOutlined />}>xx</Card>
                );
              }}
            >
              <Button>
                <Space align="center">
                  <span className="iconfont icon-eye"></span>
                  <span>Watch</span>
                  <span className="iconfont icon-caretdown"></span>
                </Space>
              </Button>
            </Dropdown>
            <Button>
              <Space align="center">
                <span className="iconfont icon-fork"></span>
                <span>Fork</span>
              </Space>
            </Button>
            <Dropdown.Button
              icon={<span className="iconfont icon-caretdown"></span>}
              overlay={() => {
                return <></>;
              }}
            >
              <Space align="center">
                <span className="iconfont icon-star"></span>
                <span>Starred</span>
              </Space>
            </Dropdown.Button>
          </Space>
        </Row>
      </Content>
    </div>
  );
}

export default App;
