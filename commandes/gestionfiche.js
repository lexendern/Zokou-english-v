const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'classe',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/e46975d9e67cf36924357.jpg';
            const msg = `▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭◇
┃*PVP CLASSEMENT*
╰◇
*_⦊NOVICE/-classe_*
    ━━━━━━◇━━━
🥇*_Lord Eiser.B*_-: _20 pts_
🥈*_Lone Tecraso_*-: _10 pts_
🥉*_Popeye Terøs_*-: _10 pts_
✨*_Yû Namikaze_*-: _10pts_
 ◉
 ╰━━━━━━━━▨▶
*Tempest Shank*-: _0 pt_
*John Smith*-: _0 pts_
*Kunday*-: _0 pts_
       ◉
       ╰━━━━━━━━━▨▶`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'fiche',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/f62dafc3262b895e8e9e3.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+ANS01sA*
*ℕ•*: 000
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞:
┃ℙ𝕣é𝕟𝕠𝕞:
┃ℂ𝕒𝕞𝕡:
┃𝔸𝕣𝕘𝕖𝕟𝕥:
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'yu',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/fc586c23f2e82094779ef.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+CPK51sA*
*ℕ•*: 001
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: yû Namikaze 
┃ℙ𝕣é𝕟𝕠𝕞: Astroi Th
┃ℂ𝕒𝕞𝕡: *Marine*
┃𝔸𝕣𝕘𝕖𝕟𝕥: *30.000k$*
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 1
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 1
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 1
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: Astrale ( 1er )
┃ℝ𝕒𝕟𝕜: *NOVICE 1*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*LegACy*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'lordeiser',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/f47c265954bb916c12383.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+STV01sA*
*ℕ•*: 002
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: Lord Eiser
┃ℙ𝕣é𝕟𝕠𝕞: Bloody legacy Ier👑
┃ℂ𝕒𝕞𝕡: Pirate
┃𝔸𝕣𝕘𝕖𝕟𝕥: 0$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 2
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 1
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 1
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: Astrale ( 1er )
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*LegACy*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'kunday',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/50868c171977f3f512dd9.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+OIY40sA*
*ℕ•*: 003
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: KUN
┃ℙ𝕣é𝕟𝕠𝕞: DAY
┃ℂ𝕒𝕞𝕡: Pirate 
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 0
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 0
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 0
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'johnsmith',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/36a30906988efeff1fe53.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+JHO70sA*
*ℕ•*: 004
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: John
┃ℙ𝕣é𝕟𝕠𝕞: Smith
┃ℂ𝕒𝕞𝕡: Pirate 
┃𝔸𝕣𝕘𝕖𝕟𝕥: 40.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 1
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 0
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 1
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'tempest',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/ebada5b343de6bc33f8d2.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+SHK99sA*
*ℕ•*: 005
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: Tempest
┃ℙ𝕣é𝕟𝕠𝕞: Shanks
┃ℂ𝕒𝕞𝕡: Pirate 
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 0
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 0
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 0
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'lone',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/6c2fa7f3bdc30d7c7f20a.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+LON90sA*
*ℕ•*: 006
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: Lone
┃ℙ𝕣é𝕟𝕠𝕞: Tecraso Winter❄️ 
┃ℂ𝕒𝕞𝕡: Pirate
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 1
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 0
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 1
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'svain',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/2c6ae0d43342dd21a35b2.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *REG44sA*
*ℕ•*: 007
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: Regulus
┃ℙ𝕣é𝕟𝕠𝕞: Svain
┃ℂ𝕒𝕞𝕡: Marine
┃𝔸𝕣𝕘𝕖𝕟𝕥:30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'nell',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/76b2f8dccb1d127be53a8.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+NLL98sA*
*ℕ•*: 008
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: D
┃ℙ𝕣é𝕟𝕠𝕞: Nell
┃ℂ𝕒𝕞𝕡: Marine
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 0
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 0
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 0
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'sabo',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/dc00d05e8af0780f0f465.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+NOH17sA*
*ℕ•*: 009
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: Monkey 
┃ℙ𝕣é𝕟𝕠𝕞: D Sabo 
┃ℂ𝕒𝕞𝕡: Marine
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000K$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'satorubh',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/667ef6b340d637a207149.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+SAT01sA*
*ℕ•*: 010
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: *satoru*
┃ℙ𝕣é𝕟𝕠𝕞: *buddha*
┃ℂ𝕒𝕞𝕡: Marine
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000K$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'minilust',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/357df7891a750b41c1d69.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+MIN25sA*
*ℕ•*: 011
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: *♦️ᴹᴵᴺᴵ𝗟𝘂𝘀t♦️*
┃ℙ𝕣é𝕟𝕠𝕞: *Lucci*
┃ℂ𝕒𝕞𝕡: Marine
┃𝔸𝕣𝕘𝕖𝕟𝕥: 20.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 1
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 1
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 1
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: Astrale ( 2e )
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*LegACy*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'minilust',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/9da8b5879d5bcd1778df0.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+GOD30sA*
*ℕ•*: 012
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: GOLD.D
┃ℙ𝕣é𝕟𝕠𝕞: Deather
┃ℂ𝕒𝕞𝕡: Marine
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'zero',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/09571fc5783bfb801afef.jpg';
            const msg = `*𝔽𝕀ℂℍ𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ*
     𝕞𝕒𝕥𝕣𝕚𝕔𝕦𝕝𝕖: *+ZER06sA*
*ℕ•*: 013
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨
╭━━「 *_𝕡𝕣𝕠𝕗𝕚𝕝𝕖_* 」
┃ℕ𝕠𝕞: Zéro 
┃ℙ𝕣é𝕟𝕠𝕞:  gin 
┃ℂ𝕒𝕞𝕡: Pirate
┃𝔸𝕣𝕘𝕖𝕟𝕥: 30.000k$
╰━━━━━━━◉⧼
╭━━「 *_ℙ𝕧ℙ 𝕤𝕥𝕒𝕥’𝕤_* 」
┃𝕍𝕚𝕔𝕥𝕠𝕚𝕣𝕖: 
┃𝔻é𝕗𝕒𝕚𝕥𝕖: 
┃𝕂𝕚𝕝𝕝 𝕛𝕣𝕤: 
╰━━━━━━━◉⧼
╭━━「 ℂℝ𝕊 」
┃ℕ𝕚𝕧𝕖𝕒𝕦: 1
┃𝕋𝕚𝕥𝕣𝕖: ... 
┃ℝ𝕒𝕟𝕜: *NOVICE*
╰━━━━━━━◉⧼
╭━━「 *𝔸𝕣𝕞𝕖 𝕄𝕪𝕥𝕙𝕚𝕢𝕦𝕖* 」
┃*N/A*
╰━━━━━━━◉⧼
╭━━「 *𝕊𝕥𝕪𝕝𝕖 ℂ𝕠𝕞𝕓𝕒𝕥* 」
┃*N/A*
╰━━━━━━━◉⧼
▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨▨`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'pavebattlebox',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/7479e1cce556333e5634f.jpg';
            const msg = `━━━━━━━━━━━
*ℙ𝔸𝕍𝔼 𝔻𝕌 𝕁𝕆𝕌𝔼𝕌ℝ 🔹*
━━━━━━
*Local🔻*:
                   𝔻𝕀𝕊𝕋𝔸ℕℂ𝔼:0km
━━━━━━━━
💬:
   ━━━━━━   ━━━

👑:
━━━━━━
           ━━━━━━━━━
🎒➤

❤️:100% 🌀:100% 🫀:100%
🛡:100%
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'mapbattlebox🔹',
        categorie: 'Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/7479e1cce556333e5634f.jpg';
            const msg = `░░░░░░━━━━━━
