const Discord = require('discord.js')
const client = new Discord.Client()
var Long = require("long");
//const config = require('./package.json');
//const watch = require('./watch.json');


const getDefaultChannel = (guild) => {
  // get "original" default channel
  if(guild.channels.has(guild.id))
    return guild.channels.get(guild.id)

  // Check for a "general" channel, which is often default chat
  const generalChannel = guild.channels.find(channel => channel.name === "general");
  if (generalChannel)
    return generalChannel;
  // Now we get into the heavy stuff: first channel in order where the bot can speak
  // hold on to your hats!
  return guild.channels
   .filter(c => c.type === "text" &&
     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
   .sort((a, b) => a.position - b.position ||
     Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
   .first();
}




client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    client.user.setActivity("some jams and dying~♪")
   
})

function getRandomValue(max){
  return 1+Math.floor(Math.random() * Math.floor(max));
}

client.on("guildMemberAdd", member => {
  const channel = getDefaultChannel(member.guild);
  channel.send(`Welcome, ${member}. Scoth confirmed alive`);
});



client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return;
    }
    if (receivedMessage.isMentioned(client.user)) {
        receivedMessage.reply("You called?");
    }
    //if (receivedMessage.content.includes(client.user.toString())) {
        // Send acknowledgement message
      //  receivedMessage.channel.send("You called?");
       
     //}
  
    
    if ((receivedMessage.content.toLowerCase().includes("cat"))) { 
        let guild = client.guilds.get(receivedMessage.guild.id);
         USER_ID = 'neontomcat#9907';

       if (!guild.member(USER_ID)) {
         // there isn't a GuildMember with that ID
         let val = getRandomValue(4);
      
        switch (val){
          default:receivedMessage.channel.send("Miss me with that gay shit");
              break;
          case 2:receivedMessage.channel.send("Booly free zone.");
            break;
          case 3:receivedMessage.channel.send("Cat found her floofy cloud."); 
            break;
          case 4:receivedMessage.channel.send("Hewwo from the other side.");  
            break;
        }
       }
        
    }
    if ((receivedMessage.content.toLowerCase().includes("koumei"))||(receivedMessage.content.toLowerCase().includes("moustache"))||(receivedMessage.content.toLowerCase().includes("stache"))||(receivedMessage.content.toLowerCase().includes("brother"))||(receivedMessage.content.toLowerCase().includes("👨"))){
        let val = getRandomValue(4);
      
        switch (val){
          default:receivedMessage.channel.send("Shave that off! Now.");
              break;
          case 2:receivedMessage.channel.send("I think you might need this",{files:["https://ae01.alicdn.com/kf/HTB1LHojXIfrK1RkSnb4q6xHRFXaU/Wholesale-3pcs-set-Razor-Disposable-Shaving-Razor-Handle-Stainless-Steel-Blade-Razor-For-Man-Face-Care.jpg_640x640.jpg"]});
            break;
          case 3:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750029963460608/From_this_day_on_I_will_be_a_police_officer.png"]}); 
            break;
          case 4:receivedMessage.channel.send("Oh no.");  
            break;
        }
    }
    if (receivedMessage.content.toLowerCase().includes("zero")) {
        let val = getRandomValue(2);
        switch (val){
          case 1:receivedMessage.channel.send("I'm not giving you Zero's phone number.");
            break;
          case 2:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/558715626667900968/558722549710848000/Come_over_to_the_Afterlife_and_be_gay_with_me.png"]}); 
            break;
        }
        
    }
    if ((receivedMessage.content.toLowerCase().includes("heart"))||(receivedMessage.content.toLowerCase().includes("❤"))||(receivedMessage.content.toLowerCase().includes("traitor"))) {           
        receivedMessage.channel.send("Traitors must be punished accordingly.",{files: ["https://www.detectiveconanworld.com/wiki/images/thumb/5/56/Akai_kills_Scotch.jpg/200px-Akai_kills_Scotch.jpg"]});
    }
    if ((receivedMessage.content.toLowerCase().includes("music"))||(receivedMessage.content.toLowerCase().includes("guitar"))||(receivedMessage.content.toLowerCase().includes("🎸"))) {
      let val = getRandomValue(4);
      switch (val){
        case 1:receivedMessage.channel.send({files:["https://pm1.narvii.com/5914/312ce55c3030377b75db1c5e6883f4f14427e7e2_hq.jpg"]});
          break;
        case 2:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750079233818628/yes_this_is_my_husband.png"]});
          break;
        case 3:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750049722957859/teaching_how_to_play_the_bass.png"]});
          break;
        case 4:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750046270914560/playing_music_together_is_gay_culture.png"]});
          break;
      }
        
    }
    if ((receivedMessage.content.toLowerCase().includes("friend "))||(receivedMessage.content.toLowerCase().includes("friends"))||(receivedMessage.content.toLowerCase().includes("friendos"))) {
      let val = getRandomValue(4);
      switch (val){
        case 1:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750071952637962/The_squad.png"]});
          break;
        case 2:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750019045556227/Also_when_the_Cat_gives_me_life.png"]});
          break;
        case 3:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750027325374514/Dead_Friend_Squad.png"]});
          break;
        case 4:receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/558715626667900968/558724028735422464/Screen_Shot_2019-03-22_at_14.49.38.png"]});
          break;
      }
        
    }
    if ((receivedMessage.content.toLowerCase().includes("dream"))||(receivedMessage.content.toLowerCase().includes("police"))){
      receivedMessage.channel.send({files:["https://cdn.discordapp.com/attachments/483806359440064534/550750029963460608/From_this_day_on_I_will_be_a_police_officer.png"]});
    }
    if ((receivedMessage.content.toLowerCase().includes("h.sing"))){
      receivedMessage.channel.send("wake up in the morning ~♪\nthere's a brand new day ahead~♫\nthe sun is bright and the clouds smile down ~♩\nand all your friends are dead ~♬ ");
    }
    if ((receivedMessage.content.toLowerCase().includes("h.help"))){
      receivedMessage.channel.send(" Available commands: \n- sing \n\n Reaction words: \nfriend, friendos, friends\n police, dream\n moustache, brother, koumei\n music, guitar\n heart, traitor\n zero ");
    }
    

  })




// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
client.login(process.env.BOT_TOKEN);
