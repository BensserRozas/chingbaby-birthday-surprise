#!/bin/bash

# 🚀 Chingbaby 生日驚喜專案部署腳本
# 這個腳本會幫你自動部署到 GitHub Pages

echo "🎂 開始部署 Chingbaby 生日驚喜專案到 GitHub Pages..."

# 檢查是否已經初始化 Git 倉庫
if [ ! -d ".git" ]; then
    echo "📁 初始化 Git 倉庫..."
    git init
else
    echo "✅ Git 倉庫已存在"
fi

# 檢查是否有遠端倉庫
if ! git remote | grep -q "origin"; then
    echo "🔗 請先添加遠端倉庫："
    echo "git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "然後重新運行此腳本"
    exit 1
fi

# 添加所有文件
echo "📝 添加所有文件到 Git..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "🎂 更新 Chingbaby 生日驚喜專案 - $(date)"

# 推送到 GitHub
echo "🚀 推送到 GitHub..."
git push origin main

echo ""
echo "🎉 部署完成！"
echo ""
echo "📋 接下來需要手動啟用 GitHub Pages："
echo "1. 前往你的 GitHub 倉庫頁面"
echo "2. 點擊 'Settings' 標籤"
echo "3. 左側選單中找到 'Pages'"
echo "4. 在 'Source' 部分，選擇 'Deploy from a branch'"
echo "5. 選擇 'main' 分支和 '/ (root)' 資料夾"
echo "6. 點擊 'Save'"
echo ""
echo "⏳ 等待 5-10 分鐘後，你的網站就會上線！"
echo "🌐 網址格式：https://YOUR_USERNAME.github.io/REPO_NAME"
echo ""
echo "💝 祝 Chingbaby 生日快樂！🎂✨"
