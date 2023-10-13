const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});


client.on('ready', () => {
    console.log('Client is ready1!');
});

client.on('message', message => {
    console.log(message.body)
    message.reply('Hello ahmed how are you :) ');
    // if (message.body === 'Hi') {
    //     message.reply('Welcome to tazman');
    // }
});

client.initialize();