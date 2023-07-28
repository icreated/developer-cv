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

:fire: **Ce projet est en cours de développement actif (amélioration et qualité).** :boom:

Le projet WebStore est un starter kit pour créer un portail de commerce électronique basé sur Angular et Bootstrap côté Front. Initialement développé pour l'ERP iDempiere, il peut être connecté à n'importe quel backend.

L'idée du Projet WebStore est venue de la nécessité de remplacer le WebStore original d'iDempiere qui est devenu obsolète (Servlet/JSP).

Le choix de Bootstrap a été fait parce qu'il s'agit d'un portail destiné aux utilisateurs finaux, ce qui permet de mettre en place des templates de design rapidement et facilement.

## Fonctionnalités
* OpenApi en premier approche pour la communication avec le backend
* Authentification avec JWT (page Login)
* Responsive design
* Panier d'achat
* Checkout

## Sources
Les sources sont disponibles sur [https://github.com/icreated/webstore](https://github.com/icreated/webstore)

De temps en temps j'écris des articles dédiés à ce projet ici: [https://icreated.co/projects/webstore](https://icreated.co/projects/webstore)

# WebStore Backend
Le backend est un plugin OSGI pour l'ERP Idempiere. Il est basé sur Jersey Framework (JAX-RS).
Le choix de Jersey a été fait parce qu'il est facile à intégrer dans l'environnement OSGI d'Idempiere.

## Fonctionnalités
* OpenApi en premier approche pour la communication avec le frontend
* MapStruct pour mapper les modèles d'Idempiere avec les modèles OpenApi
* Authentification avec JWT

## Sources
Les sources sont disponibles sur [https://github.com/icreated/webstore-api](https://github.com/icreated/webstore-api)

De temps en temps j'écris des articles dédiés à ce projet ici: [https://icreated.co/projects/webstore-api/](https://icreated.co/projects/webstore-api/)

# Conclusions
Ce projet est un bon exemple de la façon dont les technologies modernes peuvent être intégrées dans un environnement plus ancien. 

Les sociétés qui utilisent ERP Idempiere peuvent utiliser ce projet comme un starter kit pour créer leur propre portail de commerce électronique.

A mon avis, une application "maison" c'est toujours mieux que les CMS comme Magento, Prestashop, etc. parce qu'elle est plus facile à maintenir et à personnaliser.