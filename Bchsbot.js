// Load environment variables from .env file
require('dotenv').config();

// Debug: Check if variables are loaded successfully
console.log('Token:', process.env.TOKEN);
console.log('Client ID:', process.env.CLIENT_ID);
console.log('Guild ID:', process.env.GUILD_ID);
console.log('Staff Role ID:', process.env.STAFF_ROLE_ID);

// Make sure to replace the following line with the Bot's execution code once debug is complete.
console.log('Environment variables are correctly set up! Replace this file with your bot code.');