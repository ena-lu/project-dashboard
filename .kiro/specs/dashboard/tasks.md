# 任務清單：專案管理儀表板

每項任務獨立開發、驗證後 commit。不依賴其他任務即可開始。

---

## Task 1：HTML 結構

**目標：** 建立靜態 HTML 骨架，內含完整的語意標記與一筆硬編碼範例卡片。

**要建立的檔案：**
- `docs/index.html`

**工作內容：**
1. 建立 `docs/` 資料夾
2. 建立 `docs/index.html`，包含：
   - `<meta charset>` / `<meta name="viewport">` / `<title>`
   - `<link rel="stylesheet" href="./styles.css">`
   - `<script src="./app.js" defer></script>`
   - `<header>`：標題「專案管理儀表板」
   - `<select id="client-filter">`：含「全部客戶」選項
   - 至少一張 `.project-card`（靜態硬編碼，含 summary + detail）
   - `<table class="phase-table">`：thead 含全部欄位；tbody 含 5 個階段靜態資料
   - `input[type="date"]`（實際日期）與 `input[type="number"]`（實際工時）欄位
   - `.diff` 儲存格（靜態顯示 `—`）
   - SVG 趨勢圖佔位區塊 `<div class="trend-chart">`

**驗收標準：**
- [x] 瀏覽器直接開啟 `docs/index.html` 不報錯
- [x] 頁面顯示標題、下拉選單、至少一張卡片
- [x] 展開的卡片內可見 phase-table（含所有欄位）
- [x] date input 與 number input 可手動輸入
- [x] HTML 通過 W3C Validator 基本檢查（無 error）

**Commit 訊息：** `task1: HTML structure with static example card`

---

## Task 2：CSS 版面與樣式

**目標：** 為所有 HTML 元素套用樣式，完成桌機與手機響應式版面。

**要建立的檔案：**
- `docs/styles.css`

**工作內容：**
1. CSS Reset（僅 `box-sizing: border-box` + `margin/padding: 0`，不引入外部 reset）
2. Header 樣式
3. `.toolbar`（篩選列）
4. `.project-card` 卡片：邊框、圓角、陰影、hover 效果
5. `.project-card__summary`：cursor pointer、flex 排版
6. `.project-card__detail[hidden]`：以 `display:none` 隱藏
7. 六種 `.badge--{status}` 顏色（對應 design.md §2-2）
8. `.phase-table`：桌機正常顯示
9. `.diff--over`（紅色）、`.diff--under`（綠色）
10. `.trend-chart svg`：固定高度、寬度 100%
11. RWD 斷點 `@media (max-width: 768px)`：
    - `.phase-table` 改為堆疊式（`display: block`，每行 `::before` 顯示欄位名）
    - 卡片寬度 100%、橫向 padding 縮小

**驗收標準：**
- [x] 六種 badge 顏色各不相同，肉眼可分辨
- [x] 桌機檢視：table 正常顯示所有欄位
- [x] 手機模擬（DevTools 375px）：table 改為堆疊排版，無水平捲軸
- [x] `.diff--over` 文字為紅色、`.diff--under` 文字為綠色
- [x] 無任何外部 CSS 引用（@import url 或 CDN link）

**Commit 訊息：** `task2: CSS layout and responsive styles`

---

## Task 3：模擬資料、互動與 SVG 趨勢圖

**目標：** 以 JavaScript 注入模擬資料、實作篩選、展開、工時差異計算、SVG 趨勢圖。

**要建立的檔案：**
- `docs/app.js`

**工作內容：**
1. 定義 `const PROJECTS`：8 筆資料，覆蓋 6 種狀態，至少 3 個不同客戶
2. `renderProjects(list)`：清空 `.project-list` 並依資料動態生成卡片 HTML
   - 每張卡片含 summary（名稱、客戶、狀態 badge）與 detail（phase-table + trend-chart）
   - `input[type="date"]` 預填 `actualDate`（空字串則留空）
   - `input[type="number"]` 預填 `actualHours`（null 則留空）
   - `.diff` 依 `actualHours` 初始計算（null 顯示 `—`）
3. 初始化客戶篩選下拉選單（去重後填入 `<option>`）
4. 監聽 `#client-filter change` → 重新呼叫 `renderProjects`
5. 事件委派：點擊 `.project-card__summary` 切換 detail 展開
6. 事件委派：監聽 `.actual-hours` input 事件 → 更新同行 `.diff`
7. `renderTrendChart(phases, container)`：
   - 產生原生 SVG（`<svg>`、`<rect>`、`<text>`）
   - X 軸：5 個階段名稱
   - Y 軸：依最大工時等比例縮放
   - 預估工時：灰色長條；實際工時（已填）：藍色長條

