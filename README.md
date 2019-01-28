# chess_bot
Bot Discord permettant de jouer aux echecs avec un ami.
## Prerequis
### Discord
Vous devez disposer d'un compte developpeur Discord et d'un bot avec son token. Le token sera utilise pour associer le bot a votre serveur.
### Technos
#### Avec Docker
  - Docker
  - Docker Compose
#### Sans Docker
  - NodeJS
  - NPM
## Installation
### Avec Docker
Mettre votre token dans la variable d'environnement **APP_TOKEN** se trouvant dans le fichier **docker-compose.yml**
Lancer la commande `docker-compose up -d`. Le premier lancement peut prendre quelques minutes pour installer les dependances.
### Sans Docker
Lancer la commande `npm install` la premiere fois pour installer les dependances
Lancer la commande `node index.js` pour demarrer le bot
