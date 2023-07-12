---
category: Certification
title: Spring professional
company: VMware
description: |
  Examen de certification Spring Professional de VMware confirme les connaissances et les compétences de base nécessaires pour développer des applications et des services Spring et Spring Boot.
status: published
badgeUrl: /assets/images/badges/vmware-spring-professional.png
certificationUrl: https://www.credly.com/badges/ff60dd0e-409a-4d54-88f9-cc284a59b9bb/public_url
layout: post
order: 10
---

<p align="center">
<img src="{{ page.badgeUrl }}" alt="{{ page.title }}" style="width: 100px;">
</p>

### Description
Cette epreuve est assez difficile et nécessite une bonne connaissance de Spring et Spring Boot. Elle couvre la plupart des sujets de Spring. Elle est composée de 50 questions à choix multiples et dure 90 minutes. Le score minimum pour réussir est de 76%.
Pour plus d'info [https://www.vmware.com/fr/learning/certification/spring-certified-pro.html](https://www.vmware.com/fr/learning/certification/spring-certified-pro.html)

### Préparation
Avant de passer l'examen j'ai eu une expérience de Spring dans les différents projets pendant plusieurs années.
Pour préparer l'examen:
* j'ai lu au moins 2 fois toute la doc de Spring. 
* J'ai passé une formation de chez Udemy.
* J'ai passé plusieurs examens blancs.
* J'ai lu plusieurs livres dont le livre "Spring in Action" de Craig Walls et "Pro Spring 5: An In-Depth Guide to the Spring Framework and Its Tools" de Iuliana Cosmina.

J'ai travaillé sur mes points faibles tels que:
- Spring Boot Actuator
- Spring Transaction
- Spring Autoconfiguration
- Spring testing

### Quelques conseils
Ces conseils sont basés sur mon épreuve. Je ne peux pas garantir que vous aurez les mêmes questions.

- Spring Core:
    * maitriser les cycles de vie des beans, l'ordre d'initialisation des beans
    * maitriser les scopes des beans et méta annotations (Regarder aussi tous les paramètres possibles des annotations)
    * comprendre la différence entre Jdk Dynamic Proxy et CGLIB
- AOP:
    * mmm, il faut tout maitriser, pratiquer beaucoup
- JDBC / Transactions:
    * maitriser **JdbcTemplate**. Connaitre les différences entre **RowMapper**, **ResultExtractor**, **PreparedCallback** etc.
    * maitriser **TransactionTemplate**, **TransactionManager** et **@Transactional**
    * connaitre les différences entre les types de propagation et les types d'isolation des transactions
    * trouver les informations sur les transactions globales JTA. J'en ai eu une question.
- Spring MVC:
    * les entrées et les sorties des contrôleurs. Bien les connaitre toutes!
- Spring Boot:
    * Ordre de chargement des fichiers de configuration
    * Différence entre **CommandLineRunner** et **ApplicationRunner**
    * Loggers
    * SPEL
- Autoconfiguration:
    * ordre des autoconfigurations
    * comment créer et désactiver les autoconfigurations
- Actuator:
    * maitriser les endpoints, surtout health et info
    * shutdown, changement de niveau de log
    * métriques, custom métriques
- Spring Tests:
    * Différence entre les tests unitaires et d'intégration
    * Différence entre **@MockBean** et **@Mock**
    * Différence entre **@WebMvcTest**, **@SpringBootTest**, **@DataJpaTest**, **@RestClientTest** et d'autres. Quand les utiliser?
    * **@DirtyContext**, **@TestPropertySource**, **@TestConfiguration**


### Conclusion
Les examens blancs que j'avais passé avant ne couvrent que la moitié des questions de l'examen réel. C'est bien util de les passer pour se préparer mais il faut aussi lire la doc de Spring et Spring Boot. Surtout travailler les points faibles.

J'espère que mon expérience vous aidera à réussir aussi. Bonne chance!





