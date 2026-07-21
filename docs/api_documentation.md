# 动漫角色介绍网站 - API接口文档

## 1. 接口概述

### 1.1 基础信息

- **API基础路径**: `https://api.anime-character.com/v1`
- **协议**: HTTPS
- **认证方式**: JWT Bearer Token
- **数据格式**: JSON
- **字符编码**: UTF-8

### 1.2 认证说明

用户登录后获取JWT Token，在后续请求的Header中携带：

```
Authorization: Bearer <token>
```

未认证请求会返回 `401 Unauthorized`。

### 1.3 响应格式

**成功响应**:
```json
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

**失败响应**:
```json
{
  "code": 400,
  "message": "错误描述",
  "data": null
}
```

### 1.4 错误码

| 错误码 | 含义 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未认证 |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

---

## 2. 角色接口

### 2.1 获取角色列表

**GET** `/api/characters`

获取角色列表，支持分页、筛选和排序。

**请求参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| page | number | 否 | 1 | 页码 |
| limit | number | 否 | 20 | 每页数量（最大100） |
| sort | string | 否 | updated | 排序字段：`popular`(点赞数) / `updated`(更新时间) / `name`(名称) |
| order | string | 否 | desc | 排序方式：`asc` / `desc` |
| anime_id | number | 否 | | 按作品ID筛选 |
| tag | string | 否 | | 按标签筛选 |
| role_type | string | 否 | | 按角色定位筛选 |
| keyword | string | 否 | | 关键词搜索（角色名、作品名） |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "name": "日向雏田",
        "name_jp": "日向ヒナタ",
        "name_romaji": "Hyuuga Hinata",
        "avatar_url": "https://cloudinary.com/xxx/avatar.png",
        "anime": {
          "id": 1,
          "name": "火影忍者",
          "cover_url": "https://cloudinary.com/xxx/anime-cover.png"
        },
        "tags": ["温柔", "害羞", "忍者"],
        "likes_count": 12580,
        "favorites_count": 8920,
        "updated_at": "2026-07-20T10:30:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 50,
      "total_count": 1000
    }
  }
}
```

### 2.2 获取角色详情

**GET** `/api/characters/:id`

获取角色完整信息。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 角色ID |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "name": "日向雏田",
    "name_jp": "日向ヒナタ",
    "name_romaji": "Hyuuga Hinata",
    "avatar_url": "https://cloudinary.com/xxx/avatar.png",
    "description": "火之国木叶隐村的忍者，日向一族宗家的嫡长女...",
    "personality": "温柔、善良、坚强、害羞",
    "appearance": "蓝黑色长发，白眼，身材苗条...",
    "background": "日向一族宗家的继承人，从小暗恋漩涡鸣人...",
    "role_type": "重要配角",
    "birthday": "12-27",
    "blood_type": "A",
    "constellation": "摩羯座",
    "height": "160cm",
    "weight": "45kg",
    "voice_actor": {
      "id": 1,
      "name": "水树奈奈",
      "name_jp": "水樹奈々",
      "avatar_url": "https://cloudinary.com/xxx/seiyu.png"
    },
    "anime": {
      "id": 1,
      "name": "火影忍者",
      "name_jp": "NARUTO -ナルト-",
      "studio": "Studio Pierrot",
      "release_date": "2002-10-03",
      "cover_url": "https://cloudinary.com/xxx/anime-cover.png"
    },
    "tags": ["温柔", "害羞", "忍者", "大小姐"],
    "abilities": [
      { "id": 1, "name": "白眼", "description": "日向一族血继限界，可洞察周围环境" },
      { "id": 2, "name": "柔拳", "description": "日向一族的体术，可攻击查克拉穴位" }
    ],
    "weapons": [],
    "relationships": [
      {
        "id": 1,
        "related_character_id": 2,
        "related_character_name": "漩涡鸣人",
        "relationship_type": "CP",
        "description": "夫妻"
      }
    ],
    "images": [
      {
        "id": 1,
        "url": "https://cloudinary.com/xxx/character-art.png",
        "type": "立绘",
        "caption": "官方立绘",
        "sort_order": 0
      }
    ],
    "videos": [
      {
        "id": 1,
        "url": "https://www.bilibili.com/video/xxx",
        "type": "片段",
        "title": "雏田出场片段"
      }
    ],
    "audios": [
      {
        "id": 1,
        "url": "https://s3.amazonaws.com/xxx/theme.mp3",
        "type": "主题曲",
        "title": "角色主题曲",
        "duration": 180
      }
    ],
    "likes_count": 12580,
    "favorites_count": 8920,
    "votes_count": 5620,
    "is_liked": false,
    "is_favorited": false,
    "created_at": "2026-07-01T08:00:00Z",
    "updated_at": "2026-07-20T10:30:00Z"
  }
}
```

### 2.3 点赞角色

**POST** `/api/characters/:id/like`

点赞或取消点赞角色。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 角色ID |

**认证要求**: 需要登录

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "is_liked": true,
    "likes_count": 12581
  }
}
```

