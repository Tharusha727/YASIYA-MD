const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~EEJ0zB7R#ncXqDBfyS5N9qgrn72oyAwRdRdDCmsLC-QXr2Kl43E0'
};
