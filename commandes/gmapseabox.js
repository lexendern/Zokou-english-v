const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'spawnwailingwars',
        categorie: '🔹SEABOX🔹'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/ebb174b77e9bc554629c0.jpg';
            const msg = `░░░━━━━━━━━━
🔷𝕃𝕆ℂ𝔸𝕃 𝕊ℙ𝔸𝕎ℕ 𝔹𝔸𝕋𝕋𝕃𝔼 𝔹𝕆𝕏🌐
             ░░░━━━━━━━━━━━
*🔹Localisation*: _WAILING WARS_
    ░░━━━
*🔹name*: *SHANKS TEMPEST*
- *desc*: _Une box 📦 contenant une arme est située à 2km_
            ░░░━━━━━━━━━━
░░░━━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'spawnlootlake',
        categorie: '🔹SEABOX🔹'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/f1cbad9de1f51fbd56c29.jpg';
            const msg = `░░░━━━━━━━━━
🔷𝕃𝕆ℂ𝔸𝕃 𝕊ℙ𝔸𝕎ℕ 𝔹𝔸𝕋𝕋𝕃𝔼 𝔹𝕆𝕏🌐
             ░░░━━━━━━━━━━━
*🔹Localisation*: _LOOT LAKE_
    ░░━━━
*🔹name*: *Lust lucci*
- *desc*: _Une box 📦 contenant une arme est située à 2km_
            ░░░━━━━━━━━━━
░░░━━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'spawnriskymns',
        categorie: '🔹SEABOX🔹'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/e458f44d5b9f70838a13f.jpg';
            const msg = `░░░━━━━━━━━━
🔷𝕃𝕆ℂ𝔸𝕃 𝕊ℙ𝔸𝕎ℕ 𝔹𝔸𝕋𝕋𝕃𝔼 𝔹𝕆𝕏🌐
             ░░░━━━━━━━━━━━
*🔹Localisation*: _RISKY MNS_
    ░░━━━
*🔹name*: *Jonh smith*
- *desc*: _Une box 📦 contenant une arme est située à 2km_
            ░░░━━━━━━━━━━
░░░━━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'spawnlodgerais',
        categorie: '🔹SEABOX🔹'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/5b3fb5e770fbd28b8be2e.jpg';
            const msg = '░░░━━━━━━━━━
🔷𝕃𝕆ℂ𝔸𝕃 𝕊ℙ𝔸𝕎ℕ 𝔹𝔸𝕋𝕋𝕃𝔼 𝔹𝕆𝕏🌐
             ░░░━━━━━━━━━━━
*🔹Localisation*: _LOGGE RAIS_
    ░░━━━
*🔹name*: *Adorieru D. Kamado VII*
- *desc*: _Une box 📦 contenant une arme est située à 2km_
            ░░░━━━━━━━━━━
░░░━━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);