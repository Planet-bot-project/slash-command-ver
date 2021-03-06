module.exports = {
  data: {
    name: "create",
    description: "ð§°ã«ãã´ãªã¼ã»ãã­ã¹ããã£ã³ãã«ã»ãã¤ã¹ãã£ã³ãã«ãä½æãã¾ãï¼ï¼ãã£ã³ãã«ç®¡çæ¨©éå¿é ï¼",
    options: [
      {
        type: "STRING",
        name: "type",
        description: "ä½ãä½ããæå®ãã¾ã",
        required: true,
        choices: [
          { name: "ã«ãã´ãªã¼", value: "category" },
          { name: "ãã­ã¹ããã£ã³ãã«", value: "text_channel" },
          { name: "ãã¤ã¹ãã£ã³ãã«", value: "voice_channel"},
        ]
      },
      {
        type: "STRING",
        name: "name",
        value: "name",
        description: "ååãæå®ãã¾ã",
        required: true
      }
    ]
  },
  async execute(interaction) {
    const c_name = interaction.options.getString('name')
    if (!interaction.memberPermissions.has("MANAGE_CHANNELS")) {
      await interaction.reply({
        embeds: [
          {
            title: 'ð«ã¨ã©ã¼ï¼ï¼',
            description: 'æ¨©éã¨ã©ã¼ã§ãã\nããªãã¯ãã®ãµã¼ãã¼ã®ãã£ã³ãã«ç®¡çæ¨©éãæã£ã¦ãã¾ããã',
            color: 0xFF0000,
            timestamp: new Date()
          },
        ],
        ephemeral: true
      });
    } else {
      if (interaction.options.getString('type') === 'category') {
        interaction.guild.channels.create(c_name,{type: 'GUILD_CATEGORY'});
        await interaction.reply({
          embeds: [
            {
              title: 'ð¢å®äº',
              description: `ãð¦${c_name}ãã«ãã´ãªã¼ãä½æãã¾ããã`,
              color: 0x00FF00,
              timestamp: new Date()
            }
          ]
        });
      } else if (interaction.options.getString('type') === 'text_channel') {
        interaction.guild.channels.create(c_name,{
          type: 'TEXT',parent: interaction.channel.parent
        }).then(async channels => {
          const c_id = channels.id
          await interaction.reply({
            embeds: [
              {
                title: 'ð¢å®äº',
                description: `ð¤<#${c_id}> ãä½æãã¾ããã`,
                color: 0x00FF00,
                timestamp: new Date()
              }
            ]
          });
        });
      } else if (interaction.options.getString('type') === 'voice_channel') {
        interaction.guild.channels.create(c_name,{
          type: 'GUILD_VOICE', parent: interaction.channel.parent
        }).then(async channels => {
          const c_id = channels.id
          await interaction.reply({
            embeds: [
              {
                title: 'ð¢å®äº',
                description: `ð£<#${c_id}> ãä½æãã¾ããã`,
                color: 0x00FF00,
                timestamp: new Date()
              }
            ]
          });
        });
      }
    }
  }
}
