# 动漫角色介绍网站 - 详细设计文档

## 1. 引言

### 1.1 文档目的

本文档是基于《概要设计文档》编写的详细设计文档，旨在提供系统实现的具体技术细节，包括组件设计、接口实现、状态管理、工具函数等，为开发人员提供直接的编码指导。

### 1.2 文档范围

本文档涵盖以下内容：
- 前端组件详细设计
- 后端服务详细设计
- 状态管理详细设计
- API接口详细实现
- 工具函数设计
- 样式设计规范
- 测试方案

---

## 2. 前端组件详细设计

### 2.1 布局组件

#### 2.1.1 Header 组件

**组件路径**: `src/components/Layout/Header.tsx`

**功能描述**: 顶部导航栏，包含Logo、搜索框、菜单和登录按钮

**Props定义**:
```typescript
interface HeaderProps {
  currentUser?: User;
  onSearch?: (keyword: string) => void;
}
```

**内部状态**:
```typescript
const [searchKeyword, setSearchKeyword] = useState('');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
```

**核心逻辑**:
- 滚动监听：页面滚动时添加背景色
- 搜索处理：输入关键词后触发搜索回调
- 菜单切换：移动端菜单显示/隐藏
- 登录状态：根据用户状态显示不同按钮

**关键代码片段**:
```typescript
const handleSearch = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' && searchKeyword.trim()) {
    onSearch?.(searchKeyword.trim());
  }
};

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

#### 2.1.2 Footer 组件

**组件路径**: `src/components/Layout/Footer.tsx`

**功能描述**: 页脚组件，包含网站信息和链接

**Props定义**: 无

**核心逻辑**:
- 展示网站版权信息
- 展示快捷链接（关于我们、使用条款等）
- 展示社交媒体链接

### 2.2 通用组件

#### 2.2.1 Button 组件

**组件路径**: `src/components/Button/Button.tsx`

**功能描述**: 通用按钮组件，支持多种样式和状态

**Props定义**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

**样式映射**:
| variant | 样式描述 |
|---------|----------|
| primary | 紫色背景，白色文字，hover加深 |
| secondary | 灰色背景，深色文字，hover变亮 |
| outline | 紫色边框，紫色文字，hover填充 |
| ghost | 透明背景，深色文字，hover灰色 |

#### 2.2.2 Card 组件

**组件路径**: `src/components/Card/Card.tsx`

**功能描述**: 卡片组件，支持多种变体

**Props定义**:
```typescript
interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}
```

**样式特点**:
- 圆角设计（border-radius: 12px）
- 阴影效果（box-shadow）
- hover时上浮（transform: translateY(-4px)）

#### 2.2.3 Avatar 组件

**组件路径**: `src/components/Avatar/Avatar.tsx`

**功能描述**: 头像组件，支持不同尺寸

**Props定义**:
```typescript
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
```

**尺寸映射**:
| size | 宽度/高度 |
|------|-----------|
| sm | 32px |
| md | 48px |
| lg | 64px |
| xl | 96px |

#### 2.2.4 Tag 组件

**组件路径**: `src/components/Tag/Tag.tsx`

**功能描述**: 标签组件，支持不同颜色

**Props定义**:
```typescript
interface TagProps {
  children: React.ReactNode;
  color?: 'purple' | 'pink' | 'cyan' | 'green' | 'orange';
  className?: string;
}
```

**颜色映射**:
| color | 背景色 | 文字色 |
|-------|--------|--------|
| purple | #F3E8FF | #7C3AED |
| pink | #FCE7F3 | #DB2777 |
| cyan | #ECFEFF | #0891B2 |
| green | #DCFCE7 | #16A34A |
| orange | #FFEDD5 | #EA580C |

### 2.3 页面组件

#### 2.3.1 HomePage 组件

**组件路径**: `src/pages/HomePage.tsx`

**功能描述**: 首页，展示轮播图、热门推荐、最新更新和分类导航

**核心子组件**:
- HeroCarousel: 角色轮播图
- CharacterCard: 角色卡片
- UpdateList: 最新更新列表
- CategoryNav: 分类导航

**数据获取**:
```typescript
useEffect(() => {
  dispatch(fetchPopularCharacters());
  dispatch(fetchLatestUpdates());
}, [dispatch]);
```

#### 2.3.2 CharacterList 组件

**组件路径**: `src/pages/CharacterList.tsx`

**功能描述**: 角色列表页，支持筛选、搜索和分页

**核心子组件**:
- FilterBar: 筛选栏
- CharacterCard: 角色卡片
- Pagination: 分页组件

**内部状态**:
```typescript
const [filters, setFilters] = useState({
  animeId: '',
  tag: '',
  roleType: '',
});
const [sortBy, setSortBy] = useState('popular');
const [currentPage, setCurrentPage] = useState(1);
```

**数据获取**:
```typescript
useEffect(() => {
  dispatch(fetchCharacters({
    page: currentPage,
    filters,
    sort: sortBy,
  }));
}, [currentPage, filters, sortBy, dispatch]);
```

#### 2.3.3 CharacterDetail 组件

**组件路径**: `src/pages/CharacterDetail.tsx`

**功能描述**: 角色详情页，展示完整角色信息

**核心子组件**:
- CharacterHeader: 角色头部
- InfoCard: 资料卡片
- SettingTabs: 设定标签页
- ImageGallery: 图片画廊
- CommentSection: 评论区

**数据获取**:
```typescript
const { id } = useParams<{ id: string }>();

