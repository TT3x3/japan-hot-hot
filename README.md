# Japan-Hot-Hot ☀️
Japan-Hot-Hot 是一個基於 Vue 2 開發的日本旅遊資訊/預約平台。本專案整合了現代化的前端開發工具，提供流暢的用戶體驗與響應式介面。

## ✨ 功能特色
- **旅遊資訊瀏覽**：提供日本景點、活動等詳細資訊
- **票券預約與購買**：支援票券與行程的線上預約及結帳流程
- **會員系統**：用戶登入/註冊、個人中心管理訂單與收藏
- **搜尋與過濾**：強大的搜尋功能，支援關鍵字、分類篩選
- **響應式設計**：支援桌面與行動裝置，提供一致的使用體驗


## 🚀 技術棧
* 核心框架: **Vue.js 2.6** (搭配 Composition API 支援)
* 狀態管理: **Pinia** (Vue 官方推薦的狀態管理工具)
* 路由管理: **Vue Router 3**
* 樣式處理: **Tailwind CSS 4.0 & PostCSS**
* 網路請求: **Axios**


## 📃 環境需求
- **Node.js**: >= 14.0.0
- **npm**: >= 6.0.0
- **瀏覽器**: 支援現代瀏覽器 (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)


## 🛠️ 安裝與開發流程
```bash
1. 複製專案
   git clone https://github.com/your-username/japan-hot-hot.git
   cd japan-hot-hot

2. 安裝依賴
   npm install

3. 本地開發
# 啟動開發伺服器，預設網址為 http://localhost:8080
npm run serve 

4. 編譯與打包 (Production)
# 將專案打包至 dist 目錄 
npm run build

5. 程式碼規範檢查 (Linter)
npm run lint
```


## 🎯 專案重點配置
- **Tailwind CSS 4.0**: 使用了最新的 PostCSS 整合方案，確保極速的樣式編譯。
- **Composition API**: 雖然是 Vue 2，但已引入 @vue/composition-api，讓開發者可以使用 Vue 3 的邏輯複用模式。
- **Browser Compatibility**: 支援全球流量大於 1% 的瀏覽器版本，確保大多數用戶皆能正常訪問。


## 📁 專案資料夾結構
```bash
japan-hot-hot/
├── babel.config.js            # Babel 配置，用於 JavaScript 轉譯
├── jsconfig.json              # JavaScript 專案配置
├── package.json               # Node.js 專案依賴和腳本配置
├── postcss.config.js          # PostCSS 配置，用於 CSS 處理
├── README.md                  # 專案說明文件
├── tailwind.config.js         # Tailwind CSS 配置
├── vue.config.js              # Vue CLI 配置
├── public/
│   ├── index.html
│   └── favicon.ico            # icon
└── src/
    ├── App.vue                # 根元件
    ├── main.js                # 應用程式入口點
    ├── api/
    │   └── http.js            # Axios HTTP 請求封裝
    ├── assets/                # 靜態資源
    │   ├── font.css           # 字體樣式
    │   ├── main.css           # 自定義樣式
    │   ├── fonts/             # 字體檔案
    │   └── images/            # 圖片資源
    ├── components/            # Vue 元件
    │   ├── base/              # 基礎元件
    │   │   ├── BaseCategory.vue        # 分類元件
    │   │   ├── BaseLoading.vue         # 加載動畫元件
    │   │   ├── BaseModal.vue           # 模態框元件
    │   │   └── BasePagination.vue      # 分頁元件
    │   ├── common/            # 通用元件
    │   │   ├── BackToTop.vue           # 返回頂部元件
    │   │   └── SearchBar.vue           # 搜尋欄元件
    │   ├── home/              # 首頁相關元件
    │   │   ├── HomeActivity.vue        # 首頁活動元件
    │   │   └── HomeCarousel.vue        # 首頁輪播元件
    │   ├── layout/            # 佈局元件
    │   │   ├── AppFooter.vue           # 頁尾
    │   │   ├── AppHeader.vue           # 頁首
    │   │   └── MemberHero.vue          # 會員 Hero 元件
    │   └── ui/                # UI 元件
    │       ├── BaseInput.vue           # 輸入框元件
    │       └── CheckoutStepBar.vue     # 結帳步驟欄元件
    ├── filters/
    │   └── dollarFilter.js    # 金額格式化過濾器
    ├── json/
    │   └── city.json           # 城市資料
    ├── pages/                  # 頁面元件
    │   ├── AppAbout.vue        # 關於我
    │   ├── AppHome.vue         # 首頁
    │   ├── AppLogin.vue        # 登入
    │   ├── AppSignup.vue       # 註冊
    │   ├── NotFound.vue        # 404
    │   ├── payment/            # 付款相關
    │   │   ├── Checkout.vue            # 結帳
    │   │   └── CheckoutPassport.vue    # 護照資訊
    │   │   ├── CheckoutChecked.vue     # 結帳確認
    │   │   ├── CheckoutFinished.vue    # 結帳完成
    │   └── products/           # 產品相關頁面
    │       ├── ProductsPage.vue       # 產品列表
    │       ├── TicketDetail.vue       # 票券詳情
    │       └── TourDetail.vue         # 行程詳情
    │       ├── SearchResult.vue       # 搜尋結果
    ├── router/
    │   └── index.js            # Vue Router 配置
    ├── stores/                 # Pinia 狀態管理
    │   ├── loading.js                 # 加載狀態管理
    │   ├── order.js                   # 訂單狀態管理
    │   └── search.js                  # 搜尋狀態管理
    └── utils/
        └── auth.js             # 認證 Hook
```


## ⚠️ 授權協議 (License)
這是一個**私有專案 ("private": true)**。未經授權禁止轉載或商用。
