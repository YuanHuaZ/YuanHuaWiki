# 动漫角色介绍网站 - 数据库设计文档

## 1. 数据模型定义

### 1.1 实体关系图 (ERD)

```mermaid
erDiagram
    ANIME ||--o{ CHARACTER : contains
    CHARACTER ||--o{ CHARACTER_IMAGE : has
    CHARACTER ||--o{ CHARACTER_VIDEO : has
    CHARACTER ||--o{ CHARACTER_AUDIO : has
    CHARACTER ||--o{ COMMENT : receives
    CHARACTER ||--o{ CHARACTER_TAG : has
    CHARACTER ||--o{ CHARACTER_ABILITY : has
    CHARACTER ||--o{ CHARACTER_WEAPON : has
    CHARACTER ||--o{ CHARACTER_RELATIONSHIP : has
    CHARACTER }o--|| VOICE_ACTOR : voiced_by
    
    USER ||--o{ COMMENT : posts
    USER ||--o{ CHARACTER_FAVORITE : favorites
    USER ||--o{ CHARACTER_LIKE : likes
    USER ||--o{ CHARACTER_VOTE : votes
    
    ANIME {
        id SERIAL PK
        name VARCHAR(255)
        name_jp VARCHAR(255)
        studio VARCHAR(100)
        release_date DATE
        cover_url VARCHAR(500)
        description TEXT
        created_at TIMESTAMP
        updated_at TIMESTAMP
    }
    
    CHARACTER {
        id SERIAL PK
        name VARCHAR(100)
        name_jp VARCHAR(100)
        name_romaji VARCHAR(100)
        avatar_url VARCHAR(500)
        description TEXT
        personality TEXT
        appearance TEXT
        background TEXT
        role_type VARCHAR(50)
        birthday DATE
        blood_type VARCHAR(10)
        constellation VARCHAR(20)
        height VARCHAR(20)
        weight VARCHAR(20)
        voice_actor_id INT FK
        anime_id INT FK
        likes_count INT
        favorites_count INT
        votes_count INT
        created_at TIMESTAMP
        updated_at TIMESTAMP
    }
    
    VOICE_ACTOR {
        id SERIAL PK
        name VARCHAR(100)
        name_jp VARCHAR(100)
        avatar_url VARCHAR(500)
        birth_date DATE
        agency VARCHAR(100)
        created_at TIMESTAMP
    }
    
    CHARACTER_IMAGE {
        id SERIAL PK
        character_id INT FK
        url VARCHAR(500)
        type VARCHAR(50)
        caption VARCHAR(255)
        sort_order INT
        created_at TIMESTAMP
    }
    
    CHARACTER_VIDEO {
        id SERIAL PK
        character_id INT FK
        url VARCHAR(500)
        type VARCHAR(50)
        title VARCHAR(255)
        created_at TIMESTAMP
    }
    
    CHARACTER_AUDIO {
        id SERIAL PK
        character_id INT FK
        url VARCHAR(500)
        type VARCHAR(50)
        title VARCHAR(255)
        duration INT
        created_at TIMESTAMP
    }
    
    CHARACTER_TAG {
        character_id INT FK
        tag_name VARCHAR(50)
        PK(character_id, tag_name)
    }
    
    CHARACTER_ABILITY {
        id SERIAL PK
        character_id INT FK
        name VARCHAR(100)
        description TEXT
        sort_order INT
    }
    
    CHARACTER_WEAPON {
        id SERIAL PK
        character_id INT FK
        name VARCHAR(100)
        description TEXT
        sort_order INT
    }
    
    CHARACTER_RELATIONSHIP {
        id SERIAL PK
        character_id INT FK
        related_character_id INT FK
        relationship_type VARCHAR(50)
        description VARCHAR(255)
    }
    
    USER {
        id SERIAL PK
        email VARCHAR(255) UNIQUE
        nickname VARCHAR(100)
        avatar_url VARCHAR(500)
        supabase_id VARCHAR(255) UNIQUE
        favorites_count INT
        created_at TIMESTAMP
        updated_at TIMESTAMP
    }
    
    COMMENT {
        id SERIAL PK
        character_id INT FK
        user_id INT FK
        content TEXT
        likes_count INT
        created_at TIMESTAMP
        updated_at TIMESTAMP
    }
    
    CHARACTER_FAVORITE {
        user_id INT FK
        character_id INT FK
        created_at TIMESTAMP
        PK(user_id, character_id)
    }
    
    CHARACTER_LIKE {
        user_id INT FK
        character_id INT FK
        created_at TIMESTAMP
        PK(user_id, character_id)
    }
    
    CHARACTER_VOTE {
        user_id INT FK
        character_id INT FK
        vote_date DATE
        PK(user_id, character_id, vote_date)
    }
```