useEffect(() => {
  if (id) {
    dispatch(fetchCharacterDetail(parseInt(id)));
    dispatch(fetchComments(parseInt(id)));
  }
}, [id, dispatch]);
```

#### 2.3.4 FavoritesPage 组件

**组件路径**: `src/pages/FavoritesPage.tsx`

**功能描述**: 用户收藏夹页面

**核心子组件**:
- FavoriteList: 收藏列表
- EmptyState: 空状态提示

**数据获取**:
```typescript
useEffect(() => {
  dispatch(fetchFavorites());
}, [dispatch]);
```

#### 2.3.5 RankingPage 组件

**组件路径**: `src/pages/RankingPage.tsx`

**功能描述**: 角色排行榜页面

**核心子组件**:
- RankTypeTabs: 排行类型切换
- RankList: 排行榜列表

**内部状态**:
```typescript
const [rankType, setRankType] = useState<'likes' | 'favorites' | 'votes'>('likes');
const [period, setPeriod] = useState<'week' | 'month' | 'all'>('all');
```

**数据获取**:
```typescript
useEffect(() => {
  dispatch(fetchRanking({ type: rankType, period }));
}, [rankType, period, dispatch]);
```

---

## 3. 状态管理详细设计

### 3.1 Redux Slice 设计

#### 3.1.1 Characters Slice

**文件路径**: `src/features/characters/charactersSlice.ts`

**状态定义**:
```typescript
interface CharactersState {
  list: Character[];
  detail: Character | null;
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}
```

**Reducer函数**:
| 函数名 | 功能 |
|--------|------|
| fetchCharactersPending | 开始获取角色列表 |
| fetchCharactersSuccess | 获取角色列表成功 |
| fetchCharactersFailure | 获取角色列表失败 |
| fetchCharacterDetailPending | 开始获取角色详情 |
| fetchCharacterDetailSuccess | 获取角色详情成功 |
| fetchCharacterDetailFailure | 获取角色详情失败 |
| likeCharacterSuccess | 点赞成功 |
| favoriteCharacterSuccess | 收藏成功 |

**Action函数**:
| 函数名 | 功能 | 参数 |
|--------|------|------|
| fetchCharacters | 获取角色列表 | params: { page, limit, sort, filters } |
| fetchCharacterDetail | 获取角色详情 | id: number |
| likeCharacter | 点赞角色 | id: number |
| favoriteCharacter | 收藏角色 | id: number |

#### 3.1.2 Users Slice

**文件路径**: `src/features/users/usersSlice.ts`

**状态定义**:
```typescript
interface UsersState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
```

**Reducer函数**:
| 函数名 | 功能 |
|--------|------|
| loginPending | 开始登录 |
| loginSuccess | 登录成功 |
| loginFailure | 登录失败 |
| registerPending | 开始注册 |
| registerSuccess | 注册成功 |
| registerFailure | 注册失败 |
| logout | 登出 |
| fetchCurrentUserSuccess | 获取当前用户成功 |

**Action函数**:
| 函数名 | 功能 | 参数 |
|--------|------|------|
| login | 用户登录 | credentials: { email, password } |
| register | 用户注册 | data: { email, password, nickname } |
| logout | 用户登出 | 无 |
| fetchCurrentUser | 获取当前用户 | 无 |

#### 3.1.3 Favorites Slice

**文件路径**: `src/features/favorites/favoritesSlice.ts`

**状态定义**:
```typescript
interface FavoritesState {
  list: Favorite[];
  loading: boolean;
  error: string | null;
}
```

**Reducer函数**:
| 函数名 | 功能 |
|--------|------|
| fetchFavoritesPending | 开始获取收藏列表 |
| fetchFavoritesSuccess | 获取收藏列表成功 |
| fetchFavoritesFailure | 获取收藏列表失败 |
| addFavoriteSuccess | 添加收藏成功 |
| removeFavoriteSuccess | 删除收藏成功 |

**Action函数**:
| 函数名 | 功能 | 参数 |
|--------|------|------|
| fetchFavorites | 获取收藏列表 | 无 |
| addFavorite | 添加收藏 | characterId: number |
| removeFavorite | 删除收藏 | characterId: number |

#### 3.1.4 Comments Slice

**文件路径**: `src/features/comments/commentsSlice.ts`

**状态定义**:
```typescript
interface CommentsState {
  list: Comment[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}
```

**Reducer函数**:
| 函数名 | 功能 |
|--------|------|
| fetchCommentsPending | 开始获取评论列表 |
| fetchCommentsSuccess | 获取评论列表成功 |
| fetchCommentsFailure | 获取评论列表失败 |
| postCommentSuccess | 发表评论成功 |
| likeCommentSuccess | 点赞评论成功 |

**Action函数**:
| 函数名 | 功能 | 参数 |
|--------|------|------|
| fetchComments | 获取评论列表 | characterId: number, params |
| postComment | 发表评论 | characterId: number, content: string |
| likeComment | 点赞评论 | commentId: number |

### 3.2 Store 配置

**文件路径**: `src/store.ts`

```typescript
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './features/characters/charactersSlice';
import usersReducer from './features/users/usersSlice';
import favoritesReducer from './features/favorites/favoritesSlice';
import commentsReducer from './features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    users: usersReducer,
    favorites: favoritesReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 3.3 自定义 Hooks

**文件路径**: `src/hooks/useAppDispatch.ts`

```typescript
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
```

**文件路径**: `src/hooks/useAppSelector.ts`

```typescript
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

## 4. API服务层详细设计

### 4.1 Axios 实例配置

**文件路径**: `src/services/api.ts`

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### 4.2 角色API

**文件路径**: `src/services/characters.ts`

```typescript
import api from './api';
import type { Character, CharacterListParams, CharacterDetail } from '../types';

export const getCharacters = async (params: CharacterListParams) => {
  const response = await api.get('/characters', { params });
  return response.data;
};

export const getCharacterDetail = async (id: number) => {
  const response = await api.get(`/characters/${id}`);
  return response.data;
};

export const likeCharacter = async (id: number) => {
  const response = await api.post(`/characters/${id}/like`);
  return response.data;
};

export const favoriteCharacter = async (id: number) => {
  const response = await api.post(`/characters/${id}/favorite`);
  return response.data;
};
```

### 4.3 用户API

**文件路径**: `src/services/users.ts`

```typescript
import api from './api';
import type { User, LoginCredentials, RegisterData } from '../types';

export const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/users/me');
  return response.data;
};

