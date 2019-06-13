import React from "react";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>
          Let’s <span>Nestify</span>
        </h2>
        <OverPack>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            className="page2-content"
          >
            <p key="p" className="page-content">
              命令行运行下列命令，快速启动开发服务：
            </p>
            <div key="code1" className="home-code">
              <div>安装完Node.js、数据库等相关软件环境后：</div>
              <div>
                $ <span>git clone</span> git@github.com:ZhiXiao-Lin/nestify.git
                --depth=1
              </div>
              <div>$ cd nestify && yarn && yarn ic</div>
              <div>
                $ yarn dev{" "}
                <span className="home-code-comment">
                  打开浏览器访问{" "}
                  <a target="_blank" href="http://localhost:8000">
                    http://localhost:8000
                  </a>
                </span>
              </div>
            </div>
            <p key="p2" className="page-content">
              需要帮助？请先阅读
              <a target="_blank" href="http://docs.nestify.cn/">
                {" "}
                开发文档{" "}
              </a>
              ， 如果未能解决，可以到 GitHub 上
              <a href="https://github.com/ZhiXiao-Lin/nestify/issues">
                进行提问
              </a>
              。
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <a
                href="https://github.com/ZhiXiao-Lin/nestify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary">源码</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
