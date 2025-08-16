# 🎂 Chingbaby 生日驚喜專案

一個充滿愛意的互動式生日驚喜網頁，包含日系輕音樂、多個場景和溫馨的回憶旅程。

## ✨ 特色功能

- 🎵 **日系輕音樂系統** - 溫馨的背景音樂和場景配樂
- 🏪 **便利商店場景** - 尋找快樂泉源的互動遊戲
- 🎁 **驚喜登場** - 熊貓英雄帶來的禮物驚喜
- 📸 **回憶旅程** - 珍貴照片和回憶的展示
- 🎂 **生日慶典** - 最終的慶祝場景和煙火效果
- 🔊 **音效系統** - 豐富的互動音效和音樂控制

## 🚀 部署到 GitHub Pages

### 步驟 1：創建 GitHub 倉庫

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊右上角的 "+" 號，選擇 "New repository"
3. 倉庫名稱建議：`chingbaby-birthday-surprise`
4. 選擇 "Public"（公開）
5. 不要勾選 "Add a README file"
6. 點擊 "Create repository"

### 步驟 2：上傳專案文件

在你的專案資料夾中執行以下命令：

```bash
# 初始化 Git 倉庫
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Chingbaby birthday surprise project"

# 添加遠端倉庫（替換 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 在 GitHub 倉庫頁面，點擊 "Settings" 標籤
2. 左側選單中找到 "Pages"
3. 在 "Source" 部分，選擇 "Deploy from a branch"
4. 選擇 "main" 分支和 "/ (root)" 資料夾
5. 點擊 "Save"

### 步驟 4：等待部署

- GitHub Pages 會自動構建和部署你的網站
- 通常需要 5-10 分鐘
- 部署完成後，你會看到一個綠色的勾號和網站連結

## 🌐 訪問你的網站

部署完成後，你的網站將可以通過以下網址訪問：
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

## 📁 專案結構

```
Birthday/
├── index.html              # 主頁面（GitHub Pages 版本）
├── static/
│   ├── css/
│   │   └── style.css      # 樣式文件
│   ├── js/
│   │   └── script.js      # JavaScript 邏輯
│   └── images/            # 圖片和媒體文件
├── templates/
│   └── index.html         # Flask 模板版本
├── app.py                 # Flask 應用（本地開發用）
└── README.md              # 說明文件
```

## 🎮 使用說明

1. **開始遊戲**：點擊 "點我開始" 按鈕
2. **音效控制**：右上角有音效和音樂開關按鈕
3. **場景切換**：完成每個場景的任務後自動切換
4. **互動元素**：點擊各種物件和角色進行互動

## 🔧 本地開發

如果你想在本地測試：

```bash
# 安裝 Python 依賴
pip install flask

# 運行 Flask 應用
python app.py

# 訪問 http://localhost:5000
```

## 💝 給 Chingbaby 的驚喜

這個專案包含了：
- 溫馨的日系輕音樂
- 互動式的遊戲體驗
- 珍貴的回憶照片
- 充滿愛的生日祝福

## 📱 響應式設計

- 支援桌面和手機瀏覽
- 觸控友好的互動設計
- 自適應的佈局

## 🎵 音樂特色

- **背景音樂**：溫馨的日系輕音樂
- **場景配樂**：每個場景都有獨特的音樂風格
- **音效系統**：豐富的互動音效
- **音樂控制**：可獨立控制音樂和音效

---

**祝 Chingbaby 生日快樂！** 🎂✨

這個專案充滿了愛意和創意，相信她會很喜歡這個特別的生日驚喜！
