const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'pave',
        categorie: 'SEABOX'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/f62dafc3262b895e8e9e3.jpg';
            const msg = `*ℙ𝔸𝕍𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ🔻*
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
*ℕ𝔸𝕄𝔼*:
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
💬:
        ◉━━━━━━━━━━◇

👑:

▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
*ℙ𝔸𝕍𝔼 𝕊𝔼𝔸 𝔹𝕆𝕏 ℂ𝕆𝕄𝕄𝕌ℕ𝕀𝕋𝕐*
                  ♲︎    *・・・55%♲︎*
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'camp',
        categorie: 'SEABOX'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/453cccddb5fbca86d5885.mp4';
            const msg = `░░░░░░░░░░░░░░░░░
*LISTE DE PERSO PRT*
░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░
◇ *_John SMITH_*
◇ *_Lord EISER_*
◇ *_Tempest SHANKs_*
◇ *_Lone Tecraso_*
◇ *_Kun DAY_*
╰≪[ En totale le nombre de pirate est de: *05* ]

░░░░░░░░░░░░░░░░░░
*LISTE DE PERSO MRE*
░░░░░░░░░░░░░░░░░░
◇ *_No_name HINDRA_*
◇ *_Yû Namikaze_*
◇ *_Mini lust BORSALINO_*
◇ *_Regulus SVAIN_*
╰≪[ En totale le nombre de Marine est de: *04*
░░░░░░░░░░░░░░░░░░
                 *_SEABOX_*
░░░░░░░░░░░░░░░░░░`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);