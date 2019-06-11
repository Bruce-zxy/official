import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Nestify Stack</h2>
              <div>
                <a target="_blank " href="https://github.com/nestify-stack">
                  Nestify Shop
                  <span> - </span>
                  基于Nestify的电商解决方案
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>社区</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://gitter.im/nestify-stack/community"
                >
                  在线讨论
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/ZhiXiao-Lin/nestify/issues"
                >
                  常见问题
                </a>
              </div>
            </div>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <div className="footer-center">
              <h2>友情连接</h2>
              <div>
                <a target="_blank" rel="noopener" href="https://nestjs.com/">
                  Nest.js
                </a>
                <span> - </span>
                <span>
                  用于构建高效，可靠和可扩展的服务器端应用程序的渐进式Node.js框架
                </span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://typeorm.io/">
                  TypeORM
                </a>
                <span> - </span>
                <span>JavaScript 跨平台ORM框架</span>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://pro.ant.design/"
                >
                  Ant Design Pro
                </a>
                <span> - </span>
                <span>开箱即用的中台前端/设计解决方案</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              开源协议
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              赣ICP备 B2-2-100257
            </a>
          </span>

          <span style={{ marginRight: 12 }}>Copyright © Nestify</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
