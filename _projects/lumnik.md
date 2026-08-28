---
category: Projet
title: Lumnik
order: 5
description: |
  Vos données ne sont pas perdues, elles sont gelées — Lumnik les dégèle. Il lit les systèmes legacy (ERP, AS/400, exports CSV, API REST) sans jamais y écrire, fusionne les données dans un hub multi-tenant et les rend interrogeables en français, métier par métier, grâce à l'IA.
status: featured
layout: post
link: https://lumnik.fr
imageUrl: /assets/images/projects/lumnik.avif
imageWidth: 600
imageHeight: 300
---

<p align="center">
<img src="{{ page.imageUrl }}" alt="{{ page.title }}" width="{{ page.imageWidth }}" height="{{ page.imageHeight }}" />
</p>

# Lumnik — dégeler l'entreprise

Beaucoup d'entreprises vivent avec des données prisonnières de leurs vieux systèmes : un ERP vieillissant, un AS/400, des exports Excel qui circulent par mail. Les données sont là, mais plus personne ne peut leur poser une question.

Lumnik est ma réponse à ce problème : **le nom vient de `lum` (lumière) + le suffixe slave `-nik` (celui qui apporte)** — celui qui apporte la lumière dans l'ERP gelé.

## Comment ça marche

Trois briques qui coopèrent :

- **Le HUB** — des connecteurs (JDBC, CSV, REST) ingèrent les données legacy dans un hub multi-tenant. L'entrée est **en lecture seule** : on ingère d'abord, on ne risque rien.
- **Le RAG** — on interroge ses données en langage naturel : recherche sémantique (PostgreSQL + pgvector) et text-to-SQL exécuté en lecture seule sur le hub, le tout borné par des périmètres métier (un comptable ne voit que la compta).
- **`lm`** — la CLI/TUI de l'intégrateur (un binaire Go dans l'esprit de k9s) qui pilote connecteurs, ingestions et chat.

## Les choix dont je suis fier

- **Ne jamais écrire dans l'existant.** Le système source reste intact, c'est le contrat de départ.
- **L'abstention plutôt que le faux assuré.** Le chat préfère répondre « je ne sais pas » qu'inventer : une série de gardes vérifie chaque réponse avant qu'elle parte, y compris un second modèle qui joue le juge.
- **L'isolation par le SQL lui-même.** Multi-tenant par Row-Level Security PostgreSQL : même une requête générée par le LLM ne peut pas sortir de son tenant.
- **Testé de manière adversariale** : un harnais d'acceptation génératif (Gherkin + oracle) attaque la CLI avec des corpus de 500+ cas.

## Stack

Java 21 / Quarkus, PostgreSQL 16 + pgvector, Go pour la CLI, Kotlin pour les hooks de transformation, Keycloak pour l'identité. Déployable en une commande (Docker) ou sur Kubernetes (Helm).

## Liens

- Le site : [https://lumnik.fr](https://lumnik.fr)
- La documentation : [https://docs.lumnik.io](https://docs.lumnik.io)
- L'édition open source : [https://github.com/icreated/lumnik-open](https://github.com/icreated/lumnik-open)
