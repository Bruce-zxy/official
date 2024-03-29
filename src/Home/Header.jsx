import React from "react";
import { Row, Col, Icon, Menu, Button, Popover } from "antd";

import { enquireScreen } from "enquire-js";

const LOGO_URL =
  "https://camo.githubusercontent.com/39e56237f2d5b811b704bb15785dcc6d67356208/68747470733a2f2f692e696d6775722e636f6d2f646957375237722e706e67";

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: "horizontal"
  };

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ menuMode: b ? "inline" : "horizontal" });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a
            target="_blank"
            href="http://cms.nestify.cn/"
            rel="noopener noreferrer"
          >
            首页
          </a>
        </Menu.Item>
        <Menu.Item key="docs">
          <a
            target="_blank"
            href="http://docs.nestify.cn/"
            rel="noopener noreferrer"
          >
            <span>文档</span>
          </a>
        </Menu.Item>
        {menuMode === "inline" && (
          <Menu.Item key="preview">
            <a
              target="_blank"
              href="https://github.com/ZhiXiao-Lin/nestify"
              rel="noopener noreferrer"
            >
              预览
            </a>
          </Menu.Item>
        )}
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === "inline" ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="https://github.com/ZhiXiao-Lin/nestify"
                  rel="noopener noreferrer"
                >
                  <Button icon="eye-o">预览</Button>
                </a>
              </div>
              {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
