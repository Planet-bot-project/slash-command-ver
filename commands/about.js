module.exports = {
  data: {
    name: "about",
    description: "ðªãã®BOTã®æå ±ãè¡¨ç¤ºãã¾ã",
  },
	async execute(interaction) {
	  await interaction.reply({
      components: [
        {
          type: 1,
          components: [
            {
              style: 5,
              label: 'ãµãã¼ããµã¼ãã¼ã¸åå ãã',
              url: 'https://discord.gg/uYYaVRuUuJ',
              disabled: false,
              type: 2,
            },
          ],
        },
      ],
      embeds: [
        {
          type: 'rich',
          title: 'Planet botã«ã¤ãã¦',
          description: 'node.jsã§ä½æããããé©å½ãªbotã§ãã\n\n\nãä¸æãªç¹ã¯ãä»¥ä¸ã®ãã¿ã³ããããµãã¼ããµã¼ãã¼ã«åå ãã¦ããåãåãããã ããï¼',
          color: 0x498205,
          thumbnail: {
            url: 'attachment://logo.png',
          },
          footer: {
            text: 'This bot is made by Hoshimikan6490',
            icon_url: 'attachment://me.png',
          },
        },
      ],
      files: [
        {
          attachment: 'images/logo.png',
          name: 'logo.png',
        }, {
          attachment: 'images/me.png',
          name: 'me.png',
        },
      ],
    });
	}
}
