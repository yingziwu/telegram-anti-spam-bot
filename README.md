一个运行在 Cloudflare Worker 上的反广告机器人。

项目结构
-----------------------------

```
src
├── db.ts               数据库相关函数（WIP）
├── index.ts            Cloudflare Worker 入口及路由配置
├── init.ts             做一些初始化的工作
├── schedule.ts         做一些定时工作，如踢出认证起超时用户（WIP）
├── type.d.ts           类型定义
├── updateHandler.ts    处理 telegram update （核心文件）
└── webhook.ts          设置、查询、清除 telegram webhook 
```

Install
---------------------------------------

1. 到 [@BotFather](https://t.me/BotFather) 创建一个机器人。
2. 配置机器人权限如下
   - Group Privacy: Privacy mode is disabled
   - Group Admin Rights: Restrict, ban or unban members, Manage chat
3. ``cp wrangler.example.toml wrangler.toml``，根据实际情况修改 ``wrangler.toml``。
4. 运行 ``wrangler publish`` 将项目部署至 Cloudflare Worker。
5. 运行 ``curl -X POST ${webhookDomain}/${webhookAdminPath}/setWebhook`` 设置 webhook。