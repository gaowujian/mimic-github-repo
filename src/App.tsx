import React from "react";
import "./App.css";

import { PageHeader, Avatar, Button, Row, Space, Badge, Dropdown } from "antd";
import logo from "./github.png";
import { NotificationOutlined } from "@ant-design/icons";

function App() {
  return (
    <PageHeader
      ghost={false}
      avatar={{ src: logo }}
      extra={
        <Space>
          <Badge overflowCount={5} count={0} showZero={true} color={"lightblue"}>
            <NotificationOutlined style={{ fontSize: 24 }} />
          </Badge>
          <Dropdown
            trigger={["click"]}
            overlay={
              <>
                <button>1</button>
                <button>2</button>
              </>
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

          <Button>登录</Button>
        </Space>
      }
    >
      <i className="fa fa-github" aria-hidden="true"></i>
      <h1> 当前页面使用技术点:</h1>
      <ul>
        <li> 页头使用了 ghost:false属性，使用了一个白底，和容器元素背景区分开</li>
        <li>space组件水平控制间隔，并调整垂直对齐</li>
        <li>使用badge修改徽标</li>
        <li>使用font awesome图标库</li>
        <li>使用阿里巴巴iconfont图标库</li>
      </ul>
    </PageHeader>
  );
}

export default App;
