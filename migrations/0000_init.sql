-- Migration number: 0000 	 2023-01-13T13:26:09.701Z

CREATE TABLE IF NOT EXISTS limited_users
(
    id        int primary key autoincrement,
    chat_id   text not null,
    user_id   text not null,
    joined_at int  not null
);
CREATE INDEX IF NOT EXISTS limited_users_chat_id_user_id_joined_at_index on limited_users (chat_id, user_id, joined_at);

CREATE TABLE IF NOT EXISTS messages
(
    id             int primary key autoincrement,
    chat_id        text not null,
    message_id     text not null,
    content        text not null,
    target_user_id text not null,
    sent_at        int  not null
);
CREATE INDEX IF NOT EXISTS messages_chat_id_target_user_id_index on messages (chat_id, target_user_id);

CREATE TABLE IF NOT EXISTS blocked_users
(
    id             int primary key autoincrement,
    user_id        text not null,
    target_user_id text not null,
    reason         text,
    created_at     int  not null
);
CREATE INDEX IF NOT EXISTS blocked_users_target_user_id_index on blocked_users (target_user_id);
CREATE INDEX IF NOT EXISTS blocked_users_user_id_index on blocked_users (user_id);