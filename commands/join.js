
module.exports = {
    name: 'join',
    description: "join channel",
    execute(message, args) {

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct Permission!');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct Permission!');

        voiceChannel.join();

        message.reply(`:partying_face: I'm HERE`);
        
    }
}