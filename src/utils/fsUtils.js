const fs = require('fs').promises;

const PATH_NAME = './src/talker.json';

async function readTalkers() {
    try {
        const talkersData = await fs.readFile(PATH_NAME, 'utf-8');
        const talkers = JSON.parse(talkersData);

        return talkers;
    } catch (e) {
        console.error(`Erro ao ler o arquivo: ${e.message}`);
    }
}

module.exports = {
    readTalkers,
};