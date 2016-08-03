# Réalisation d'une petite horloge

## Le but de cet exercice est de réaliser une petite horloge tournante (certes pas en temps réel !).

- Télécharger le fichier exo14vide.html.
- Ajouter un bouton à la fin du paragraphe. Ce bouton lance l'horloge en appelant la fonction tourne()
- Créer deux variables globales, compteur_minutes et compteur_heures, initialisées à 0.
- Identifier les éléments correspondant à chaque image.
Selon la valeur de compteur_minutes, changer ses propriétés de position :

quand le compteur vaut 0, attribuer à l'image aiguilleminute la position de l'élément chiffre1 ;
quand le compteur vaut 1, attribuer à l'image aiguilleminute la position de l'élément chiffre2 ;
quand le compteur vaut 2, attribuer à l'image aiguilleminute la position de l'élément chiffre3...
... ainsi de suite jusqu'à la valeur de compteur 11, auquel cas on attribue à l'image aiguilleminute la position de l'élément chiffre12.

- Incrémenter le compteur_minutes, et lui affecter le reste de sa division euclidienne par 12.
- Temporiser un appel à la fonction toutes les secondes (par un appel à la méthode window.setTimeout(nom_fonction, temps_en_millisecondes).
Il reste maintenant à faire tourner l'aiguille "des heures".

- Juste après avoir changé la valeur du compteur, tester si l'aiguille des minutes est en 12 (cela se fait par un test sur la valeur du compteur). Si cela est le cas, alors reprendre la même procédure que précédemment pour le déplacement de l'aiguille des minutes, mais cette fois-ci appliquée à celle des heures, en n'oublient pas d'incrémenter le compteur des heures.
Ajouter un bouton permettant d'arrêter l'horloge (on fera appel à un booléen).
