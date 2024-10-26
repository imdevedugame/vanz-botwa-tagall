const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // Import qrcode-terminal


// Buat instance client dengan menggunakan LocalAuth untuk menyimpan session secara lokal
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // Generate dan tampilkan QR code di console
    qrcode.generate(qr, { small: true });
    console.log('QR Code generated! Scan untuk login.');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async(message) => {
    if (message.isGroupMsg && message.body.toLowerCase() === '!tagall') {
        const chat = await message.getChat();

        if (chat.isGroup) {
            console.log('Fetching participants...');

            // Menggunakan method getParticipants untuk memastikan mendapatkan anggota grup
            const participants = await chat.getParticipants();
            console.log(`Participants found: ${participants.length}`);

            let mentions = [];
            let messageText = '';

            participants.forEach(participant => {
                mentions.push(participant.id._serialized);
                messageText += `@${participant.id.user} `;
            });

            console.log('Sending message...');
            chat.sendMessage(messageText, { mentions: mentions });
            console.log('Tagged all members in the group!');
        }
    }
});




// Start client
client.initialize();