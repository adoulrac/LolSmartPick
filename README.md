LolSmartPick
============

API12 Project

Installer Node.js   http://nodejs.org/

Disponible dans les source et donc useless:
Télécharger Angular.js https://angularjs.org/  (prendre la dernière version en minimale)
Télécharger Angular-touch.js https://code.angularjs.org/1.2.26/angular-touch.min.js

Installer cordova   npm install -g cordova

Pour build une appli android : 
http://cordova.apache.org/docs/en/4.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide
 
Télécharger le sdk Android voulu et l’ajouter au classpath
Télécharger Ant et l’ajouter au classpath http://ant.apache.org/bindownload.cgi
Pour ces deux étapes, pour mac, à ajouter dans .bash_profile 
Exemple : 
export PATH=${PATH}:/adhoc/Software/adt-bundle-mac-x86_64-20140702/sdk/tools
export PATH=${PATH}:/adhoc/Software/apache-ant-1.9.4/bin

Création de l’application cordova : 
Créer un dossier source pour le projet
Avec l’invite de commande, faite 
cordova create nomDuDossier com.application.lolsmartpick "Nom du projet"
Allez dans le dossier créé (/nomDuDossier)
On ajoute ensuite la compatibilité android : 
cordova platform add android
Allez ensuite dans le dossier /nomDuDossier/www et ajoutez les sources dispinibles sur dropbox
Modifiez le fichier /nomDuDossier/config.xml à la ligne 10
<content src="accueil.html" />    remplacez accueil.html par la page d’accueil voulue
Revenez au dossier source (/nomDuDossier) et faites la commande suivante : 
cordova build android

Importer le projet sur Eclipse : 
Ouvrez Eclipse
New -> Project -> Other -> Android project from existing sources


Pour build une appli iOS
je sais pascl

