---
category: Projet
title: WebStore
order: 10
description: |
    Le projet WebStore est un starter kit pour créer un portail de commerce électronique basé sur Angular et Bootstrap côté Front. Initialement développé pour l'ERP iDempiere pour remplacer le WebStore original qui est devenu obsolète (Servlet/JSP). Il peut être connecté à n'importe quel backend.
status: featured
layout: post
link: https://webstore.icreated.co
imageUrl: /assets/images/projects/idempiere-webstore.avif
---

<p align="center">
<img src="{{ page.imageUrl }}" alt="{{ page.title }}" style="width: 600px;">
</p>

# WebStore Frontend

Le projet WebStore est un starter kit pour créer un portail de commerce électronique basé sur Angular et Bootstrap côté Front. Initialement développé pour l'ERP iDempiere, il peut être connecté à n'importe quel backend.

L'idée du Projet WebStore est venue de la nécessité de remplacer le WebStore original d'iDempiere qui est devenu obsolète (Servlet/JSP).
J'utilise ce projet pour tester les nouvelles technologies et les nouvelles approches de développement.

>Par exemple, la migration en Angular 16 m'a permis d'apprendre et d'intégrer les Signaux pour la communication entre les composants. Cette feature a simplifié le code et a rendu le projet plus facile à maintenir.

Le choix de Bootstrap a été fait parce qu'il s'agit d'un portail destiné aux utilisateurs finaux, ce qui permet de mettre en place des templates de design rapidement et facilement.

## Fonctionnalités
* OpenApi en premier approche pour la communication avec le backend
* Authentification avec JWT (page Login)
* Responsive design
* Panier d'achat
* Checkout

## Démo
Une démo est disponible sur [https://webstore.icreated.co](https://webstore.icreated.co) avec les données fictives.

## WebStore Backend
Pour le backend il y a pour l'instant deux options:
* Très simple Json Server avec des données fictives: [https://github.com/icreated/webstore-json-server](https://github.com/icreated/webstore-json-server)
* Backend ERP Idempiere
Le backend est un plugin OSGI pour l'ERP Idempiere. Il est basé sur Jersey Framework (JAX-RS).
Le choix de Jersey a été fait parce qu'il est facile à intégrer dans l'environnement OSGI d'Idempiere.
Le plugin est disponible sur [https://github.com/icreated/webstore-api](https://github.com/icreated/webstore-api)
Pour utiliser le plugin, il faut installer l'ERP Idempiere et le plugin dans le même serveur. C'est assez fastidieux, mais c'est la seule façon de le faire fonctionner.

## Sources
Les sources sont disponibles sur [https://github.com/icreated/webstore](https://github.com/icreated/webstore)

De temps en temps j'écris des articles dédiés à ce projet ici: [https://icreated.co/projects/webstore/](https://icreated.co/projects/webstore/)

## Conclusions
* Ce projet peut servir pour apprendre Angular et Bootstrap sur un cas concret.
* Il peut être utilisé comme starter kit pour créer un portail de commerce électronique. Il peut être connecté à n'importe quel backend.

A mon avis, une application "maison" c'est toujours mieux que les CMS comme Magento, Prestashop, etc. parce qu'elle est plus facile à maintenir et à personnaliser.