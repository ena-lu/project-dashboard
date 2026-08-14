---
inclusion: always
---

# Project Rules

## 技術規範

- 純 HTML／CSS／JavaScript，不使用任何框架（React、Vue、Angular 等）
- 不使用 Node.js、Vite 或任何建置工具
- 不呼叫外部 API，所有資料以模擬資料（hardcoded / mock data）實作

## 目錄結構

- 所有網站檔案放在 `docs/` 資料夾內
- GitHub Pages 從 `main` 分支的 `docs/` 目錄發布

## 語言與介面

- 介面文字、內容一律使用繁體中文
- 版面必須具備響應式設計（RWD），支援桌機、平板與手機

## 發布方式

- 透過 GitHub Pages 發布
- 設定：Branch = `main`，Folder = `/docs`
