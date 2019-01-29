# chess_bot
Bot lie a l'application Discord permettant de jouer aux echecs avec un ami.

## Prerequis

### Discord
Vous devez disposer d'un compte developpeur Discord et d'un bot avec son token. Le token sera utilise pour associer le bot a votre serveur.

Afin de creer une application ainsi qu'un bot pour obtenir votre token, suivez les quelques instructions disponibles ici: 
https://discordjs.guide/preparations/setting-up-a-bot-application.html

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
Si vous le pouvez, creez une variable d'environnement **APP_TOKEN** contenant le token du bot et une variable **APP_OWNER** contenant votre identifiant Discord...

#### Creer les variables d'environnement

##### Systemes Unix
Taper les commandes suivantes dans la console:

```sh
export APP_TOKEN="METTRE VOTRE TOKEN DISCORD ICI"
export APP_OWNER="METTRE VOTRE IDENTIFIANT DISCORD ICI"
```

Afin de garder ces variables de maniere permanente, ajoutez ces commandes dans votre fichier `~/.profile` ou `~/.bash_proflle`

##### Systemes Windows
Suivez les instructions de l'un des guides suivants:

http://megastuces.com/creer-variables-environnement-utilisateur-systeme-windows/

https://www.developper-jeux-video.com/configurer-variables-environnement-windows-10/

https://helpdeskgeek.com/how-to/create-custom-environment-variables-in-windows/

... Dans le cas contraire, mettre le token dans la cle **token** du fichier **config.json** ainsi que votre identifiant Discord dans la cle **owner**.

#### Exemple de config.json
```json
{
    "debug": false,
    "token": "LE TOKEN DU BOT DISCORD VIENT ICI",
    "client": {
        "commandPrefix": "?",
        "owner": "VOTRE IDENTIFIANT DISCORD VIENT ICI",
        "invite": "https://discord.gg/bRCvFy9"
    },
    "groups": [
        ["test", "Commandes de test"]
    ]
}
```

Une fois le token et l'identifiant defini, lancer la commande `npm install` (uniquement la premiere fois) pour installer les dependances. Apres quoi, lancer la commande `node index.js` pour demarrer le bot.

## Developpement

Afin d'apporter des changements au code, vous devez installer et utiliser nodemon pour faciliter le developpement.

### Avec Docker

Avec le bot lance en daemon avec `docker-compose up -d`, entrer en mode interactif dans le conteneur avec la commande `docker exec -ti chess_bot sh`. Une fois dans le conteneur tapez `npm install nodemon` et finalement `exit` pour sortir du conteneur. Ouvrir le fichier **run.sh** et remplacer **node** par **nodemon**.

Une fois ces changements apportes taper `docker restart chess_bot` pour relancer le bot avec le support de nodemon.

Pour des retours d'erreur complets de la part du bot, passer la cle **debug** a *true* dans le fichier **config.json** et lancer la commande suivante: `docker logs -f --tail --timestamps chess_bot`

#### Exemple de config.json
```json
{
    "debug": true,
    "token": "LE TOKEN DU BOT DISCORD VIENT ICI",
    "client": {
        "commandPrefix": "?",
        "owner": "VOTRE IDENTIFIANT DISCORD VIENT ICI",
        "invite": "https://discord.gg/bRCvFy9"
    },
    "groups": [
        ["test", "Commandes de test"]
    ]
}
```

### Sans Docker

Taper la commande `npm install nodemon` (avec option **-g** si vous voulez le reutiliser dans d'autres projets sans avoir a le reinstaller) et lancer le bot avec `nodemon index.js`

Pour des retours d'erreur complets de la part du bot, passer la cle **debug** a *true* dans le fichier **config.json**
