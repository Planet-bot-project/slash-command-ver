module.exports = {
	data: {
    name: "omikuji",
    description: "ð¥ ãã¿ãããå¼ãã¾ã",
  },
	async execute(interaction) {
    const arr = ['å¤§å', 'ä¸­å', 'å°å', 'å', 'å¶', 'å¤§å¶'];
    const random = Math.floor(Math.random() * arr.length);
    const result = arr[random];
    const reply = ['ããªãã¯', result, 'ãå¼ãã¾ããï¼'].join('');
   ãawait interaction.reply({
      embeds: [
        {
          title: 'ãã¿ããã®çµæï¼',
          description: reply,
          color: 4817413,
          timestamp: new Date(),
        },
      ],
    });
	}
}