𝕃𝕆ℂ𝔸𝕃 𝕄𝔸ℙ 𝔹𝔸𝕋𝕋𝕃𝔼 𝔹𝕆𝕏🔹
       ━━━━░░░░░░░░
*🔷LAZY LINKS*
- distance: 10km
- ⁠zone_desc: une ville abandonnée, avec obstacle pouvant servir d’abris au joueur en cas de tir d’un adversaire.
░░━━━━
*🔷LOOT LAKE*
- distance: 20km
- ⁠zone_desc: lac avec un grand bateau des temps anciens toujours en parfait étape, des piège ils sont disposer un peu partout, vous pouvez servir des tonneaux pour vous protéger contre les tirs des adversaires.
░░━━━━
*🔷DISTY DIVOT*
- distance: 30km
- ⁠zone_desc: une tourelles de surveillance en bois parfait pour les sniper’s, au en l’entoure des arbres des arbres 🌳 
░░━━━━
*🔷WAILING WARS*
- distance: 40km
- ⁠zone_desc: forêt, rien d’autres à part des arbres, mais utilise pour se mettre à couvert.
░░━━━━
*🔷RETAIL BLO*
- distance: 50km
- ⁠zone_desc: est une zone un tout petit peu bizarre, le soleil se couche plus vite de ce côté parfait pour les sniper un peu d’arbres et des maisons.
░░━━━━
*🔷LODGE RAIS*
- distance: 60km
- ⁠zone_desc: ville en période d’automne avec un moulin et une petite rivière.
░░━━━━
*🔷RISKY MNS*
- distance: 70km
- ⁠zone_desc: lieux ouvert avec des pique disant un lieu extraterrestre, pique extrêmement dur pouvant servir comme lieu de protection.
░░━━━━
*🔷MOB STERN*
- distance: 80km
- ⁠zone_desc: est une zone dimensionnelle très dangereuse ⚠️, un endroit où des monstre on marqué leur territoire.
░░━━━━
░░░░░░░░━━━━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'pavebox',
        categorie: ‘Seabox'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/f70d61f26d6f5e49c25f5.jpg';
            const msg = `░░░━━━━━━━━
*🔷RISKY MNS🔹*
           ━━━━━━━━░░░
- _WARNING⚠️ : les pique on tendance à pousser si il reçoit des dégâts, une repouse de 1m de long et 3m de large._
                         ░░░━━━━━━━`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
