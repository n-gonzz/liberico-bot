// Packages 
require("dotenv").config();
const {
  Client,
  Collection,
  Partials,
  GatewayIntentBits
} = require("discord.js");
const clc = require("cli-color");
const fs = require("fs");
const post = require("./src/functions/post.js");
const client = new Client({
  intents: Object.values(GatewayIntentBits).filter(a => !isNaN(a)),
  partials: Object.values(Partials).filter(a => !isNaN(a))
});
const { Player } = require("discord-player");
const { YoutubeiExtractor, generateOauthTokens } = require("discord-player-youtubei");
const { DefaultExtractors } = require("@discord-player/extractor");
const player = new Player(client);
(async () => {
  await player.extractors.loadMulti(DefaultExtractors);
  await player.extractors.register(YoutubeiExtractor, {
    authentication: await generateOauthTokens()
  });
})();
client.config = require("./config.js");
client.token = client.config.token;
client.commands = new Collection();
client.cooldowns = new Collection();

// Load Handlers 
let amount = 0;
const handle = fs.readdirSync("./src/handlers").filter(file => file.endsWith(".js"));
const data = require("./package.json");
const error = require("./src/functions/error.js");
post(
  clc.cyanBright(`Welcome to ${clc.blueBright(data.name)}! | Version: ${clc.blueBright(data.version)}`) + "\n" +
  `Desarrollado por ${clc.yellow(`ngonzz_`)} & ${clc.yellow(`Cyborg`)} With ${clc.redBright("❤️")}` + "\n" +
  `Discord: ${clc.blueBright(`Legado Iberico`)} | ${clc.blueBright(`Legado Iberico`)} | ${clc.blueBright(`https://discord.gg/`)}`,
  "W",
  "magentaBright",
  "cyanBright"
);
post(`Logging into the BOT...`, "S", "yellowBright", "greenBright");
handle.forEach((file) => {
  require(`./src/handlers/${file}`)(client);
  amount += 1;
});
post(`${clc.cyanBright(amount)} Handler Is Loaded!!`, "S", "yellowBright", "greenBright");

// Consol 
if (client.token) {
  client.login(client.token).catch(e => {
    post("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!!", "E", "red", "redBright");
    error(e);
  });
} else {
  post("Please Write Your Bot Token Opposite The Token In The config.js File In Your Project!!", "E", "red", "redBright");
}

// Anti Crash 
process.on("unhandledRejection", (reason) => error(reason));
process.on("rejectionHandled", (promise) => error(promise));
process.on("uncaughtException", (e) => error(e));
process.on("uncaughtExceptionMonitor", (e) => error(e));
