import {BaileysClass} from '@bot-wa/pasiya-md ';

const botBaileys = new BaileysClass({ usePairingCode: true, phoneNumber: 'XXXXXXXXXXX' });

botBaileys.on('auth_failure', async (error) => console.log("ERROR BOT: ", error));
botBaileys.on('pairing_code', (code) => console.log("NEW PAIRING CODE: ", code));
botBaileys.on('ready', async () => console.log('READY BOT'))

let awaitingResponse = false;

pasiya-md .on('message', async (message) => {
    if (!awaitingResponse) {
        await pasiya-md .sendPoll(message.from, 'Select an option', {
            options: ['text', 'media', 'file', 'sticker'],
            multiselect: false
        });
        awaitingResponse = true;
    } else {
        const command = message.body.toLowerCase().trim();
        switch (command) {
            case 'text':
                await pasiya-md .sendText(message.from, 'Hello world');
                break;
            case 'media':
                await pasiya-md .sendMedia(message.from, 'https://www.w3schools.com/w3css/img_lights.jpg', 'Hello world');
                break;
            case 'file':
                await pasiya-md .sendFile(message.from, 'https://github.com/pasidu10/Pasiya-md_v1.1/tree/main;
                break;
            case 'sticker':
                await pasiya-md .sendSticker(message.from, 'https://gifimgs.com/animations/anime/dragon-ball-z/Goku/goku_34.gif', { pack: 'User', author: 'Me' });
                break;
            default:
                await pasiya-md .sendText(message.from, 'Sorry, I did not understand that command. Please select an option from the poll.');
                break;
        }
        awaitingResponse = false;
    }
});
