module.exports = {
  data: {
    name: "botadmin",
    description: "๐คใใฎBOTใฎ็ฎก็่ใใ็ดนไปใใพใ๏ผ",
  },
  async execute(interaction) {
    await interaction.reply({
      components: [
        {
          type: 1,
          components: [
            {
              style: 5,
              label: 'ใตใใผใใตใผใใผใธๅๅ ใใ',
              url: 'https://discord.gg/uYYaVRuUuJ',
              disabled: false,
              type: 2,
            },
          ],
        },
      ],
      embeds: [
        {
          title: 'ใใฎBOTใฎ็ฎก็่๐',
          description: `<@728495196303523900>ใ็ฎก็ใใฆใใใพใใ\nใๅใๅใใใฏ__**ใตใใผใใตใผใใผ**__ใพใงใฉใใ๏ผ`,
          color: 3823616,
          timestamp: new Date(),
        },
      ],
    });
  }
}
