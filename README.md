# Telegram Assistant Bot: DM Forwarder.

A lightweight Telegram assistant using **Secretary Mode** to intercept incoming direct messages and forward them straight to the account owner.

## Overview

Connected to your Telegram account via Secretary Mode, **DM Forwarder** watches your incoming direct messages. Whenever someone messages you, the assistant immediately forwards the message and sender details to your private bot chat so nothing slips through the cracks.

## Features

- **Instant Forwarding:** Relays incoming text, media, and sender info directly to the owner.
- **Self-Hosted & Minimal:** Fast, lightweight, and easy to run continuously in the background.

## Prerequisites
- Node.js (use a current LTS release) and npm.
- A Bot Token from [@BotFather](https://t.me/BotFather).

## Create and configure the bot with BotFather

1. Open [@BotFather](https://t.me/BotFather) in Telegram and send `/newbot`.
2. Follow the prompts to choose a display name and a unique username ending in `bot`.
3. Keep the bot token private. If it has ever been shared or committed, revoke it and generate a replacement with BotFather.
4. Open `/mybots`, select your bot, and open **Bot Settings**:
   - Enable **Secretary Mode**. This is Telegram's BotFather setting name for the capability this personal project uses.
   - Disable **Allow Groups** so the bot cannot be added to group chats.
   - Enable **Restrict Bot Usage** , so only you can control the bot. Menu labels may change as Telegram updates BotFather.
5. Open your profile settings and select Chat Automation, and enter the @username of the bot you created and confirm to link it.


## Setup

1. **Clone the repository**
```bash
   git clone https://github.com/stevewalson/telegram-assistant-dm-forwarder.git
   cd telegram-assistant-dm-forwarder
```

2. **From the project directory:**

```sh
npm install
```

update the credentials in the `.env` file :

```dotenv
BOT_TOKEN=your_telegram_bot_token
```

- `BOT_TOKEN` is the token issued by BotFather for your Telegram bot.
- Keep `.env` private and do not commit it to Git or share it. If a token or key has been exposed, revoke it and create a replacement.

Then start the bot:

```sh
node index.js
```

Keep the process running for the bot to receive updates.