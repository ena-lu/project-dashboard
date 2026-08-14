# 設計文件：專案管理儀表板

## 1. 檔案結構

```
docs/
├── index.html   ← 唯一的 HTML 檔案，包含所有標記與 SVG 趨勢圖
├── styles.css   ← 所有樣式，包含 RWD
└── app.js       ← 模擬資料、篩選、展開、工時差異計算
```

所有資源使用相對路徑（`./styles.css`、`./app.js`），不引入任何外部套件或 CDN。

---

## 2. 資料結構

### 2-1. 模擬資料（固定，定義在 app.js 頂部）

```js
const PROJECTS = [
  {
    id: 1,
    name: '專案名稱',
    client: '客戶名稱',
    status: '開發中',           // 六種狀態之一
    phases: [
      {
        name: '需求確認',
        plannedDate: '2026-03-01',
        actualDate: '',          // 空字串 = 未填寫
        estimatedHours: 16,
        actualHours: null        // null = 未填寫
      },
      // ... 開案、開發、測試、發布（共5個階段）
    ]
  },
  // ... 共 8 筆，覆蓋全部 6 種狀態
]
```

### 2-2. 狀態對應色碼

| 狀態 | CSS class | 顏色 |
|------|-----------|------|
| 需求確認中 | `badge--requirements` | 灰藍 |
| 待開案 | `badge--pending` | 橙黃 |
| 開發中 | `badge--development` | 藍色 |
| 測試中 | `badge--testing` | 紫色 |
| 待發布 | `badge--staging` | 青色 |
| 已發布 | `badge--released` | 綠色 |

---

## 3. 頁面結構（index.html）

```
<body>
  <header>               ← 標題「專案管理儀表板」
  <main>
    <section class="toolbar">
      <select id="client-filter">  ← 客戶篩選下拉選單
    <section class="project-list">
      <div class="project-card" data-id="...">   ← 每筆專案一張卡片
        <div class="project-card__summary">       ← 點擊可展開
          專案名稱 / 客戶 / 狀態 badge
        <div class="project-card__detail" hidden> ← 預設隱藏
          <table class="phase-table">             ← 階段詳細資料
            thead: 階段 / 預計日期 / 實際日期 / 預估工時 / 實際工時 / 差異
            tbody: 5 個階段各一行
          <div class="trend-chart">               ← SVG 趨勢比較（工時）
```

---

## 4. 互動行為（app.js）

### 4-1. 初始化
1. 從 `PROJECTS` 取得所有不重複的客戶名稱，填入 `#client-filter`
2. 呼叫 `renderProjects(PROJECTS)` 渲染所有卡片

### 4-2. 客戶篩選
- 監聽 `#client-filter` 的 `change` 事件
- 選擇特定客戶：`PROJECTS.filter(p => p.client === value)`
- 選擇「全部」：傳入完整 `PROJECTS` 陣列
- 呼叫 `renderProjects(filtered)` 重新渲染列表

### 4-3. 展開／收合
- 點擊 `.project-card__summary` 切換 `.project-card__detail` 的 `hidden` 屬性
- 一次只開一張（切換前先關閉其他）

### 4-4. 實際日期輸入
- `input[type="date"]` 直接在 HTML 中渲染
- 無需 JavaScript 監聽，瀏覽器原生處理輸入
- 不需持久化，重新整理後回復模擬資料初始值

### 4-5. 實際工時輸入與差異計算
- `input[type="number"]` 監聽 `input` 事件
- 差異 = 實際工時 − 預估工時
- 結果寫入同一行的 `.diff` 儲存格
- `diff > 0`：`class="diff diff--over"`（紅色，加 + 號）
- `diff < 0`：`class="diff diff--under"`（綠色）
- `diff === 0`：`class="diff"`（中性色）
- 未填寫：顯示 `—`

### 4-6. SVG 趨勢圖
- 在每張展開的卡片底部，以原生 SVG 畫出每個階段的預估 vs. 實際工時長條圖
- 僅顯示已填入實際工時的階段（未填入的階段不畫實際長條）
- 用 JavaScript 動態生成 SVG `<rect>` 元素，不引入任何套件

---

## 5. 響應式設計（styles.css）

- 斷點：`768px`（手機 / 桌機）
- 桌機（≥768px）：`phase-table` 正常顯示所有欄位
- 手機（<768px）：
  - `phase-table` 改為堆疊排版（每行顯示標籤 + 值）
  - 卡片寬度 100%

---

## 6. 驗收對照

| 需求 | 實作位置 |
|------|---------|
| US-01 顯示所有專案 | `renderProjects()` → `.project-card` |
| US-02 狀態 badge 顏色 | `badge--{status}` CSS class |
| US-03 客戶篩選 | `#client-filter` + `change` 事件 |
| US-04 各階段預計日期 | `phase-table` td（模擬資料） |
| US-05 實際日期可輸入 | `input[type="date"]` |
| US-06 預估／實際工時 | `phase-table` td + `input[type="number"]` |
| US-07 工時差異顯示 | `.diff` 儲存格 + `input` 事件計算 |