export const getFavorites = async (params?: { page?: number; limit?: number }) => {
  const response = await api.get('/users/me/favorites', { params });
  return response.data;
};
```

### 4.4 评论API

**文件路径**: `src/services/comments.ts`

```typescript
import api from './api';
import type { Comment, CommentCreateData } from '../types';

export const getComments = async (characterId: number, params?: { page?: number; limit?: number }) => {
  const response = await api.get(`/characters/${characterId}/comments`, { params });
  return response.data;
};

export const postComment = async (characterId: number, data: CommentCreateData) => {
  const response = await api.post(`/characters/${characterId}/comments`, data);
  return response.data;
};

export const likeComment = async (commentId: number) => {
  const response = await api.post(`/comments/${commentId}/like`);
  return response.data;
};
```

### 4.5 排行榜API

**文件路径**: `src/services/ranking.ts`

```typescript
import api from './api';

export const getRanking = async (params?: { type?: string; period?: string; limit?: number }) => {
  const response = await api.get('/ranking', { params });
  return response.data;
};

export const voteCharacter = async (characterId: number) => {
  const response = await api.post(`/characters/${characterId}/vote`);
  return response.data;
};
```

### 4.6 搜索API

**文件路径**: `src/services/search.ts`

```typescript
import api from './api';

export const search = async (params: { q: string; type?: string; limit?: number }) => {
  const response = await api.get('/search', { params });
  return response.data;
};
```

---

## 5. 类型定义

### 5.1 核心类型

**文件路径**: `src/types/index.ts`

```typescript
export interface Character {
  id: number;
  name: string;
  name_jp: string;
  name_romaji: string;
  avatar_url: string;
  description: string;
  personality: string;
  appearance: string;
  background: string;
  role_type: string;
  birthday: string;
  blood_type: string;
  constellation: string;
  height: string;
  weight: string;
  voice_actor: VoiceActor;
  anime: Anime;
  tags: string[];
  abilities: Ability[];
  weapons: Weapon[];
  relationships: Relationship[];
  images: CharacterImage[];
  videos: CharacterVideo[];
  audios: CharacterAudio[];
  likes_count: number;
  favorites_count: number;
  votes_count: number;
  is_liked: boolean;
  is_favorited: boolean;
  created_at: string;
  updated_at: string;
}

