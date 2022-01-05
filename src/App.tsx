import React, { useEffect, useRef, useState } from "react";
import type { ReactText } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import ProList from "@ant-design/pro-list";

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
  Tabs,
} from "antd";

import { NotificationOutlined, EditOutlined, CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import { useReducer } from "react";
const { Text } = Typography;

const data = [{ desc: "participating and mentions" }, { desc: "all activity" }, { desc: "ignore" }, { desc: "custom" }];

function App() {
  const [inputExpanded, setInputExpanded] = useState(false);
  const baseStyle = { transition: "all 0.1s ease-in-out" };
  const inputStyle = (inputExpanded && { ...baseStyle, width: "400px" }) || baseStyle;
  const inputSuffix = !inputExpanded ? <EditOutlined /> : <div></div>;
  const [selectedRowKeys, setSelectedRowKeys] = useState<ReactText[]>([]);
  const [watchVisible, setWatchVisible] = useState(false);
  const [, forceUpdate] = useReducer((count) => count + 1, { count: 0 });
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: ReactText[]) => setSelectedRowKeys(keys),
  };
  useEffect(() => {
    const fun = () => {
      setWatchVisible(false);
    };
    document.addEventListener("click", fun);
    return () => {
      document.removeEventListener("click", fun);
    };
  }, [watchVisible]);
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
          <li>dropdown内部如果样式失效，使用div包括组件，例如div包裹一个card</li>
          <li>用于数据展示的列表可以用List通用列表,用于地址跳转的可以用Menu，菜单列表</li>
          <li>按钮点击后出下拉菜单:1: 使用 dropdown 包裹自定义的button样式 2. dropdown.button有相对固定的api</li>
          <li>使用了prolist组件，基于protable但是赋与了list更多table的功能，包括选中，展开等</li>
          <li>prolist对每一行的数据有较为明确的定义，也就是columns较为固定,title,subtitle,description</li>
          <li>使用card作为容器，主要利用了他可以添加padding，以及size调整padding大小，并快速添加边框，</li>
          <li>有的时候只需要简单的padding，也可以直接添加一个css规则 app.style,避免可能引入多余的不满意样式</li>
          <li>
            为了实现在dropdown的弹出层区域内点击一个关闭按钮，让dropdown消失，所以我们需要给dropdown添加visible属性
          </li>
          <li>
            空白区域点击实现隐藏利用了事件的冒泡，给body一个关闭的动作，然后在指定区域内使用 e.stopPropagation
            可以阻止冒泡，也就不会触发body上的关闭动作
          </li>
        </ul>
      </PageHeader>
      <div className="app-content">
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
              placement="bottomRight"
              trigger={["click"]}
              overlayStyle={{
                width: "300px",
              }}
              visible={watchVisible}
              overlay={() => {
                return (
                  <div
                    className="simple-card"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ProList
                      className="watch-card"
                      toolBarRender={() => {
                        return [
                          <CloseCircleOutlined
                            style={{ fontSize: "17px" }}
                            onClick={() => {
                              setWatchVisible(false);
                            }}
                          />,
                        ];
                      }}
                      split
                      onRow={(record: any) => {
                        return {
                          onClick: () => {
                            console.log(record);
                          },
                        };
                      }}
                      headerTitle={<div>Notification:{selectedRowKeys}</div>}
                      rowKey={(row) => {
                        return row.desc;
                      }}
                      dataSource={data}
                      metas={{
                        description: {
                          dataIndex: "desc",
                        },
                      }}
                      rowSelection={rowSelection}
                    ></ProList>
                  </div>
                );
              }}
            >
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setWatchVisible(!watchVisible);
                }}
              >
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
        {/* <Tabs defaultActiveKey="1" type="line" style={{ height: "500px" }}>
          <Tabs.TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          itemLayout="horizontal"
        /> */}
        <div style={{ height: "400px" }}></div>
      </div>
    </div>
  );
}

export default App;
