# Cabinet Médical Dr. Alami — Centre de Soins & Prise de Rendez-vous

Application web médicale pour un cabinet pluridisciplinaire (Cardiologie, Médecine Interne, Pédiatrie) à Casablanca.

## Présentation du Projet
Ce site web médical permet aux patients d'accéder aux informations du cabinet, de découvrir les spécialités médicales et les actes diagnostiques réalisés sur place (ECG, Holter, échographie Doppler), de consulter les diplômes des médecins et de prendre rendez-vous en ligne en 3 étapes avec rappel des pièces justificatives (CNSS, CNOPS, mutuelles).

### Fonctionnalités Clés
- **Design Médical Moderne & Rassurant** : Palette bleu marine clinique (`#07101C`), accents cyan (`#0EA5E9`) et vert émeraude, conforme aux exigences de lisibilité et de sérieux médical.
- **Présentation Détaillée des Spécialités** : Détail des actes réalisés, durée moyenne de consultation et profil des médecins traitants.
- **Module de Prise de Rendez-vous Médical** : Sélection du praticien, motif de consultation (première visite, suivi, bilan), type d'assurance (CNSS / AMO, CNOPS, assurances privées) et date/heure avec génération de référence patient (`MED-XXXXX`).
- **Prise en Charge Mutuelle & Téléphone d'Urgence** : Affichage transparent des organismes conventionnés et bouton d'appel d'urgence médical.

## Technologies Utilisées
- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **UI & Rendu** : [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)

---

## Installation & Démarrage Local

### Prérequis
- Node.js version 18.18+ ou 20+
- npm version 9+

### 1. Installation des Dépendances
```bash
npm install
```

### 2. Démarrer le Serveur Local
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compiler pour la Production
```bash
npm run build
```

### 4. Lancer la Version Compilée
```bash
npm run start
```

---

## Déploiement Indépendant

### Option A : Dépôt GitHub Séparé (Recommandé)

1. Initialisez un nouveau dépôt Git dans ce dossier :
   ```bash
   cd cabinet-medical
   git init
   git add .
   git commit -m "feat: initial commit of Cabinet Medical project"
   ```
2. Créez un nouveau dépôt public ou privé sur GitHub nommé `cabinet-medical` :
   ```bash
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/cabinet-medical.git
   git branch -M main
   git push -u origin main
   ```
3. Connectez-vous sur [Vercel](https://vercel.com/) :
   - Cliquez sur **Add New...** > **Project**
   - Importez le dépôt `cabinet-medical`
   - Le framework Next.js est automatiquement détecté
   - Cliquez sur **Deploy**

### Option B : Déploiement Monorepo (depuis le dossier racine)
Si vous conservez tous les projets dans un seul dépôt :
- Sur Vercel, définissez **Root Directory** sur `cabinet-medical`.
- Les scripts de build et d'installation fonctionneront automatiquement.

---

## Variables d'Environnement
Ce projet ne requiert aucune variable d'environnement obligatoire pour fonctionner.

Variables optionnelles :
- `NEXT_PUBLIC_SECRETARIAT_PHONE` (Optionnel) : Numéro d'appel du secrétariat.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (Optionnel) : Numéro WhatsApp pour les confirmations.

---

## Auteur
Projet conçu et développé dans le cadre du portfolio de solutions web par **Tariq Abala**.
