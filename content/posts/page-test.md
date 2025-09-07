+++
date = '2025-09-07T23:30:00+02:00'
draft = false
title = "Page de test"
categories = ["Tests"]
tags = ["test", "fonctionnalites", "verification"]
mood = "neutral"
summary = "Une page pour tester toutes les fonctionnalités du thème"
+++

# Page de test du thème

Cette page permet de tester toutes les fonctionnalités du thème journal-intime.

## Test du mode sombre

Cliquez sur le bouton 🌙 en haut à droite pour basculer entre mode jour et mode nuit.

## Test des humeurs

Cette entrée a une humeur `neutral`. Vous devriez voir un petit cercle gris à côté de la date.

## Test du contenu

Voici différents éléments de contenu :

### Texte normal

Ceci est un paragraphe normal avec du **texte gras** et du *texte italique*. Aucun effet de transition ne devrait apparaître au survol.

### Listes

- Premier élément de liste
- Deuxième élément avec [un lien](/) 
- Troisième élément

### Citations

> Ceci est une citation pour tester le rendu des blockquotes dans le thème.

### Code

```
Code en bloc pour tester
le rendu monospace
```

## Test de navigation

Les liens suivants permettent de tester la navigation :

- [Retour à l'accueil](/)
- [Lien vers une autre entrée](/posts/premiere-entree/)

## Test des transitions

Ce paragraphe teste qu'aucune transition `0.3s` ne s'affiche plus, même avec du HTML inline ajouté par Hugo.

**Résultat attendu :** Aucun effet visuel au survol, navigation instantanée en mode sombre, icône d'humeur visible.