export interface Anime {
  id: number;
  name: string;
  name_jp: string;
  studio: string;
  release_date: string;
  cover_url: string;
  description: string;
}

export interface VoiceActor {
  id: number;
  name: string;
  name_jp: string;
  avatar_url: string;
}

export interface Ability {
  id: number;
  name: string;
  description: string;
}

export interface Weapon {
  id: number;
  name: string;
  description: string;
}

export interface Relationship {
  id: number;
  related_character_id: number;
  related_character_name: string;
  relationship_type: string;
  description: string;
}

export interface CharacterImage {
  id: number;
  url: string;
  type: string;
  caption: string;
  sort_order: number;
}

export interface CharacterVideo {
  id: number;
  url: string;
  type: string;
  title: string;
}

export interface CharacterAudio {
  id: number;
  url: string;
  type: string;
  title: string;
  duration: number;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  avatar_url: string;
  favorites_count: number;
  created_at: string;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  likes_count: number;
  is_liked: boolean;
  created_at: string;
}

export interface Favorite {
  id: number;
  character_id: number;
  name: string;
  avatar_url: string;
  anime_name: string;
  favorited_at: string;
}

export interface RankingItem {
  rank: number;
  character_id: number;
  name: string;
  avatar_url: string;
  anime_name: string;
  score: number;
}

export interface Pagination {
  current_page: number;
  total_pages: number;
  total_count: number;
}

export interface CharacterListParams {
  page?: number;
  limit?: number;
  sort?: string;
  anime_id?: number;
  tag?: string;
  role_type?: string;
  keyword?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  nickname: string;
}

export interface CommentCreateData {
  content: string;
}
```

---

## 6. 后端服务详细设计

### 6.1 路由定义

**文件路径**: `backend/src/routes/characters.ts`

```typescript
import express from 'express';
import {
  getCharacters,
  getCharacterDetail,
  likeCharacter,
  favoriteCharacter,
} from '../controllers/characterController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.get('/', getCharacters);
router.get('/:id', getCharacterDetail);
router.post('/:id/like', authenticate, likeCharacter);
router.post('/:id/favorite', authenticate, favoriteCharacter);

export default router;
```

**文件路径**: `backend/src/routes/users.ts`

```typescript
import express from 'express';
import {
  login,
  register,
  getCurrentUser,
  getFavorites,
} from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/users/me', authenticate, getCurrentUser);
router.get('/users/me/favorites', authenticate, getFavorites);

