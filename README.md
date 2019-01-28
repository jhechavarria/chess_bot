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
Si vous le pouvez, creez une variable d'environnement **APP_TOKEN** contenant le token du bot et une variable **APP_OWNER** contenant votre identifiant Discord. Dans le cas contraire, mettre le token dans la cle **token** du fichier **config.json** ainsi que votre identifiant Discord dans la cle **owner**

Lancer la commande `npm install` la premiere fois pour installer les dependances

Lancer la commande `node index.js` pour demarrer le bot