---

## 2. 数据表详细设计

### 2.1 anime (作品表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 作品ID，自增 |
| name | VARCHAR(255) | NOT NULL | 作品中文名 |
| name_jp | VARCHAR(255) | | 作品日文名 |
| studio | VARCHAR(100) | | 制作公司 |
| release_date | DATE | | 播出日期 |
| cover_url | VARCHAR(500) | | 封面图URL |
| description | TEXT | | 作品简介 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 更新时间 |

**索引**:
- `idx_anime_name`: 普通索引，加速按作品名搜索
- `idx_anime_release_date`: 普通索引，加速按播出时间排序

### 2.2 character (角色表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 角色ID，自增 |
| name | VARCHAR(100) | NOT NULL | 角色中文名 |
| name_jp | VARCHAR(100) | | 角色日文名 |
| name_romaji | VARCHAR(100) | | 角色罗马音 |
| avatar_url | VARCHAR(500) | NOT NULL | 角色头像URL |
| description | TEXT | | 角色概述 |
| personality | TEXT | | 性格特点 |
| appearance | TEXT | | 外貌特征 |
| background | TEXT | | 身份背景 |
| role_type | VARCHAR(50) | | 角色定位（主角/配角/反派） |
| birthday | DATE | | 生日 |
| blood_type | VARCHAR(10) | | 血型 |
| constellation | VARCHAR(20) | | 星座 |
| height | VARCHAR(20) | | 身高 |
| weight | VARCHAR(20) | | 体重 |
| voice_actor_id | INT | FOREIGN KEY | 声优ID |
| anime_id | INT | FOREIGN KEY REFERENCES anime(id) | 所属作品ID |
| likes_count | INT | DEFAULT 0 | 点赞数 |
| favorites_count | INT | DEFAULT 0 | 收藏数 |
| votes_count | INT | DEFAULT 0 | 投票数 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 更新时间 |

**索引**:
- `idx_character_name`: 普通索引，加速按角色名搜索
- `idx_character_anime_id`: 普通索引，加速按作品筛选
- `idx_character_likes_count`: 普通索引，加速按点赞数排序
- `idx_character_favorites_count`: 普通索引，加速按收藏数排序
- `idx_character_votes_count`: 普通索引，加速按投票数排序

### 2.3 voice_actor (声优表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 声优ID，自增 |
| name | VARCHAR(100) | NOT NULL | 声优中文名 |
| name_jp | VARCHAR(100) | | 声优日文名 |
| avatar_url | VARCHAR(500) | | 头像URL |
| birth_date | DATE | | 出生日期 |
| agency | VARCHAR(100) | | 所属事务所 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |

**索引**:
- `idx_voice_actor_name`: 普通索引，加速按声优名搜索

### 2.4 character_image (角色图片表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 图片ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 所属角色ID |
| url | VARCHAR(500) | NOT NULL | 图片URL |
| type | VARCHAR(50) | NOT NULL | 图片类型（立绘/截图/壁纸） |
| caption | VARCHAR(255) | | 图片说明 |
| sort_order | INT | DEFAULT 0 | 排序顺序 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |

**索引**:
- `idx_character_image_character_id`: 普通索引，加速查询角色图片

### 2.5 character_video (角色视频表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 视频ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 所属角色ID |
| url | VARCHAR(500) | NOT NULL | 视频URL |
| type | VARCHAR(50) | NOT NULL | 视频类型（片段/PV/AMV） |
| title | VARCHAR(255) | | 视频标题 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |

