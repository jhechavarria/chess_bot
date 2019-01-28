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
## Installation et lancement

### Avec Docker
Mettre votre token dans la variable d'environnement **APP_TOKEN** se trouvant dans le fichier **docker-compose.yml** ainsi que votre identifiant Discord dans la variable **APP_OWNER**

Lancer la commande `docker-compose up -d`. Le premier lancement peut prendre quelques minutes pour installer les dependances.

### Sans Docker
Si vous le pouvez, creez une variable d'environnement **APP_TOKEN** contenant le token du bot et une variable **APP_OWNER** contenant votre identifiant Discord. Dans le cas contraire, mettre le token dans la cle **token** du fichier **config.json** ainsi que votre identifiant Discord dans la cle **owner**

Lancer la commande `npm install` la premiere fois pour installer les dependances

Lancer la commande `node index.js` pour demarrer le bot

## Developpement

Afin d'apporter des changements au code, vous devez installer et utiliser nodemon pour faciliter le developpement.

### Avec Docker

Lancer le bot en daemon avec `docker-compose up -d` et entrer dans le conteneur avec la commande `docker exec -ti chess_bot sh`. Une fois dans le conteneur tapez `npm install nodemon` et finalement `exit` pour sortir du conteneur. Ouvrir le fichier **run.sh** et remplacer **node** par **nodemon**.

Une fois ces changements apportes, lancer le bot avec la commande `docker-compose up` pour avoir un retour sur la console.

Pour des retours d'erreur complets de la part du bot, passer la cle **debug** a *true* dans le fichier **config.json**

### Sans Docker

Taper la commande `npm install nodemon` (avec option **-g** si vous voulez le reutiliser dans d'autres projets sans avoir a le reinstaller) et lancer le bot avec `nodemon index.js`

Pour des retours d'erreur complets de la part du bot, passer la cle **debug** a *true* dans le fichier **config.json**
