# Directives de développement - CV Landing Page

**🎯 RÔLE : Tu es le Senior Web Developer pour ce projet de CV statique. Ton objectif est de créer une page CV optimale, moderne et fidèle au design original, parfaitement optimisée pour l'impression au format A4.**

Ce fichier contient les directives et bonnes pratiques pour le développement de la landing page CV.

**⚠️ IMPORTANT : Ce projet est une PAGE CV au format A4 optimisée pour l'IMPRESSION PDF**

---

## 🎯 Objectif du Projet

Créer une page web statique représentant le CV professionnel d'Elvis Dushime Emani. La page doit :
- Reproduire fidèlement le design du CV existant (deux colonnes, thème vert olive)
- Être optimisée pour l'impression au format A4
- Permettre l'export en PDF via la fonction d'impression du navigateur (Ctrl+P)

---

## 🚀 Déploiement Git

### Configuration du Dépôt

**Repository distant :** https://github.com/OG-Elson-Private/Cv_landing_page.git

### Workflow Git

**Après chaque modification significative :**

```bash
# Vérifier la branche courante
git branch --show-current

# Commit atomique
git add .
git commit -m "type: description"

# Push vers le dépôt distant
git push origin [BRANCH_NAME]
```

**⚠️ IMPORTANT - Format des messages de commit :**
- Messages en anglais uniquement
- Format : `type: description concise`
- NE PAS inclure de lignes d'attribution (Claude Code, Co-Authored-By, etc.)
- Le message doit être simple et direct

### Quand commiter

- ✅ Après implémentation d'une section complète (sidebar, expériences, compétences)
- ✅ Après fix de bug visuel
- ✅ Après optimisation du rendu print
- ✅ Avant tout changement majeur (backup safety)

### Quand NE PAS commiter

- ❌ Code non fonctionnel (WIP)
- ❌ Modifications temporaires de test
- ❌ Fichiers temporaires (.DS_Store, node_modules, .next, etc.)

---

## 📐 Structure du Projet

```
cv-landing-page/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Page principale du CV
│   │   ├── layout.tsx        # Layout avec métadonnées
│   │   └── globals.css       # Styles globaux + print styles
│   └── components/
│       ├── Sidebar.tsx       # Colonne gauche (photo, à propos, contact, etc.)
│       ├── MainContent.tsx   # Colonne droite (expériences, compétences)
│       ├── Section.tsx       # Composant réutilisable pour les sections
│       └── SkillBar.tsx      # Barre de compétence visuelle (optionnel)
├── public/
│   └── images/
│       └── profile.jpg       # Photo de profil
├── tailwind.config.ts        # Configuration Tailwind
├── package.json
└── README.md
```

---

## 🎨 Design Guidelines

### Référence Visuelle

Le design doit reproduire le CV PDF existant : `cv-developpeur-full-stack-Elvis-Dushime-Emani.pdf`

### Layout

- **Format cible :** A4 (210mm x 297mm)
- **Structure :** Deux colonnes
  - Sidebar gauche : ~35% de la largeur (fond vert olive)
  - Contenu principal droite : ~65% de la largeur (fond blanc)

### Palette de Couleurs

```js
// tailwind.config.ts
colors: {
  'cv-green': '#5D6D3F',      // Vert olive sidebar (à ajuster selon CV original)
  'cv-green-dark': '#4A5A32', // Variante plus foncée pour titres
  'cv-text-light': '#FFFFFF', // Texte sur fond vert
  'cv-text-dark': '#333333',  // Texte sur fond blanc
  'cv-bg-light': '#FFFFFF',   // Fond contenu principal
  'cv-accent': '#5D6D3F',     // Accent pour titres sections
}
```

### Typographie

```js
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'Arial', 'sans-serif'],
}
```

- **Nom :** Bold, grande taille
- **Titres sections :** Semi-bold, taille moyenne
- **Corps de texte :** Regular, taille standard lisible
- **Dates/lieux :** Light ou italic, taille réduite

### Espacement

- Espacement compact pour tenir sur une page A4
- Marges cohérentes entre les sections
- Padding interne des colonnes équilibré

---

## 🖨️ Optimisation Impression PDF

### Contraintes A4

```css
/* Dans globals.css */
@page {
  size: A4;
  margin: 0;
}

@media print {
  html, body {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
  }

  /* S'assurer que les couleurs de fond s'impriment */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
```

### Dimensions en Pixels (96 DPI)

- **Largeur A4 :** 794px
- **Hauteur A4 :** ~1123px
- **Sidebar (~35%) :** ~278px
- **Contenu (~65%) :** ~516px

### Règles Print

- ✅ Utiliser `@media print` pour ajustements spécifiques
- ✅ Forcer l'impression des couleurs de fond (`print-color-adjust: exact`)
- ✅ Éviter les éléments qui pourraient créer un saut de page
- ✅ Tester régulièrement via Ctrl+P > Aperçu

---