**索引**:
- `idx_character_video_character_id`: 普通索引，加速查询角色视频

### 2.6 character_audio (角色音频表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 音频ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 所属角色ID |
| url | VARCHAR(500) | NOT NULL | 音频URL |
| type | VARCHAR(50) | NOT NULL | 音频类型（主题曲/台词/访谈） |
| title | VARCHAR(255) | | 音频标题 |
| duration | INT | | 音频时长（秒） |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |

**索引**:
- `idx_character_audio_character_id`: 普通索引，加速查询角色音频

### 2.7 character_tag (角色标签表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| character_id | INT | FOREIGN KEY REFERENCES character(id), PRIMARY KEY | 角色ID |
| tag_name | VARCHAR(50) | PRIMARY KEY | 标签名称（傲娇/元气/高冷等） |

**索引**:
- `idx_character_tag_tag_name`: 普通索引，加速按标签筛选角色

### 2.8 character_ability (角色能力表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 能力ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 所属角色ID |
| name | VARCHAR(100) | NOT NULL | 能力名称 |
| description | TEXT | | 能力描述 |
| sort_order | INT | DEFAULT 0 | 排序顺序 |

**索引**:
- `idx_character_ability_character_id`: 普通索引，加速查询角色能力

### 2.9 character_weapon (角色武器表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 武器ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 所属角色ID |
| name | VARCHAR(100) | NOT NULL | 武器名称 |
| description | TEXT | | 武器描述 |
| sort_order | INT | DEFAULT 0 | 排序顺序 |

**索引**:
- `idx_character_weapon_character_id`: 普通索引，加速查询角色武器

### 2.10 character_relationship (角色关系表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 关系ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 角色ID |
| related_character_id | INT | FOREIGN KEY REFERENCES character(id) | 关联角色ID |
| relationship_type | VARCHAR(50) | NOT NULL | 关系类型（亲友/对手/CP等） |
| description | VARCHAR(255) | | 关系描述 |

**索引**:
- `idx_relationship_character_id`: 普通索引，加速查询角色关系
- `idx_relationship_related_id`: 普通索引，加速反向查询

### 2.11 user (用户表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 用户ID，自增 |
| email | VARCHAR(255) | UNIQUE, NOT NULL | 用户邮箱 |
| nickname | VARCHAR(100) | NOT NULL | 用户昵称 |
| avatar_url | VARCHAR(500) | | 用户头像URL |
| supabase_id | VARCHAR(255) | UNIQUE | Supabase认证ID |
| favorites_count | INT | DEFAULT 0 | 收藏数 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 更新时间 |

**索引**:
- `idx_user_email`: 唯一索引，加速邮箱登录查询
- `idx_user_supabase_id`: 唯一索引，加速Supabase认证关联

### 2.12 comment (评论表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | SERIAL | PRIMARY KEY | 评论ID，自增 |
| character_id | INT | FOREIGN KEY REFERENCES character(id) | 所属角色ID |
| user_id | INT | FOREIGN KEY REFERENCES user(id) | 评论用户ID |
| content | TEXT | NOT NULL | 评论内容 |
| likes_count | INT | DEFAULT 0 | 点赞数 |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 更新时间 |

**索引**:
- `idx_comment_character_id`: 普通索引，加速查询角色评论
- `idx_comment_user_id`: 普通索引，加速查询用户评论
- `idx_comment_created_at`: 普通索引，加速按时间排序

### 2.13 character_favorite (角色收藏关联表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| user_id | INT | FOREIGN KEY REFERENCES user(id), PRIMARY KEY | 用户ID |
| character_id | INT | FOREIGN KEY REFERENCES character(id), PRIMARY KEY | 角色ID |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 收藏时间 |

**索引**:
- `idx_favorite_user_id`: 普通索引，加速查询用户收藏

### 2.14 character_like (角色点赞关联表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| user_id | INT | FOREIGN KEY REFERENCES user(id), PRIMARY KEY | 用户ID |
| character_id | INT | FOREIGN KEY REFERENCES character(id), PRIMARY KEY | 角色ID |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | 点赞时间 |

