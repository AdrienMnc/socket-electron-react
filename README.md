# starting-electron-react

Naval Battle
Objectifs
[ ] Développer une application avec Electron
[ ] Utiliser React avec Electron
[ ] Utiliser Socket.io
Sujet
Dans cet atelier, vous allez développer l'application client d'un jeu de bataille navale en utilisant
Electron et React. Il s'agit d'un jeu multijoueurs en 1v1 via un serveur socket.io (WS et HTTP).
Votre application devra intéragir avec le serveur afin de permettre à l'utilisateur de jouer. Vous devrez
notamment écouter et émettre les évènements précisés ci-dessous mais aussi développer une
interface de jeu adaptée.
Phase 1 : Lobby et matchmaking
Evènements à écouter
Evènement Contenu Description
"lobby.enroll"
string (Message de
bienvenue)
Cet évènement est reçu dès votre connexion
"lobby.enroll.error"
string (Message
d'erreur)
Nom d'utilisateur invalide (< 3 caractères)
"lobby.enroll.success"
string (Nom
d'utilisateur validé)
Nom d'utilisateur valide
"lobby.user.joined"
string (Nom de
l'utilisateur)
Un utilisateur a rejoint le lobby (uniquement
recevable si vous avez validÉ un nom
d'utilisateur)
Evènement Contenu Description
"lobby.user.left"
string (Nom de
l'utilisateur)
Un utilisateur a quitté le lobby (uniquement
recevable si vous avez validÉ un nom
d'utilisateur)
"lobby.match.found"
string (Nom de
l'adversaire)
Match trouvé

# socket-electron-react
