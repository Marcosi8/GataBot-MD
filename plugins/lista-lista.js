let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ' + fin,
rows: [
{title: "📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗟𝗢𝗖𝗞𝗘𝗗", rowId: `${usedPrefix}listablock`, description: `𝙐𝙎𝙐Á𝙍𝙄𝙊𝙎 𝘽𝘼𝙉𝙄𝘿𝙊𝙎 𝙋𝙊𝙍 𝙇𝙄𝙂𝘼𝙍.`},
{title: "⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦 : 𝗪𝗔𝗥𝗡𝗘𝗗", rowId: `${usedPrefix}listadv`, description: `𝙐𝙎𝙐Á𝙍𝙄𝙊𝙎 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙎 𝙋𝙊𝙍 𝙋𝘼𝙇𝘼𝙑𝙍𝘼𝙎 𝙊𝘽𝙎𝘾𝙀𝙉𝘼𝙎.`},
{title: "📵 𝘾𝙃𝘼𝙏𝙎 𝘽𝘼𝙉𝙄𝘿𝙊𝙎 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗖𝗛𝗔𝗧𝗦", rowId: `${usedPrefix}chatsbaneados`, description: `𝘾𝙃𝘼𝙏𝙎 𝙊𝙉𝘿𝙀 𝙉𝘼̃𝙊 𝙋𝙊𝘿𝙀𝙈 𝙐𝙎𝘼𝙍 𝙊 𝘽𝙊𝙏.`},
{title: "🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝘽𝘼𝙉𝙄𝘿𝙊𝙎 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listbanuser`, description: `𝙐𝙎𝙐Á𝙍𝙄𝙊𝙎 𝙌𝙐𝙀 𝙉𝘼̃𝙊 𝙋𝙊𝘿𝙀𝙈 𝙐𝙎𝘼𝙍 𝙊 𝘽𝙊𝙏.`},
{title: "🎟️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 : 𝗩𝗜𝗣 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listapremium`, description: `𝙐𝙎𝙐Á𝙍𝙄𝙊𝙎 𝘾𝙊𝙈 𝙋𝘼𝙎𝙎𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈.`},
{title: "💞 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝙀𝙈 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊 : 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣", rowId: `${usedPrefix}listaparejas`, description: `𝙐𝙎𝙐Á𝙍𝙄𝙊𝙎 𝙌𝙐𝙀 𝙎𝘼̃𝙊 𝙐𝙈 𝘾𝘼𝙎𝘼𝙇.`}]}]

const listMessage = {
  text: `𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎\n𝙏𝙔𝙋𝙀𝙎 𝙊𝙁 𝙐𝙎𝙀𝙍 𝙇𝙄𝙎𝙏𝙎`,
  footer: wm,
  title: `${htki} 𝙇𝙄𝙎𝙏𝘼 𝙑𝘼𝙍𝙄𝘼𝘿𝘼𝙎 📃`,
  buttonText: `📑 𝙑𝙀𝙍 𝙇𝙄𝙎𝙏𝘼𝙎 📑`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