**索引**:
- `idx_like_user_id`: 普通索引，加速查询用户点赞

### 2.15 character_vote (角色投票关联表)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| user_id | INT | FOREIGN KEY REFERENCES user(id), PRIMARY KEY | 用户ID |
| character_id | INT | FOREIGN KEY REFERENCES character(id), PRIMARY KEY | 角色ID |
| vote_date | DATE | PRIMARY KEY | 投票日期 |

**索引**:
- `idx_vote_user_id`: 普通索引，加速查询用户投票记录
- `idx_vote_vote_date`: 普通索引，加速按日期统计

---

## 3. DDL语句

```sql
-- 作品表
CREATE TABLE anime (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_jp VARCHAR(255),
    studio VARCHAR(100),
    release_date DATE,
    cover_url VARCHAR(500),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_anime_name ON anime(name);
CREATE INDEX idx_anime_release_date ON anime(release_date);

-- 声优表
CREATE TABLE voice_actor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    name_jp VARCHAR(100),
    avatar_url VARCHAR(500),
    birth_date DATE,
    agency VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_voice_actor_name ON voice_actor(name);

-- 角色表
CREATE TABLE character (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    name_jp VARCHAR(100),
    name_romaji VARCHAR(100),
    avatar_url VARCHAR(500) NOT NULL,
    description TEXT,
    personality TEXT,
    appearance TEXT,
    background TEXT,
    role_type VARCHAR(50),
    birthday DATE,
    blood_type VARCHAR(10),
    constellation VARCHAR(20),
    height VARCHAR(20),
    weight VARCHAR(20),
    voice_actor_id INT REFERENCES voice_actor(id),
    anime_id INT REFERENCES anime(id),
    likes_count INT DEFAULT 0,
    favorites_count INT DEFAULT 0,
    votes_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_character_name ON character(name);
CREATE INDEX idx_character_anime_id ON character(anime_id);
CREATE INDEX idx_character_likes_count ON character(likes_count);
CREATE INDEX idx_character_favorites_count ON character(favorites_count);
CREATE INDEX idx_character_votes_count ON character(votes_count);

-- 角色图片表
CREATE TABLE character_image (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    url VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL,
    caption VARCHAR(255),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_character_image_character_id ON character_image(character_id);

-- 角色视频表
CREATE TABLE character_video (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    url VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_character_video_character_id ON character_video(character_id);

-- 角色音频表
CREATE TABLE character_audio (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    url VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255),
    duration INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_character_audio_character_id ON character_audio(character_id);

-- 角色标签表
CREATE TABLE character_tag (
    character_id INT REFERENCES character(id),
    tag_name VARCHAR(50),
    PRIMARY KEY (character_id, tag_name)
);

CREATE INDEX idx_character_tag_tag_name ON character_tag(tag_name);

-- 角色能力表
CREATE TABLE character_ability (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    sort_order INT DEFAULT 0
);

CREATE INDEX idx_character_ability_character_id ON character_ability(character_id);

-- 角色武器表
CREATE TABLE character_weapon (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    sort_order INT DEFAULT 0
);

CREATE INDEX idx_character_weapon_character_id ON character_weapon(character_id);

-- 角色关系表
CREATE TABLE character_relationship (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    related_character_id INT REFERENCES character(id),
    relationship_type VARCHAR(50) NOT NULL,
    description VARCHAR(255)
);

CREATE INDEX idx_relationship_character_id ON character_relationship(character_id);
CREATE INDEX idx_relationship_related_id ON character_relationship(related_character_id);

-- 用户表
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    avatar_url VARCHAR(500),
    supabase_id VARCHAR(255) UNIQUE,
    favorites_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_email ON "user"(email);
CREATE INDEX idx_user_supabase_id ON "user"(supabase_id);

-- 评论表
CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES character(id),
    user_id INT REFERENCES "user"(id),
    content TEXT NOT NULL,
    likes_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_comment_character_id ON comment(character_id);
CREATE INDEX idx_comment_user_id ON comment(user_id);
CREATE INDEX idx_comment_created_at ON comment(created_at);

-- 角色收藏关联表
CREATE TABLE character_favorite (
    user_id INT REFERENCES "user"(id),
    character_id INT REFERENCES character(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, character_id)
);

CREATE INDEX idx_favorite_user_id ON character_favorite(user_id);

-- 角色点赞关联表
CREATE TABLE character_like (
    user_id INT REFERENCES "user"(id),
    character_id INT REFERENCES character(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, character_id)
);

CREATE INDEX idx_like_user_id ON character_like(user_id);

-- 角色投票关联表
CREATE TABLE character_vote (
    user_id INT REFERENCES "user"(id),
    character_id INT REFERENCES character(id),
    vote_date DATE,
    PRIMARY KEY (user_id, character_id, vote_date)
);

CREATE INDEX idx_vote_user_id ON character_vote(user_id);
CREATE INDEX idx_vote_vote_date ON character_vote(vote_date);
```