export default router;
```

### 6.2 控制器设计

**文件路径**: `backend/src/controllers/characterController.ts`

```typescript
import { Request, Response } from 'express';
import { characterService } from '../services/characterService';

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const params = {
      page: parseInt(req.query.page as string) || 1,
      limit: parseInt(req.query.limit as string) || 20,
      sort: req.query.sort as string || 'popular',
      anime_id: parseInt(req.query.anime_id as string) || undefined,
      tag: req.query.tag as string || undefined,
      role_type: req.query.role_type as string || undefined,
      keyword: req.query.keyword as string || undefined,
    };
    const result = await characterService.getCharacters(params);
    res.json({ code: 200, message: 'success', data: result });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Internal server error', data: null });
  }
};

export const getCharacterDetail = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const userId = req.user?.id;
    const result = await characterService.getCharacterDetail(id, userId);
    res.json({ code: 200, message: 'success', data: result });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Internal server error', data: null });
  }
};

export const likeCharacter = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const userId = req.user?.id;
    const result = await characterService.likeCharacter(id, userId);
    res.json({ code: 200, message: 'success', data: result });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Internal server error', data: null });
  }
};

export const favoriteCharacter = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const userId = req.user?.id;
    const result = await characterService.favoriteCharacter(id, userId);
    res.json({ code: 200, message: 'success', data: result });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Internal server error', data: null });
  }
};
```

### 6.3 服务层设计

**文件路径**: `backend/src/services/characterService.ts`

```typescript
import { characterRepository } from '../repositories/characterRepository';
import { likeRepository } from '../repositories/likeRepository';
import { favoriteRepository } from '../repositories/favoriteRepository';

export const characterService = {
  async getCharacters(params: CharacterListParams) {
    return await characterRepository.getCharacters(params);
  },

  async getCharacterDetail(id: number, userId?: number) {
    const character = await characterRepository.getCharacterDetail(id);
    
    if (userId) {
      character.is_liked = await likeRepository.exists(userId, id);
      character.is_favorited = await favoriteRepository.exists(userId, id);
    }
    
    return character;
  },

  async likeCharacter(characterId: number, userId: number) {
    const exists = await likeRepository.exists(userId, characterId);
    
    if (exists) {
      await likeRepository.remove(userId, characterId);
      await characterRepository.decrementLikes(characterId);
      return { success: true, is_liked: false };
    } else {
      await likeRepository.add(userId, characterId);
      await characterRepository.incrementLikes(characterId);
      return { success: true, is_liked: true };
    }
  },

  async favoriteCharacter(characterId: number, userId: number) {
    const exists = await favoriteRepository.exists(userId, characterId);
    
    if (exists) {
      await favoriteRepository.remove(userId, characterId);
      await characterRepository.decrementFavorites(characterId);
      return { success: true, is_favorited: false };
    } else {
      await favoriteRepository.add(userId, characterId);
      await characterRepository.incrementFavorites(characterId);
      return { success: true, is_favorited: true };
    }
  },
};
```

### 6.4 数据访问层设计

**文件路径**: `backend/src/repositories/characterRepository.ts`

```typescript
import { prisma } from '../config/database';

export const characterRepository = {
  async getCharacters(params: CharacterListParams) {
    const { page, limit, sort, anime_id, tag, role_type, keyword } = params;
    const offset = (page - 1) * limit;

    const where: any = {};
    
    if (anime_id) where.anime_id = anime_id;
    if (role_type) where.role_type = role_type;
    if (keyword) {
      where.OR = [
        { name: { contains: keyword } },
        { name_jp: { contains: keyword } },
        { name_romaji: { contains: keyword } },
      ];
    }

    const orderBy: any = {};
    switch (sort) {
      case 'popular':
        orderBy.likes_count = 'desc';
        break;
      case 'updated':
        orderBy.updated_at = 'desc';
        break;
      case 'name':
        orderBy.name = 'asc';
        break;
      default:
        orderBy.likes_count = 'desc';
    }

    const [characters, total] = await Promise.all([
      prisma.character.findMany({
        where,
        orderBy,
        skip: offset,
        take: limit,
        include: {
          anime: { select: { id: true, name: true, cover_url: true } },
          character_tag: { select: { tag_name: true } },
        },
      }),
      prisma.character.count({ where }),
    ]);

    return {
      list: characters.map(c => ({
        ...c,
        tags: c.character_tag.map(t => t.tag_name),
      })),
      pagination: {
        current_page: page,
        total_pages: Math.ceil(total / limit),
        total_count: total,
      },
    };
  },

  async getCharacterDetail(id: number) {
    return await prisma.character.findUnique({
      where: { id },
      include: {
        anime: true,
        voice_actor: true,
        character_tag: true,
        character_ability: true,
        character_weapon: true,
        character_relationship: {
          include: {
            related_character: { select: { id: true, name: true, avatar_url: true } },
          },
        },
        character_image: true,
        character_video: true,
        character_audio: true,
      },
    });
  },

  async incrementLikes(id: number) {
    await prisma.character.update({
      where: { id },
      data: { likes_count: { increment: 1 } },
    });
  },

  async decrementLikes(id: number) {
    await prisma.character.update({
      where: { id },
      data: { likes_count: { decrement: 1 } },
    });
  },

  async incrementFavorites(id: number) {
    await prisma.character.update({
      where: { id },
      data: { favorites_count: { increment: 1 } },
    });
  },

  async decrementFavorites(id: number) {
    await prisma.character.update({
      where: { id },
      data: { favorites_count: { decrement: 1 } },
    });
  },
};
```

---

## 7. 工具函数设计

### 7.1 日期格式化

**文件路径**: `src/utils/formatDate.ts`

```typescript
import { format, parseISO } from 'date-fns';
import zhCN from 'date-fns/locale/zh-CN';