### 2.4 收藏角色

**POST** `/api/characters/:id/favorite`

收藏或取消收藏角色。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 角色ID |

**认证要求**: 需要登录

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "is_favorited": true,
    "favorites_count": 8921
  }
}
```

---

## 3. 作品接口

### 3.1 获取作品列表

**GET** `/api/anime`

获取作品列表。

**请求参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| page | number | 否 | 1 | 页码 |
| limit | number | 否 | 20 | 每页数量 |
| keyword | string | 否 | | 作品名搜索 |
| sort | string | 否 | release_date | 排序字段 |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "name": "火影忍者",
        "name_jp": "NARUTO -ナルト-",
        "studio": "Studio Pierrot",
        "release_date": "2002-10-03",
        "cover_url": "https://cloudinary.com/xxx/anime-cover.png",
        "character_count": 150
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 10,
      "total_count": 200
    }
  }
}
```

### 3.2 获取作品详情

**GET** `/api/anime/:id`

获取作品详细信息及角色列表。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 作品ID |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "name": "火影忍者",
    "name_jp": "NARUTO -ナルト-",
    "studio": "Studio Pierrot",
    "release_date": "2002-10-03",
    "cover_url": "https://cloudinary.com/xxx/anime-cover.png",
    "description": "故事讲述了漩涡鸣人的成长历程...",
    "characters": [
      {
        "id": 1,
        "name": "日向雏田",
        "avatar_url": "https://cloudinary.com/xxx/avatar.png",
        "role_type": "重要配角"
      }
    ]
  }
}
```

---

## 4. 评论接口

### 4.1 获取角色评论列表

**GET** `/api/characters/:id/comments`

获取角色的评论列表。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 角色ID |

**请求参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| page | number | 否 | 1 | 页码 |
| limit | number | 否 | 10 | 每页数量 |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "content": "雏田真的好温柔啊！",
        "user": {
          "id": 100,
          "nickname": "动漫爱好者",
          "avatar_url": "https://cloudinary.com/xxx/user-avatar.png"
        },
        "likes_count": 256,
        "is_liked": false,
        "created_at": "2026-07-20T14:30:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_count": 45
    }
  }
}
```

### 4.2 发表评论

**POST** `/api/characters/:id/comments`

发表角色评论。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 角色ID |

**认证要求**: 需要登录

**请求体**:
```json
{
  "content": "评论内容"
}
```

**请求体参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| content | string | 是 | 评论内容（1-500字） |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "comment": {
      "id": 46,
      "content": "评论内容",
      "user": {
        "id": 100,
        "nickname": "动漫爱好者",
        "avatar_url": "https://cloudinary.com/xxx/user-avatar.png"
      },
      "likes_count": 0,
      "is_liked": false,
      "created_at": "2026-07-21T10:00:00Z"
    }
  }
}
```

### 4.3 点赞评论

**POST** `/api/comments/:id/like`

点赞或取消点赞评论。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 评论ID |

**认证要求**: 需要登录

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "is_liked": true,
    "likes_count": 257
  }
}
```

---

## 5. 排行榜接口

### 5.1 获取角色排行榜

**GET** `/api/ranking`

获取角色人气排行榜。

**请求参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| type | string | 否 | likes | 排行类型：`likes`(点赞) / `favorites`(收藏) / `votes`(投票) |
| period | string | 否 | all | 时间周期：`week`(本周) / `month`(本月) / `all`(全部) |
| limit | number | 否 | 20 | 返回数量（最大50） |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "type": "likes",
    "period": "all",
    "list": [
      {
        "rank": 1,
        "character_id": 1,
        "name": "日向雏田",
        "avatar_url": "https://cloudinary.com/xxx/avatar.png",
        "anime_name": "火影忍者",
        "score": 12580
      },
      {
        "rank": 2,
        "character_id": 2,
        "name": "漩涡鸣人",
        "avatar_url": "https://cloudinary.com/xxx/naruto.png",
        "anime_name": "火影忍者",
        "score": 11890
      }
    ]
  }
}
```

### 5.2 投票给角色

**POST** `/api/characters/:id/vote`

投票给角色，每个用户每天限投一次。

**路径参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | number | 是 | 角色ID |

**认证要求**: 需要登录

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "vote_count": 5621,
    "rank": 5
  }
}
```