---

## 4. 数据库约束说明

### 4.1 外键约束

| 外键关系 | 父表 | 子表 | 级联操作 |
|----------|------|------|----------|
| character.anime_id → anime.id | anime | character | ON DELETE SET NULL |
| character.voice_actor_id → voice_actor.id | voice_actor | character | ON DELETE SET NULL |
| character_image.character_id → character.id | character | character_image | ON DELETE CASCADE |
| character_video.character_id → character.id | character | character_video | ON DELETE CASCADE |
| character_audio.character_id → character.id | character | character_audio | ON DELETE CASCADE |
| character_tag.character_id → character.id | character | character_tag | ON DELETE CASCADE |
| character_ability.character_id → character.id | character | character_ability | ON DELETE CASCADE |
| character_weapon.character_id → character.id | character | character_weapon | ON DELETE CASCADE |
| character_relationship.character_id → character.id | character | character_relationship | ON DELETE CASCADE |
| character_relationship.related_character_id → character.id | character | character_relationship | ON DELETE SET NULL |
| comment.character_id → character.id | character | comment | ON DELETE CASCADE |
| comment.user_id → user.id | user | comment | ON DELETE CASCADE |
| character_favorite.user_id → user.id | user | character_favorite | ON DELETE CASCADE |
| character_favorite.character_id → character.id | character | character_favorite | ON DELETE CASCADE |
| character_like.user_id → user.id | user | character_like | ON DELETE CASCADE |
| character_like.character_id → character.id | character | character_like | ON DELETE CASCADE |
| character_vote.user_id → user.id | user | character_vote | ON DELETE CASCADE |
| character_vote.character_id → character.id | character | character_vote | ON DELETE CASCADE |

### 4.2 唯一约束

| 约束名称 | 字段 | 说明 |
|----------|------|------|
| user_email_unique | user.email | 邮箱唯一 |
| user_supabase_id_unique | user.supabase_id | Supabase ID唯一 |

---

## 5. 初始数据

### 5.1 预设标签数据

```sql
INSERT INTO character_tag (tag_name) VALUES
('傲娇'), ('元气'), ('高冷'), ('天然呆'), ('病娇'),
('御姐'), ('萝莉'), ('正太'), ('兄控'), ('妹控'),
('元气'), ('三无'), ('毒舌'), ('温柔'), ('腹黑'),
('热血'), ('冷静'), ('傲娇'), ('元气'), ('高冷');
```

### 5.2 预设角色类型数据

角色定位类型：`主角`, `配角`, `反派`, `路人`, `重要配角`

关系类型：`亲友`, `对手`, `CP`, `师徒`, `上下级`, `兄弟姐妹`

图片类型：`立绘`, `截图`, `壁纸`, `官方图`, `同人图`

视频类型：`片段`, `PV`, `AMV`, `角色MV`

音频类型：`主题曲`, `台词`, `访谈`, `角色歌`

---

**文档版本**: v1.0  
**创建日期**: 2026年7月21日  
**适用项目**: 动漫角色介绍网站