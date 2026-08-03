---
title: 博客安装
description: ''
pubDate: 2026-08-03T11:03
image: /images/blog-install/6d8b747867956899.png
draft: false
tags: []
categories: []
---
⬇️ 使用方法
安装 pnpm 包管理器（如果你没有安装过的话）
npm i -g pnpm
克隆项目
git clone https://github.com/kobaridev/RyuChan.git Ryuchan
进入项目文件夹
cd Ryuchan
安装依赖
pnpm i
调试、运行项目
首次运行或更新内容后，请先执行 search:index 来生成搜索索引：

# 生成搜索索引以供开发时使用  [2](#header-2)
pnpm run search:index  
  
pnpm run dev
🔧 配置
Ryuchan 使用 ryuchan.config.yaml 作为配置文件，你可以通过在线配置编辑器或直接编辑此文件来管理网站设置。

网站基本信息 (site)
site:  
  tab: Ryuchan # 浏览器标签栏上显示的文本  
  title: Ryuchan # 网站的主标题  
  description: A clean, elegant, and fast static blog template! # 网站描述，用于SEO  
  language: zh # 网站的语言代码，如"en"表示英文，"zh"表示中文  
  favicon: /favicon.ico # 网站图标路径
主题设置 (theme)
theme:  
  light: winter # 浅色模式的主题，基于daisyUI的主题  
  dark: dracula # 深色模式的主题，基于daisyUI的主题  
  code: github-dark # 代码块的主题样式
主题基于 daisyUI 提供的主题选项
代码块主题使用 Shiki 提供的样式
TMDB 配置 (追番功能)
tmdb:  
  apiKey: "your-tmdb-api-key" # TMDB API Key (v3 auth)  
  listId: "your-list-id" # TMDB List ID
Bilibili 配置 (追番功能)
bilibili:  
  uid: "your-bilibili-uid" # Bilibili 用户 ID
菜单配置 (menu)
menu:  
  - id: home # 菜单项唯一标识符  
    text: 首页 # 菜单显示的文本  
    href: / # 链接地址  
    svg: "material-symbols:home-outline-rounded" # 图标  
    target: _self # 链接打开方式  
  - id: write  
    text: 写作  
    href: /write  
    svg: "material-symbols:edit-outline"  
    target: _self  
  - id: config  
    text: 配置  
    href: /config  
    svg: "material-symbols:settings-outline"  
    target: _self



3. 创建 Github App 链接仓库
在 github 个人设置里面，找到最下面的 Developer Settings ，点击进入



进入开发者页面，点击 New Github App

GitHub App name 和 Homepage URL , 输入什么都不影响。Webhook 也关闭，不需要。



只需要注意设置一个仓库 write 权限，其它不用。



点击创建，谁能安装这个仓库这个选择无所谓。直接创建。



创建密钥
创建好 Github App 后会提示必须创建一个 Private Key，直接创建，会自动下载（不见了也不要紧，后面自己再创建再下载就行）。页面上有个 App ID 需要复制一下

再切换到安装页面



这里一定要只授权当前项目。



点击安装，就完成了 Github App 管理该仓库的权限设置了。下一步就是让前端知道推送那个项目，就是最开始提到的环境变量。（如果你不会设置环境变量，直接改仓库文件 src/consts.ts 也行。因为是公开的，所以环境变量意义也不大）

直接输入这几个环境变量值就行，一般只用设置 OWNER 和 APP_ID。其它配置不用管，直接输入创建就行。



设置完成后，需要手动再部署一次，让环境变量生效。

可以直接 push 一次仓库代码会触发部署
也可以手动选择创建一次部署 
4. 完成
现在，部署的这个网站就可以开始使用前端改内容了。比如更改一个分享内容。

提示，网站前端页面删改完提示成功之后，你需要等待后台的部署完成，再刷新页面才能完成服务器内容的更新哦。
