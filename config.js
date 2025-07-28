const { ActivityType } = require("discord.js");
module.exports = {
  token: process.env.token || "", // Bot token from .env or place in here
  prefix: process.env.prefix || ".", // Put bot message commands prefix in here.
  serverId: process.env.server_id || "1398828719149289584", // Put bot main server's id in here.
  only_one_guild: false, // Set bot slash command to all guild or just one with placing true or false.
  source: {
    database: {
      type: process.env.database_type || "json", // Choose one type for save users and guilds data. Types: "mysql" | "sql" | "mongodb" | "json"
      mongoURL: process.env.database_mongoURL || "", // If you choose "mongodb" type place your mongo url.
      mysql: {
        host: process.env.database_msql_host || "", // Place your Mysql server host name.
        user: process.env.database_msql_user || "", // Place your Mysql server username.
        password: process.env.database_msql_password || "", // Place your Mysql server password.
        database: process.env.database_msql_database || "" // Place your Mysql server database name.
      } // If you choose "mysql" type place your Mysql server information.
    }
  },
  status: {
    activity: [
      "/help"
    ], // Set bot status activity, you can change it. | You can use "{members}" variable to shows bot all users.
    type: [
      ActivityType.Custom
    ], // Can be: ActivityType.Competing | ActivityType.Listening | ActivityType.Playing | ActivityType.Streaming | ActivityType.Watching
    presence: [
      "online"
    ] // Can be: "online" | "dnd" | "idle" | "offline"
  },
  webhook: {
    url: process.env.webhook_url || "", // Place a webhook url in here.
    username: process.env.webhook_username || "Legado Iberico", // Place a name for webhook in here.
    avatar: process.env.webhook_avatar || "https://images.vexels.com/media/users/3/205701/isolated/preview/e9a2c3f595928c3a388282c06541f957-cazador-arma-izquierda-mirando-hacia-la-silueta-de-descanso.png" // Place a image url in here.
  },
  owners: [
    "572460299999772672"
  ], // Place bot developers user id in here.
  chat_bot: {
    name: "Guardabosques", // Place chat bot name.
    gender: "Male" // Place chat bot gender like example: "Male" | "Female"
  }
};
