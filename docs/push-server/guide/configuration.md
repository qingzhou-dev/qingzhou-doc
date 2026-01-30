# 配置指南

Push Server 支持通过环境变量或 YAML 配置文件进行配置。

## 核心配置

::: info 说明
核心配置主要用于连接企业微信 API 和设置服务的基础鉴权。
:::

| 配置项 | 环境变量 | 说明 | 示例 |
| :--- | :--- | :--- | :--- |
| `push.auth.key` | `PUSH_AUTH_KEY` | **[必填]** API 调用鉴权 Key，调用接口时需通过 Header `X-API-Key` 传递 | `my-secret-key-123` |
| `push.wecom.app-key` | `PUSH_WECOM_APP_KEY` | **[必填]** 企业微信 CorpId | `ww1234567890` |
| `push.wecom.app-secret` | `PUSH_WECOM_APP_SECRET` | **[必填]** 企业微信应用 Secret | `AbCdEfGhIjKlMnOpQrStUvWxYz` |
| `push.wecom.agent-id` | `PUSH_WECOM_AGENT_ID` | **[必填]** 企业微信应用 AgentId | `1000001` |

::: danger 安全警告
`push.auth.key` 是调用接口的唯一凭证，请务必设置一个复杂的随机字符串，并妥善保管，**切勿泄露给无关人员**。
:::

## 安全配置

为了保护服务不被滥用，支持配置简单的安全策略。

| 配置项 | 说明 | 默认值 |
| :--- | :--- | :--- |
| `push.security.block-minutes` | 鉴权失败过多后的封禁时长（分钟） | `60` |
| `push.security.fail-window-minutes` | 统计鉴权失败的时间窗口（分钟） | `5` |
| `push.security.max-fails` | 窗口期内允许的最大鉴权失败次数，超过即封禁 IP | `5` |
| `push.security.rate-limit-capacity` | 令牌桶限流容量 | `100` |
| `push.security.rate-limit-qps` | 每秒生成的令牌数（QPS 限制） | `10` |

## 示例配置文件

```yaml
server:
  port: 8000

push:
  auth:
    key: "change_me_to_secure_key"
  
  wecom:
    app-key: "wwxxxxxxxxxxxx"
    app-secret: "xxxxxxxxxxxxxxxxxxxxxxxx"
    agent-id: 1000001
    
  security:
    block-minutes: 60
    fail-window-minutes: 5
    max-fails: 5
    rate-limit-capacity: 100
    rate-limit-qps: 10
```
