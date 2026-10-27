# Cabinet Médical Dr. Alami & Associés — Site Web Médical & Prise de Rendez-vous

Site web professionnel, accessible et rassurant conçu pour un cabinet médical pluridisciplinaire (Cardiologie, Médecine Interne, Pédiatrie, Dermatologie et Échographie) situé à Casablanca Palmier, Maroc.

Repository GitHub : [https://github.com/Tariq-Abala/cabinet-medical](https://github.com/Tariq-Abala/cabinet-medical)

---

## Direction Artistique & Expérience Patient (Design Médical Lumineux)

- **Palette Lumineuse & Apaisante** :
  - Fonds principalement blancs et blanc-cassé médical (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`).
  - Accents bleu ciel clinique (`#0284C7`) et vert sarcelle apaisant (`#0D9488`).
  - Typographie soignée avec contraste accessible AA/AAA conforme WCAG (`#0F172A`, `#334155`, `#64748B`).
  - Suppression totale des thèmes sombres et effets agressifs au profit d'une sérénité visuelle conforme aux attentes des consultants de santé.
- **Photographies Réelles & Pertinentes** :
  - Espace d'accueil et salle d'attente baignée de lumière naturelle avec fauteuils bleu ciel et comptoir boisé.
  - Salles d'examen médicales, stéthoscopes, échographe Doppler et plateau technique de diagnostic.
  - Portraits sobres de praticiens de démonstration avec mention explicite de profil de simulation.
- **Éthique & Déontologie Médicale Marocaine** :
  - Aucune allégation médicale trompeuse, aucun faux avis médical ni diagnostic en ligne.
  - Bandeau d'orientation d'urgence SAMU 141 et SOS Médecins Casablanca.
  - Mention transparente de simulation de portfolio sur tous les formulaires.

---

## Pages & Navigation

1. **Accueil (`/`)** :
   - Présentation du cabinet, métriques de confiance, spécialités interactives, galerie du plateau diagnostique, formulaire de rendez-vous et partenaires mutuelles.
2. **Spécialités Médicales (`/specialites`)** :
   - Fiches détaillées : Cardiologie, Médecine Interne, Pédiatrie, Médecine Générale, Dermatologie, Échographie Doppler.
   - Liste des actes réalisés, durées moyennes et médecins référents.
3. **Équipe des Praticiens (`/equipe`)** :
   - Profils détaillés (Dr. Yassine Alami, Dr. Meryem Bennani, Dr. Othmane Berrada, Dr. Salma Tazi).
   - Diplômes universitaires (FMP Casablanca, FMP Rabat), jours de consultation et prise de rendez-vous directe.
4. **Demande de Rendez-vous (`/rendez-vous`)** :
   - Formulaire accessible avec validation des dates futures, sélection de la spécialité ou du médecin, motif de visite et mode de contact préféré (Téléphone, WhatsApp, Email).
   - Génération interactive d'un coupon récapitulatif `MED-XXXXX` avec notification de simulation et synchronisation WhatsApp facultative.
5. **Mutuelles & Prise en Charge (`/mutuelles`)** :
   - Guide pratique du remboursement au Maroc : CNSS / AMO, CNOPS, compagnies privées (Sanlam, Wafa Assurance, AXA, RMA).
   - Procédures, documents nécessaires (feuille de soins, quittance) et taux de couverture indicatifs.
6. **Le Cabinet (`/a-propos`)** :
   - Philosophie de consultation (écoute attentive, 30+ min par examen), protocoles d'hygiène et stérilisation, accessibilité PMR (rampe, ascenseur brancardable).
7. **Foire Aux Questions (`/faq`)** :
   - Accordéon interactif avec recherche en temps réel et filtres thématiques (Rendez-vous, Mutuelles, Examens, Urgences).
8. **Contact & Accès (`/contact`)** :
   - Adresse au Quartier Palmier Casablanca, transports (Tramway T1 Abdelmoumen), horaires, numéros d'urgence et formulaire de contact interactif.
9. **Mentions Légales (`/mentions-legales`)** :
   - Conformité à la Loi marocaine n° 131-13 sur l'exercice de la médecine, absence de télé-diagnostic et notice de démonstration portfolio.
10. **Politique de Confidentialité (`/confidentialite`)** :
    - Déclaration de conformité à la Loi 09-08 (CNDP) et engagement déontologique au secret médical (Art. 446 du Code pénal).

---

## Module de Rendez-vous & Sécurité des Données

- **Validation Stricte** :
  - Empêche la sélection de dates passées grâce à la contrainte HTML `min={today}` et vérification JavaScript.
  - Champs requis : Nom, téléphone, date, tranche horaire, spécialité.
- **Protection des Données de Santé** :
  - Dans le cadre de cette démonstration frontend, aucune donnée médicale confidentielle n'est transmise à un serveur non certifié ni stockée dans le `localStorage` du navigateur.
  - Affichage clair d'un badge "Démonstration Interactive".

---

## Feuille de Route pour Intégration Backend Réelle

Pour connecter ce site vitrine à un véritable système hospitalier ou cabinet en production :
1. **API Calendrier & Créneaux Réels** : Intégration d'un connecteur d'agenda médical (ex: agenda Doctolib, Med.ma ou API FHIR / HL7 propriétaire).
2. **Hébergement Agréé Données de Santé (HDS)** : Déploiement sur un serveur certifié pour l'hébergement de données de santé au Maroc conformément aux directives de la CNDP et du Ministère de la Santé.
3. **Passerelle SMS / WhatsApp Business API** : Envoi de rappels automatiques 24h avant la consultation via Twilio ou WhatsApp Cloud API.
4. **Espace Patient Sécurisé** : Authentification forte (2FA) pour le téléchargement sécurisé des comptes-rendus d'échographie et d'ECG.

---

## Installation & Démarrage Local

```bash
# 1. Cloner le projet
git clone https://github.com/Tariq-Abala/cabinet-medical.git
cd cabinet-medical

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Compiler pour la production
npm run build
npm run start
```

---

## Développé par

**Tariq Abala**  
Site web : [https://tariqabala.com](https://tariqabala.com)  
*Web Development & Digital Solutions*  
*Professional Websites • Business Applications • Custom Admin Panels*  

© 2026 TARIQ ABALA. Tous droits réservés. • Cabinet Médical Dr. Alami