**驗收標準（對應 US-01 ～ US-07）：**
- [x] US-01：頁面載入後顯示所有 8 筆專案
- [x] US-02：每筆專案顯示正確顏色的狀態 badge
- [x] US-03：下拉選單包含「全部客戶」＋所有不重複客戶名稱；選擇後正確篩選
- [x] US-04：展開後可見各階段預計完成日期（來自模擬資料）
- [x] US-05：`input[type="date"]` 可手動輸入，填入後顯示在欄位中
- [x] US-06：預估工時顯示模擬資料值；`input[type="number"]` 可輸入
- [x] US-07：輸入實際工時後，差異立即更新；超時紅色加+號、提早綠色、未填顯示 `—`
- [x] SVG 趨勢圖在展開的卡片中可見，預估/實際長條可分辨
- [x] 不引入任何外部套件（無 `import`、無 `<script src="https://...">`)

**Commit 訊息：** `task3: mock data, interactivity, and SVG trend chart`

---

## Task 4：整合檢查與 GitHub Pages 發布

**目標：** 跨瀏覽器驗證所有需求均已通過，並確認 GitHub Pages 發布設定正確。

**工作內容：**
1. 逐條核對 `requirements.md` 的所有驗收條件（US-01 ～ US-07）
2. 確認 `docs/` 只有 3 個檔案：`index.html`、`styles.css`、`app.js`
3. 確認所有資源路徑使用相對路徑（無 `/docs/...`、無 `https://`）
4. 在 `docs/` 根目錄建立 `.nojekyll` 空檔案（防止 GitHub Pages 誤用 Jekyll 處理）
5. 執行 `git add docs/ ; git commit -m "task4: integration check and publish"`
6. Push 到 GitHub，在 Settings → Pages 設定 Branch=`main` / Folder=`/docs`
7. 等待 10 分鐘後，至發布 URL 驗證線上版本

**驗收標準：**
- [x] `docs/` 僅含 `index.html`、`styles.css`、`app.js`、`.nojekyll`（共 4 個檔案）
- [x] 所有 US-01 ～ US-07 驗收條件在瀏覽器本機均通過
- [x] 手機模擬（375px）版面無水平捲軸
- [x] GitHub Pages 設定：Branch = `master`，Folder = `/docs`
- [x] 線上 URL 可正常載入，CSS 與 JS 無 404

**Commit 訊息：** `task4: integration check and publish to GitHub Pages`
---

## Task 5：甘特圖檢視（US-08）

**目標：** 新增甘特圖檢視模式，以 SVG 原生呈現所有專案各階段時程，預設置中於今日。

**要修改的檔案：**
- `docs/index.html`：加入切換按鈕與甘特圖容器
- `docs/app.js`：加入 `renderGantt()` 與切換邏輯
- `docs/styles.css`：加入甘特圖樣式

**工作內容：**
1. 在 `toolbar` 加入 `#btn-list` 與 `#btn-gantt` 切換按鈕
2. 新增 `#gantt-view` 容器（預設 hidden）
3. `renderGantt(list)`：
   - 原生 SVG 產生，X 軸時間、Y 軸專案
   - 階段區間：無 `plannedDate` 不顯示
   - 今日以紅色虛線標示，進入時水平置中
4. 切換按鈕點擊時切換可見容器
5. 客戶篩選變更時同步更新甘特圖

**驗收標準（US-08）：**
- [x] 提供「列表」與「甘特圖」切換按鈕
- [x] 預設顯示列表，點擊甘特圖按鈕後切換為甘特圖
- [x] 甘特圖以原生 SVG 實作，不引入外部套件
- [x] X 軸為時間軸，Y 軸每列代表一個專案
- [x] 每個專案顯示 5 個階段的時間區段（依 plannedDate 計算起訖）
- [x] 無 plannedDate 的階段不顯示
- [x] 進入甘特圖時，時間軸預設置中於今日
- [x] 今日在時間軸上以明顯垂直線標示
- [x] 客戶篩選套用至甘特圖

**Commit 訊息：** `feat: add Gantt chart view (US-08)`

---

## 完成狀態

| Task | 狀態 | Commit |
|------|------|--------|
| Task 1 | ✅ | 78ba742 |
| Task 2 | ✅ | 398146c |
| Task 3 | ✅ | 822fd54 |
| Task 4 | ✅ | e8995a0 |
| Task 5 | ✅ | 1ce0946 |