export const formatDate = (dateStr: string, formatStr: string = 'yyyy-MM-dd') => {
  try {
    const date = parseISO(dateStr);
    return format(date, formatStr, { locale: zhCN });
  } catch {
    return dateStr;
  }
};

export const formatDateTime = (dateStr: string) => {
  return formatDate(dateStr, 'yyyy-MM-dd HH:mm');
};

export const formatRelativeTime = (dateStr: string) => {
  try {
    const date = parseISO(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    const months = Math.floor(diff / 2592000000);
    
    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    if (days < 30) return `${days}天前`;
    if (months < 12) return `${months}个月前`;
    return formatDate(dateStr);
  } catch {
    return dateStr;
  }
};
```

### 7.2 字符串处理

**文件路径**: `src/utils/stringUtils.ts`

```typescript
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const removeHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>/g, '');
};

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
```

### 7.3 数字格式化

**文件路径**: `src/utils/numberUtils.ts`

```typescript
export const formatNumber = (num: number): string => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

export const formatPercent = (num: number, total: number): string => {
  if (total === 0) return '0%';
  return ((num / total) * 100).toFixed(1) + '%';
};
```

---

## 8. 样式设计规范

### 8.1 TailwindCSS 配置

**文件路径**: `frontend/tailwind.config.ts`

```typescript
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          pink: '#ec4899',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-in': 'bounceIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(168, 85, 247, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
```

### 8.2 全局样式

**文件路径**: `src/styles/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Noto Sans SC', 'Roboto', sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    line-height: 1.6;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-all duration-200;
  }
  
  .btn-secondary {
    @apply bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200;
  }
  
  .card-hover {
    @apply hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
  }
  
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-accent-pink bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply bg-white/80 backdrop-blur-md border border-white/20;
  }
}

@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## 9. 测试方案

### 9.1 单元测试

**测试框架**: Jest + React Testing Library

**测试文件结构**:
```
src/
├── __tests__/
│   ├── components/
│   │   ├── Button.test.tsx
│   │   ├── Card.test.tsx
│   │   └── Avatar.test.tsx
│   ├── pages/
│   │   ├── HomePage.test.tsx
│   │   └── CharacterList.test.tsx
│   ├── features/
│   │   ├── charactersSlice.test.ts
│   │   └── usersSlice.test.ts
│   └── utils/
│       ├── formatDate.test.ts
│       └── stringUtils.test.ts
```

**测试示例**:
```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('applies primary variant', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-primary-600');
  });
  
  it('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 9.2 集成测试

**测试场景**:
1. 用户浏览角色列表 → 点击角色卡片 → 查看角色详情
2. 用户登录 → 收藏角色 → 查看收藏夹
3. 用户发表评论 → 点赞评论

### 9.3 端到端测试

**测试框架**: Cypress

**测试场景**:
1. 首页加载和导航
2. 角色搜索和筛选
3. 用户登录和注册
4. 角色收藏和点赞
5. 评论发表和查看

---

**文档版本**: v1.0  
**创建日期**: 2026年7月21日  
**适用项目**: 动漫角色介绍网站