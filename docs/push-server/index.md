---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Push Server"
  text: "轻量级消息推送服务"
  tagline: 基于 Spring Boot 4 与 GraalVM Native Image。秒级启动，极低内存占用，为现代微服务而生。
  actions:
    - theme: brand
      text: 快速开始
      link: /push-server/guide/getting-started
    - theme: alt
      text: API 参考
      link: /push-server/api/

features:
  - title: 🚀 极致轻量
    details: 基于 GraalVM Native Image 构建，无需 JVM 即可运行，启动速度极快，内存占用极低。
  - title: 📦 开箱即用
    details: 无需数据库，无复杂的依赖，只需简单的环境变量配置即可快速部署。
  - title: 🔌 统一接口
    details: 屏蔽企业微信 API 的复杂性，提供统一、简洁的 HTTP 接口，支持多种消息类型。
  - title: 🛡️ 安全可靠
    details: 内置 API Key 鉴权、IP 封禁、限流等安全机制，保障服务稳定运行。
---