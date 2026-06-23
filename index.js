const bedrock = require('bedrock-protocol');

const config = {
    host: 'AleksAlperYasin.aternos.me', // Metti l'IP del tuo server Aternos
    port: 30236,                      // La porta del tuo server
    username: 'BotAntiAFK_h24',       // Il nome che preferisci per il bot
    version: '1.26.31.1'              // La tua versione Bedrock attuale
};

function avviaBot() {
    console.log("Tentativo di connessione...");
    const client = bedrock.createClient({
        host: config.host,
        port: config.port,
        skipPing: true,
        username: config.username,
        offline: true,
        version: config.version
    });

    client.on('spawn', () => { console.log("Bot connesso con successo!"); });
    client.on('close', (reason) => {
        console.log("Disconnesso. Riconnessione tra 30 secondi...");
        setTimeout(() => { avviaBot(); }, 30000);
    });
    client.on('error', (err) => { console.error("Errore:", err.message); });
}
avviaBot();