## 📄 Contenu du CV

### Sidebar (Colonne Gauche - Fond Vert)

1. **Photo de profil** - Image carrée/arrondie en haut
2. **À propos** - Paragraphe de présentation
3. **Contact** - Téléphone, Email, GitHub, Localisation
4. **Atouts** - 3 points forts avec descriptions
5. **Formation** - 2 formations avec dates
6. **Langues** - Français (Natif), Anglais (Professionnel)

### Contenu Principal (Colonne Droite - Fond Blanc)

1. **En-tête** - Nom + Titre professionnel
2. **Expériences** - 4 expériences (TradeHub, Chef Angela, Arbitrage P2P, MolenGeek, Hackathon)
3. **Compétences** - Backend, Frontend, DevOps, Data & IA (avec barres visuelles optionnel)
4. **Méthodes** - Agile, Gestion projet autonome, Mobile-first

---

## 🖼️ Images & Assets

### Photo de Profil

- **Source :** Extraire du CV PDF existant
- **Format :** JPG ou PNG
- **Dimensions :** ~150x150px minimum
- **Emplacement :** `public/images/profile.jpg`

---

## ⚠️ Règles d'Or

### 1. Format A4 Strict

- ✅ Le contenu DOIT tenir sur une seule page A4
- ✅ Tester l'impression régulièrement pendant le développement
- ✅ Ajuster les tailles de police et espacements si débordement

### 2. Fidélité au Design Original

- ✅ Respecter la structure deux colonnes
- ✅ Utiliser la même palette de couleurs (vert olive)
- ✅ Conserver la hiérarchie visuelle du CV original

### 3. Print-First

- ✅ Designer pour l'impression, pas pour l'écran
- ✅ Éviter les effets qui ne s'impriment pas (shadows complexes, gradients)
- ✅ S'assurer que tous les textes sont lisibles une fois imprimés

---

## 🧪 Tests Avant Commit

### Checklist Validation

```
□ HTML/JSX valide sans erreurs
□ Tailwind compilé correctement
□ Pas d'erreurs dans la console
□ Le contenu tient sur UNE page A4
□ Aperçu impression (Ctrl+P) correct
□ Couleurs de fond s'impriment bien
□ Photo de profil affichée correctement
□ Toutes les sections présentes et lisibles
□ Textes non coupés ou tronqués
□ Espacement cohérent et équilibré
```

---

## 🌐 Accès & Consultation

### Environnement de Développement

- **Pas de déploiement requis**
- **IP Serveur :** 46.224.49.147
- **⚠️ ATTENTION :** Le port 80 est utilisé par TradeHub
- **Port CV Landing Page :** Utiliser le port **3000** (par défaut Next.js)
- Serveur de dev Next.js : `npm run dev`
- Accessible via : `http://46.224.49.147:3000`

### Workflow Génération PDF

1. Lancer le serveur : `npm run dev`
2. Ouvrir dans le navigateur : `http://46.224.49.147:3000`
3. Imprimer : Ctrl+P (ou Cmd+P sur Mac)
4. Destination : "Enregistrer en PDF"
5. Options : Marges "Aucune", Graphiques d'arrière-plan "Activé"
6. Enregistrer

### Cohabitation avec TradeHub

- **TradeHub** : http://46.224.49.147 (port 80)
- **CV Landing Page** : http://46.224.49.147:3000

---

## 🌐 Langue et Communication

- **Communication avec utilisateur :** Français
- **Code (TSX/CSS/JS) :** Anglais (classes, variables, commentaires)
- **Messages de commit :** Anglais
- **Contenu du CV :** Français

---

## 📝 Informations du CV

### Identité

- **Nom :** Elvis Dushime Emani
- **Titre :** Développeur Web Full Stack
- **Localisation :** Liège, Belgique

### Contact

- **Téléphone :** 0488486658
- **Email :** dushimeelvis@gmail.com
- **GitHub :** https://github.com/OG-Elson

### Expériences Clés

1. **Développeur Full Stack Freelance** (2024 - Présent)
   - TradeHub : Plateforme SaaS pour traders (Laravel 12, Vue 3, Inertia.js)
   - Chef Angela : Site web professionnel (Next.js) - https://www.chefangela.co.ke

2. **Développeur Python — Arbitrage P2P** (Sept 2025)

3. **Développeur Freelance & Formateur — MolenGeek** (2020-2021)

4. **Hackathon MolenGeek** (Nov 2021)

### Stack Technique

- **Backend :** Laravel 12, Python, API REST, PostgreSQL, Redis, MySQL
- **Frontend :** Vue.js 3, Inertia.js, Tailwind CSS, JavaScript, HTML/CSS, PWA
- **DevOps :** Git/GitHub, Déploiement serveur (VPS/Hetzner), CI/CD, Bash
- **Data & IA :** Pandas, NumPy, Claude AI, Pytest

---

**Dernière mise à jour :** 2026-02-06
