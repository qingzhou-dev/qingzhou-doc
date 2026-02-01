---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Push Server"
  text: "轻量级消息推送服务"
  tagline: 专注于极致资源效率。基于 Spring Boot 4 与 GraalVM Native Image，实现 0 毫秒级响应唤醒与超低运行成本。
  image:
    src:  /push-server/logo.png
    alt: qingzhou-push-server-logo 
  actions:
    - theme: brand
      text: 快速开始
      link: /push-server/guide/getting-started
    - theme: alt
      text: 项目仓库
      link: https://github.com/qingzhou-dev/push-server  # 增加架构说明会显得更专业

features:
  - title: 🚀 极致轻量
    details: 基于 GraalVM 静态编译，无需安装 JVM 环境。镜像体积缩小 90%，冷启动时间步入毫秒级时代。
  - title: ⚡ 零依赖部署
    details: 无需 MySQL/Redis 等外部数据库，内置状态自管理。支持单文件运行，是边缘计算与微服务的理想选择。
  - title: 🔌 标准化网关
    details: 统一多平台推送协议（企业微信等）。自动处理 Token 刷新、重试机制与回调校验，开发者只需关心内容。
  - title: 🛡️ 企业级保障
    details: 生产级安全防护。内置多维度的 API Key 校验、访问白名单及智能限流策略，确保服务始终可用。
---