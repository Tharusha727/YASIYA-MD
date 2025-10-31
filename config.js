const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~NAQSHY6T#5T-AU13zx8P6HnpIJkQ2tspb_P1OCstqWt-Ntd4KGw8'
};
