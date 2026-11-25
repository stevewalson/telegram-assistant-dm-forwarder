const { Bot } = require('grammy');
require("dotenv").config();
const bot = new Bot(process.env.BOT_TOKEN);



bot.on('business_message', async ctx => {
    let BotOwner = await ctx.getBusinessConnection()
    let BotId = ctx.me.id

    if (ctx.businessMessage.sticker) return ctx.api.sendSticker(BotOwner.user.id, ctx.businessMessage.sticker.file_id, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: `👤 ${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}`, url: `tg://user?id=${ctx.businessMessage.from.id}`, style: "primary" }
                ]
            ]
        }
    })

    if (ctx.businessMessage.voice) return ctx.api.sendVideo(BotOwner.user.id, ctx.businessMessage.voice.file_id, { caption: `👤 <a href="tg://user?id=${ctx.businessMessage.from.id}">${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}</a> Sent you this 🎤`, parse_mode: "HTML" })

    if (ctx.businessMessage.video_note) {
        return ctx.api.sendVideoNote(BotOwner.user.id, ctx.businessMessage.video_note.file_id, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: `👤 ${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}`, url: `tg://user?id=${ctx.businessMessage.from.id}`, style: "primary" }
                    ]
                ]
            }
        })
    }

    if (ctx.businessMessage.animation) return ctx.api.sendVideo(BotOwner.user.id, ctx.businessMessage.animation.file_id, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: `👤 ${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}`, url: `tg://user?id=${ctx.businessMessage.from.id}`, style: "primary" }
                ]
            ]
        }
    })

    if (ctx.businessMessage.photo) {
        if (ctx.businessMessage.caption) return ctx.api.sendPhoto(BotOwner.user.id, ctx.businessMessage.photo.at(-1).file_id, { caption: `👤 <a href="tg://user?id=${ctx.businessMessage.from.id}">${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}</a> Sent you this 🖼\n\n✉️ ${ctx.businessMessage.caption}`, parse_mode: "HTML" })

        return ctx.api.sendPhoto(BotOwner.user.id, ctx.businessMessage.photo.at(-1).file_id, { caption: `👤 <a href="tg://user?id=${ctx.businessMessage.from.id}">${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}</a> Sent you this 🖼`, parse_mode: "HTML" })
    }
    if (ctx.businessMessage.video) {
        if (ctx.businessMessage.caption) return ctx.api.sendVideo(BotOwner.user.id, ctx.businessMessage.video.file_id, { caption: `👤 <a href="tg://user?id=${ctx.businessMessage.from.id}">${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}</a> Sent you this 📹\n\n✉️ ${ctx.businessMessage.caption}`, parse_mode: "HTML" })

        return ctx.api.sendVideo(BotOwner.user.id, ctx.businessMessage.video.file_id, { caption: `👤 <a href="tg://user?id=${ctx.businessMessage.from.id}">${ctx.businessMessage.from.first_name} ${ctx.businessMessage.from.last_name ? ctx.businessMessage.from.last_name : ""}</a> Sent you this 📹`, parse_mode: "HTML" })
    }
    ctx.api.sendMessage(BotOwner.user.id, ctx.businessMessage.photo ? ctx.businessMessage.caption : ctx.businessMessage.text)
})



bot.start();
