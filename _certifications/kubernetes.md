---
category: Certification
title: "CKAD: Certified Kubernetes Application Developer"
company: The Linux Foundation
description: |
  La certification Certified Kubernetes Application Developer (CKAD) certifie que les utilisateurs peuvent concevoir, construire, configurer et exposer des applications cloud natives pour Kubernetes.
status: published
badgeUrl: /assets/images/badges/ckad-certified-kubernetes-application-developer.avif
certificationUrl: https://www.credly.com/badges/903f45bd-1cb5-4a2f-bbd2-67142a43c09c/public_url
layout: post
order: 20
---

<p align="center">
<img src="{{ page.badgeUrl }}" alt="{{ page.title }}" style="width: 100px;">
</p>

### Description
La certification Certified Kubernetes Application Developer (CKAD) a été developpée par la Linux Foundation et la Cloud Native Computing Foundation (CNCF) pour aider à étendre l'écosystème Kubernetes grâce à une formation et une certification standardisées. 

Le programme CKAD certifie que les utilisateurs peuvent concevoir, construire, configurer et exposer des applications cloud natives pour Kubernetes.

CKAD est une certification qui est composée de 19 problèmes pratiques et dure 2 heures. Le score minimum pour réussir est de 66%.

Pour plus d'info [https://www.cncf.io/certification/ckad/](https://www.cncf.io/certification/ckad/)

### Préparation
Pour passer cette certification il faut avoir une bonne expérience de Kubernetes. J'ai passé cette certification après avoir travaillé avec Kubernetes pendant 1 an.
La préparation m'a pris 3 mois d'entraiement intensif. 
J'ai passé beaucoup de temps à faire des exercices pratiques et à lire quelques magnifiques livres sur Kubernetes, par exemple: Kubernetes in Action de Marko Luksa.

Il faut:
- Très bien maitriser la commande **kubectl** et il faut connaitre pratiquement **TOUTES** les options de cette commande.
- Maitriser les **templates** les plus courants de Kubernetes. Surtout **Deployment**
- S'entrainer beaucoup avec les exercices pratiques. Par exemple, monter facilement les différents volumes.
- Avoir l'habitude d'utiliser **kubectl explain** pour trouver les informations sur les ressources Kubernetes.
- Travailler les points faibles tels que les **Network Policies**, **Ingress**, etc.

### Quelques conseils
- Vous pouvez avoir quelques exercises pratiques sur [https://killer.sh/](https://killer.sh/). C'est très utile pour s'entrainer.
- 3 jours avant l'examen vous avez le droit de passer un examen blanc. Ne le ratez pas et prenez le vraiment 3 jours avant, pour avoir le temps de travailler les points faibles les derniers jours qui restent. Cet examen blanc est plus compliqué que le réel! Je crois que j'ai apris plus de choses pendant cet examen blanc que pendant toute ma préparation!
- Utilisez **kubectl explain** pour trouver les informations sur les ressources Kubernetes. Même si vous avez le droit d'utiliser la doc pendant l'examen, il faut gagner du temps. Vous n'aurez pas le temps de chercher les informations dans la doc!
- Répondez à toutes les questions. Même si vous n'avez pas la réponse à une question vous pouvez gagner quelques points si vous répondez à une partie de la question.
Si vous n'êtes pas sûr de la réponse, mettez un commentaire et passez à la question suivante. Vous pouvez revenir à cette question plus tard. Attention, les questions sont pondérées différemment.
- Les questions les plus compliquées étaient sur les **Network Policies**. Il faut bien les travailler. Par exemple, il faut savoir comment créer une **Network Policy** pour autoriser les accès à un pod depuis un autre pod ou depuis un namespace. J'ai eu 2 problèmes à résoudre pourquoi les pods ne pouvaient pas communiquer entre eux. Et c'étaient bien les **Network Policies** en cause! Sur une question il y eu plusieurs raisons de dysfonctionnemen!

### Conclusion
C'est une certification très utile pour les développeurs qui travaillent avec Kubernetes. En pratique, les devéloppeurs règlent souvent des soucis différents des **ConfigMaps**, des **Secrets**, des **Volumes**, des **Network Policies**, des **Security Contexts**, etc. 

De toute façon, Kubernetes est le futur de l'infrastructure et il faut le maitriser.