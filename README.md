# chipotle-code-botter

Automated script that fetches from Chipotle's Twitter and detects promotions that pertaining to a User sending a Code to 888-222 for a free burrito. It automates and scales the process to yield alot of free burritoes. 

...In progress.

To use:

npm i

create .env file, within it, input credentials for twitter api and discord api, twillio api

TWITTER_API_KEY 
TWITTER_API_KEY_SECRET
ACCESS_TOKEN 
ACCESS_TOKEN_SECRET 
TWITTER_BEARER_TOKEN 
CLIENT_ID 
CLIENT_SECRET
APP_ID
DISCORD_BOT_TOKEN 
DISCORD_WEBHOOK_URL
ROLE_ID 
TWILLIO_AUTH 
TWILLIO_SID 
TWILLIO_NUMBER
PHONE_NUMBER 

in terminal, node TwitterMonitor.js to start. 

you can adjust max_results / function interval. avoid anything under 4 seconds to avoid rate limit on ip. run 24/7 on virtual server for best results. enjoy your free burritoes, more updates coming soon

enjoy your free burritoes -Tony