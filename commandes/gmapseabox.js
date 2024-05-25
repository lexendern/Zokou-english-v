const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'locallazylinks',
        categorie: '🔹SEABOX🔹'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/cdffd0f45f7fbed1a8a9d.jpg';
            const msg = `░░░━━━━━━━━━
🔷𝕃𝕆ℂ𝔸𝕃 𝕊ℙ𝔸𝕎ℕ 𝔹𝔸𝕋𝕋𝕃𝔼 𝔹𝕆𝕏🌐
             ░░░━━━━━━━━━━━
*🔹Localisation*: _LAZY LINKS_
    ░░━━━
*🔹name*: *Yūkunn*
- *desc*: _Une box 📦 contenant une arme est située à 2km_
            ░░░━━━━━━━━━━
░░░━━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);