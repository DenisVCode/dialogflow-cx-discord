# Dialogflow CX Discord integration

This repository serves as an example of integrating Dialogflow CX bot into Discord DMs

### Setup 

1. Fill out Discord Bot secret in bot/src/index.ts
2. Run the ```npm run dev``` command in the /bot directory to start the Discord Bot
3. Setup Firebase project using the ```firebase use project-id``` command in the /functions directory
4. Deploy Firebase Functions using ```firebase deploy --only functions``` command
