# API 参考

Push Server 提供了一个统一的 HTTP 接口用于发送消息。

## 发送消息接口

- **URL**: `/v2/push`
- **Method**: `POST`
- **Content-Type**: `application/json`

### 鉴权

在请求 Header 中添加 `X-API-Key`，值为配置中的 `push.auth.key`。

### 请求参数

请求体为一个 JSON 对象，包含以下字段：

| 字段名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `target` | string | 是 | 接收消息的用户 ID。支持多个用户用 `|` 分隔，或者使用 `@all` 推送给所有人。 |
| `type` | string | 否 | 消息类型。支持 `TEXT`, `MARKDOWN`, `TEXT_CARD`, `IMAGE`, `NEWS`。默认为 `TEXT`。 |
| `content` | string | 条件必填 | 消息内容。用于 `TEXT` 和 `MARKDOWN` 类型。 |
| `title` | string | 条件必填 | 标题。用于 `TEXT_CARD`, `NEWS` 类型。 |
| `url` | string | 否 | 跳转链接。用于 `TEXT_CARD`, `NEWS` 类型。 |
| `picUrl` | string | 否 | 图片链接。用于 `NEWS` 类型。 |
| `description` | string | 否 | 描述信息。用于 `TEXT_CARD`, `NEWS` 类型。 |
| `articles` | array | 否 | 图文列表。用于 `NEWS` 类型。 |

### 示例

#### 1. 发送文本消息 (TEXT)

```bash
curl -X POST http://localhost:8000/v2/push \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_secret_key" \
  -d '{
    "target": "ZhangSan|LiSi",
    "type": "TEXT",
    "content": "服务器负载过高，请及时查看！"
  }'
```

#### 2. 发送 Markdown 消息 (MARKDOWN)

```bash
curl -X POST http://localhost:8000/v2/push \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_secret_key" \
  -d '{
    "target": "@all",
    "type": "MARKDOWN",
    "content": "# 每日构建报告\n> 构建状态：**成功**\n> \n> [查看详情](http://jenkins.example.com)"
  }'
```

#### 3. 发送文本卡片消息 (TEXT_CARD)

```bash
curl -X POST http://localhost:8000/v2/push \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_secret_key" \
  -d '{
    "target": "WangWu",
    "type": "TEXT_CARD",
    "title": "待审批申请",
    "description": "<div class=\"gray\">2024年1月1日</div> <div class=\"normal\">您有一个新的报销申请待审批</div>",
    "url": "http://oa.example.com/approve/123"
  }'
```

#### 4. 发送图文消息 (NEWS)

```bash
curl -X POST http://localhost:8000/v2/push \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_secret_key" \
  -d '{
    "target": "@all",
    "type": "NEWS",
    "articles": [
       {
         "title": "系统升级通知",
         "description": "我们将于今晚进行系统维护。",
         "url": "http://example.com/notice",
         "picUrl": "http://example.com/image.jpg"
       }
    ]
  }'
```
