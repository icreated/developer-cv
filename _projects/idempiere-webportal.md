---
category: Projet
title: WebPortal
order: 20
description: |
    Starter kit pour créer un portail web basé sur Angular et PrimeNG côté Front. Initialement développé pour l'ERP iDempiere, il peut être utilisé pour tout autre projet. Il est indépendant du backend et peut être facilement connecté à n'importe quel backend.
status: published
layout: post
link: https://icreated.co/projects/webportal
imageUrl: /assets/images/projects/idempiere-webportal.png
---

<p align="center">
<img src="{{ page.imageUrl }}" alt="{{ page.title }}" style="width: 500px;">
</p>

# Frontend WebPortal

Le projet WebPortal est un starter kit pour créer un portail web basé sur Angular et PrimeNG côté Front. Initialement développé pour l'ERP iDempiere, il peut être utilisé pour tout autre projet. Pour cette raison, il est indépendant du backend et peut être facilement connecté à n'importe quel backend.

Le choix de PrimeNG a été fait pour sa richesse en composants, sa communauté active et sa facilité. Donc, il est facile d'ajouter de nouveaux composants ou de les remplacer par d'autres.
Les pages sont minimalistes et peuvent être facilement personnalisées.

## Fonctionnalités
* OpenApi en premier approche pour la communication avec le backend
* Authentification avec JWT (page Login)
* Responsive design
* Internationalisation (français, anglais)
* Menu dockable
* Thèmes configurables
* Chargement dynamique des modules
* Choix de police (OpenDyslexic inclus)

## Sources
Les sources sont disponibles sur [https://github.com/icreated/portal-frontend](https://github.com/icreated/portal-frontend)

De temps en temps j'écris des articles dédiés à ce projet ici: [https://icreated.co/projects/webportal](https://icreated.co/projects/webportal)


# Backend WebPortal
Le backend est un plugin OSGI pour l'ERP Idempiere. Il est basé sur Spring Framework que j'ai integré dans l'environnement OSGI d'Idempiere.
Je l'ai fait pour voir si ça marche et honnêtement ça marche très bien. 

Même, j'ai été élu le [**développeur du mois de Mars 2023**](https://www.idempiere.org/2023/04/27/idempiere-hero-of-the-month-march-2023/) par la communauté Idempiere.

Le Spring Framework est très utilisé dans le monde de Java. Le design du plugin vite devient familier.

Pour déveloper les services il faut générer les modèles à partir du fichier openapi.yaml venant du frontend.

## Fonctionnalités
* OpenApi en premier approche pour la communication avec le frontend
* OpenApi validation avec Hibernate Validator
* Authentification avec JWT
* MapStruct pour mapper les modèles d'Idempiere avec les modèles OpenApi
* Error handling

## Sources
Les sources sont disponibles sur [https://github.com/icreated/portal-api](https://github.com/icreated/portal-api)

De temps en temps j'écris des articles dédiés à ce projet ici: [https://icreated.co/projects/webportal-api/](https://icreated.co/projects/webportal-api/)

## Conclusions
* Ces deux projets sont en cours de développement tranquille. Je les utilise pour apprendre et pour tester des idées. 
* J'essaie d'appliquer les bonnes pratiques et faire du code propre.
* J'essaie de les garder à jour avec les dernières versions des frameworks utilisés.
* Je suis ouvert à toutes les remarques, toute proposition d'amélioration ou de contribution.