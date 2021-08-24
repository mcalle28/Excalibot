const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const fetch = require("node-fetch");
const prefix = "!";

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  try {
	  command.execute(message, args);
  }
   catch (error) {
		console.error(error);
	  message.reply('Error!');
	}

});

client.login(process.env['TOKEN']);