---

## 6. 用户接口

### 6.1 获取当前用户信息

**GET** `/api/users/me`

获取当前登录用户的信息。

**认证要求**: 需要登录

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 100,
    "email": "user@example.com",
    "nickname": "动漫爱好者",
    "avatar_url": "https://cloudinary.com/xxx/user-avatar.png",
    "favorites_count": 15,
    "created_at": "2026-06-01T08:00:00Z"
  }
}
```

### 6.2 获取用户收藏列表

**GET** `/api/users/me/favorites`

获取当前用户收藏的角色列表。

**认证要求**: 需要登录

**请求参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| page | number | 否 | 1 | 页码 |
| limit | number | 否 | 20 | 每页数量 |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "character_id": 1,
        "name": "日向雏田",
        "avatar_url": "https://cloudinary.com/xxx/avatar.png",
        "anime_name": "火影忍者",
        "favorited_at": "2026-07-15T10:00:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 1,
      "total_count": 15
    }
  }
}
```

### 6.3 更新用户信息

**PUT** `/api/users/me`

更新用户个人信息。

**认证要求**: 需要登录

**请求体**:
```json
{
  "nickname": "新昵称",
  "avatar_url": "https://cloudinary.com/xxx/new-avatar.png"
}
```

**请求体参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| nickname | string | 否 | 用户昵称（2-50字） |
| avatar_url | string | 否 | 用户头像URL |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "user": {
      "id": 100,
      "nickname": "新昵称",
      "avatar_url": "https://cloudinary.com/xxx/new-avatar.png"
    }
  }
}
```

---

## 7. 搜索接口

### 7.1 全站搜索

**GET** `/api/search`

全站搜索角色和作品。

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| q | string | 是 | 搜索关键词 |
| type | string | 否 | all | 搜索类型：`character`(角色) / `anime`(作品) / `all`(全部) |
| limit | number | 否 | 10 | 每种类型返回数量 |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "characters": [
      {
        "id": 1,
        "name": "日向雏田",
        "name_jp": "日向ヒナタ",
        "avatar_url": "https://cloudinary.com/xxx/avatar.png",
        "anime_name": "火影忍者"
      }
    ],
    "anime": [
      {
        "id": 1,
        "name": "火影忍者",
        "name_jp": "NARUTO -ナルト-",
        "cover_url": "https://cloudinary.com/xxx/anime-cover.png"
      }
    ]
  }
}
```

---

## 8. 标签接口

### 8.1 获取标签列表

**GET** `/api/tags`

获取所有可用标签。

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "tags": [
      { "name": "傲娇", "count": 150 },
      { "name": "元气", "count": 120 },
      { "name": "高冷", "count": 80 },
      { "name": "温柔", "count": 200 }
    ]
  }
}
```

---

## 9. 认证接口

### 9.1 用户登录

**POST** `/api/auth/login`

用户登录。

**请求体**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 100,
      "email": "user@example.com",
      "nickname": "动漫爱好者",
      "avatar_url": "https://cloudinary.com/xxx/user-avatar.png"
    }
  }
}
```

### 9.2 用户注册

**POST** `/api/auth/register`

用户注册。

**请求体**:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "nickname": "动漫爱好者"
}
```

**请求体参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| email | string | 是 | 邮箱地址 |
| password | string | 是 | 密码（6-32位） |
| nickname | string | 是 | 用户昵称（2-50字） |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "user": {
      "id": 101,
      "email": "user@example.com",
      "nickname": "动漫爱好者"
    }
  }
}
```

---

## 10. 文件上传接口

### 10.1 上传图片

**POST** `/api/upload/image`

上传角色图片。

**认证要求**: 需要登录（管理员权限）

**请求体**: Form Data

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| file | File | 是 | 图片文件（支持jpg, png, webp） |
| character_id | number | 是 | 所属角色ID |
| type | string | 是 | 图片类型：`立绘` / `截图` / `壁纸` / `官方图` / `同人图` |
| caption | string | 否 | 图片说明 |

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "success": true,
    "url": "https://cloudinary.com/xxx/uploaded-image.png"
  }
}
```

---

**文档版本**: v1.0  
**创建日期**: 2026年7月21日  
**适用项目**: 动漫角色介绍网站