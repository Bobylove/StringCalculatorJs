# StringCalculatorJs

Base de départ pour implémenter StringCalculator en mode TDD seul ou à plusieurs

## Rappels

Le but est d'afficher dans la console le résultat numérique d'une opération décrite sous forme de chaîne de caractères :

- null => 0
- "" => 0
- "0" => 0
- "1" => 1
- "1+2" => 3
- "bloublou" => 8

## Infrastructure technique

La base de départ s'appuie sur node / npm / jasmine. Elle a donc pour prérequis l'installation de node / npm.

- Pour initialiser le projet en local, appeler *npm install* à la racine du projet.
- Pour lancer les tests, appeler *npm test* à la racine du projet
- Pour exécuter le programme, appeler *npm start* à la racine du projet complété par la chaîne de caractères à évaluer.
