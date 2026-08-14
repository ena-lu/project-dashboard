---
name: github-pages-deploy
description: GitHub Pages 從 main 分支 /docs 資料夾發布的操作步驟與注意事項。適用於本專案發布前確認、首次設定、或排查發布失敗。
---

## 本專案 GitHub Pages 設定摘要

### 發布來源
- 分支：`main`
- 資料夾：`/docs`

### 本地測試流程
1. 建立 `docs/` 資料夾（如果不存在）
2. 在 `docs/` 放入 `index.html`（或 `index.md`／`README.md`）
3. 推送到 GitHub：`git add . ; git commit -m "init" ; git push`
4. 等待 10 分鐘至 1 小時後，前往 `https://<username>.github.io/<repository>/` 檢查

### 檢查發布狀態
1. GitHub 專案首頁 → Settings → Pages
2. 確認 "Source" 顯示：`main` / `docs (folder)`
3. 確認 "Build and deployment" → "Primary branch" = `main`

### 本地預覽（無建置工具）
- 直接雙擊 `docs/index.html` 用瀏覽器開啟即可預覽
- 響應式設計需用瀏覽器開發者工具模擬不同裝置

---

## 建立 GitHub Pages 的完整步驟

### 第一步：確認發布來源
1. 前往專案倉庫 → Settings → Pages
2. 在 "Build and deployment" → "Source" 下選擇：
   - Branch：`main`
   - Folder：`/docs`
3. 點擊 Save

### 第二步：放置入口檔案
在 `docs/` 資料夾根目錄放至少一個：
- `index.html`
- `index.md`
- `README.md`

### 第三步：推送變更
```bash
git add .
git commit -m "add docs/index.html for GitHub Pages"
git push
```

### 第四步：等待並驗證
- 推送後等待 10 分鐘～1 小時
- 進入 Settings → Pages → "Visit site" 按鈕
- 或手動輸入 URL：`https://<username>.github.io/<repository>/`

---

## 常見問題排查

### 問題：推送後看不到網站
- 檢查 Settings → Pages 的 Source 是否設定為 `main` / `docs`
- 確認 `index.html` 在 `docs/` 根目錄
- 等待至少 10 分鐘（通常 1 小時內會完成）

### 問題：404 錯誤
- 檢查入口檔案名稱是否為 `index.html`（大小寫敏感）
- 確認路徑為 `docs/index.html`（不是 `docs/sub/index.html`）
- 檢查檔案是否已推送成功：`git log` → `git status`

### 問題：樣式不生效（CSS/JS 無法載入）
- 確認 CSS/JS 檔案也在 `docs/` 資料夾內
- HTML 路徑使用相對路徑：`<link rel="stylesheet" href="style.css">`（不是 `/style.css` 或 `/docs/style.css`）
- 使用瀏覽器開發者工具 → Network 檢查 404

### 問題：自定義域設定
- 自定義域需在 Settings → Pages → "Custom domain" 設定
- DNS 提供商設定：
  - 子域（www.example.com）：CNAME 指向 `<username>.github.io`
  - 頂點域（example.com）：A 記錄指向 GitHub IP：
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`

---

## 本專案技術約束提醒（來自 project-rules.md）

- 純 HTML／CSS／JavaScript，無框架、無建置工具、無 Node.js
- 不呼叫外部 API，資料全部為 hardcoded mock data
- 所有網站檔案放在 `docs/` 資料夾
- 介面文字使用繁體中文
- 版面需支援響應式設計（RWD）
