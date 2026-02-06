# User Stories - CV Landing Page Elvis Dushime Emani

## Epic 1 : Configuration du Projet

### Story 1.1 : Initialisation Next.js
**En tant que** développeur
**Je veux** initialiser un projet Next.js avec TypeScript et Tailwind CSS
**Afin de** disposer de la base technique pour développer le CV

**Critères d'acceptation :**
- [ ] Projet Next.js 16+ créé avec App Router
- [ ] TypeScript configuré
- [ ] Tailwind CSS installé et configuré
- [ ] Structure des dossiers conforme au PRD (src/app, src/components, public/images)
- [ ] Palette de couleurs CV définie dans tailwind.config.ts

---

### Story 1.2 : Configuration des styles d'impression
**En tant que** utilisateur
**Je veux** que la page soit optimisée pour l'impression A4
**Afin de** pouvoir exporter mon CV en PDF proprement

**Critères d'acceptation :**
- [ ] @page configuré pour format A4 sans marges
- [ ] @media print avec dimensions exactes (210mm x 297mm)
- [ ] print-color-adjust: exact pour les couleurs de fond
- [ ] Test d'impression validé (Ctrl+P)

---

## Epic 2 : Assets & Ressources

### Story 2.1 : Extraction de la photo de profil
**En tant que** développeur
**Je veux** extraire la photo de profil du CV PDF
**Afin de** l'intégrer dans la sidebar du CV web

**Critères d'acceptation :**
- [ ] Photo extraite du fichier `ressources/cv-developpeur-full-stack-Elvis-Dushime-Emani.pdf`
- [ ] Image sauvegardée en format JPG ou PNG
- [ ] Dimensions minimales : 150x150px
- [ ] Image placée dans `public/images/profile.jpg`
- [ ] Qualité suffisante pour l'impression

**Notes techniques :**
- Utiliser pdfimages, pdftoppm ou autre outil d'extraction PDF
- Vérifier la qualité de l'image extraite

---

## Epic 3 : Composants Sidebar (Colonne Gauche)

### Story 3.1 : Composant Sidebar - Structure
**En tant que** utilisateur
**Je veux** voir une sidebar avec fond vert olive
**Afin de** avoir un design fidèle au CV original

**Critères d'acceptation :**
- [ ] Sidebar avec largeur ~35% (278px sur 794px)
- [ ] Fond couleur vert olive (#5D6D3F ou ajusté selon PDF)
- [ ] Texte en blanc
- [ ] Hauteur 100% de la page A4

---

### Story 3.2 : Section Photo de profil
**En tant que** utilisateur
**Je veux** voir ma photo de profil en haut de la sidebar
**Afin de** personnaliser mon CV

**Critères d'acceptation :**
- [ ] Photo affichée en haut de la sidebar
- [ ] Format carré ou légèrement arrondi
- [ ] Taille appropriée (~120-150px)
- [ ] Centré horizontalement

---

### Story 3.3 : Section À propos
**En tant que** recruteur
**Je veux** lire un résumé du profil du candidat
**Afin de** comprendre rapidement son expertise

**Critères d'acceptation :**
- [ ] Titre "À propos" visible
- [ ] Texte de présentation complet
- [ ] Police lisible, taille adaptée
- [ ] Espacement cohérent

**Contenu :**
```
Développeur Full Stack passionné avec une expertise en Laravel, Vue.js et Python.
Je conçois et développe des applications web complètes, du MVP à la production.
Mon domaine de prédilection : les applications de trading et dashboards d'analyse,
mais je suis à l'aise sur tout type de projet web.
Rigoureux, autonome et curieux, je me forme continuellement aux nouvelles technologies.
```

---

### Story 3.4 : Section Contact
**En tant que** recruteur
**Je veux** voir les informations de contact
**Afin de** pouvoir contacter le candidat

**Critères d'acceptation :**
- [ ] Icônes pour chaque type de contact (téléphone, email, GitHub, localisation)
- [ ] Informations lisibles et cliquables (liens)
- [ ] Espacement cohérent entre les éléments

**Contenu :**
- Téléphone : 0488486658
- Email : dushimeelvis@gmail.com
- GitHub : https://github.com/OG-Elson
- Localisation : Liège, Belgique

---

### Story 3.5 : Section Atouts
**En tant que** recruteur
**Je veux** voir les points forts du candidat
**Afin de** évaluer ses soft skills

**Critères d'acceptation :**
- [ ] Titre "Atouts" visible
- [ ] 3 atouts avec titre en gras et description
- [ ] Mise en forme claire et lisible

**Contenu :**
1. **Exigeant et travailleur** : Je donne le meilleur de moi-même lorsqu'on me confie une tâche et je mets tout en œuvre pour aller jusqu'au bout.
2. **Autonomie et initiative** : Capacité à gérer des projets de A à Z en totale autonomie, comme démontré avec TradeHub.
3. **Expertise Trading** : Trader actif, je comprends les besoins métier des applications financières.

---

### Story 3.6 : Section Formation
**En tant que** recruteur
**Je veux** voir le parcours de formation
**Afin de** évaluer les qualifications académiques

**Critères d'acceptation :**
- [ ] Titre "Formation" visible
- [ ] 2 formations avec nom, établissement, dates
- [ ] Description courte pour chaque formation
- [ ] Ordre chronologique inversé (plus récent en premier)

**Contenu :**
1. **Web Development Front-end & Back-end — MolenGeek** (Mars 2021 - Février 2022)
2. **HE2B-ESI — École Supérieure d'Informatique** (Septembre 2017 - Juin 2019)

---

### Story 3.7 : Section Langues
**En tant que** recruteur
**Je veux** voir les compétences linguistiques
**Afin de** évaluer les capacités de communication

**Critères d'acceptation :**
- [ ] Titre "Langues" visible
- [ ] Français : Natif
- [ ] Anglais : Professionnel complet
- [ ] Indication visuelle du niveau (texte ou barre)

---

## Epic 4 : Composants Contenu Principal (Colonne Droite)

### Story 4.1 : En-tête avec nom et titre
**En tant que** recruteur
**Je veux** voir clairement le nom et le titre professionnel
**Afin de** identifier immédiatement le candidat

**Critères d'acceptation :**
- [ ] Nom "Dushime Emani Elvis" en grand et gras
- [ ] Titre "Développeur Web Full Stack" en dessous
- [ ] Couleur accent vert olive pour le titre ou le nom
- [ ] Espacement approprié avec le reste du contenu

---

### Story 4.2 : Section Expériences professionnelles
**En tant que** recruteur
**Je veux** voir le parcours professionnel détaillé
**Afin de** évaluer l'expérience du candidat

**Critères d'acceptation :**
- [ ] Titre "Expériences" visible avec accent vert
- [ ] 4 expériences listées avec :
  - Titre du poste en gras
  - Période et lieu
  - Liste à puces des réalisations
- [ ] Ordre chronologique inversé

**Contenu :**
1. Développeur Full Stack Freelance (2024 - Présent) - Remote
2. Développeur Python — Projet Arbitrage P2P (Septembre 2025) - Liège
3. Développeur Freelance & Formateur — MolenGeek (Janvier 2020 - Janvier 2021) - Bruxelles
4. Hackathon MolenGeek (Novembre 2021) - Anvers

---

### Story 4.3 : Section Compétences techniques
**En tant que** recruteur
**Je veux** voir les compétences techniques organisées par catégorie
**Afin de** évaluer le stack technique

**Critères d'acceptation :**
- [ ] Titre "Compétences" visible
- [ ] 4 catégories : Backend, Frontend, DevOps & Outils, Data & IA
- [ ] Compétences listées sous forme de tags ou liste
- [ ] Mise en forme compacte pour tenir sur la page

**Contenu :**
- **Backend :** Laravel 12, Python, API REST, PostgreSQL, Redis, MySQL
- **Frontend :** Vue.js 3, Inertia.js, Tailwind CSS, JavaScript, HTML & CSS, PWA
- **DevOps & Outils :** Git/GitHub, Déploiement serveur (VPS/Hetzner), CI/CD basique, Bash
- **Data & IA :** Pandas, NumPy, Intégration Claude AI, Pytest

---

### Story 4.4 : Section Méthodes
**En tant que** recruteur
**Je veux** voir les méthodologies de travail
**Afin de** évaluer l'approche professionnelle

**Critères d'acceptation :**
- [ ] Titre "Méthodes" visible
- [ ] Liste des méthodes utilisées
- [ ] Format compact (tags ou inline)

**Contenu :**
- Méthode Agile
- Gestion de projet autonome
- Mobile-first development

---

## Epic 5 : Intégration & Validation

### Story 5.1 : Assemblage page complète
**En tant que** développeur
**Je veux** assembler tous les composants
**Afin de** avoir une page CV complète

**Critères d'acceptation :**
- [ ] Layout deux colonnes fonctionnel
- [ ] Tous les composants intégrés
- [ ] Pas d'erreurs console
- [ ] Rendu conforme au design original

---

### Story 5.2 : Validation format A4
**En tant que** utilisateur
**Je veux** que le CV tienne sur une page A4
**Afin de** pouvoir l'imprimer correctement

**Critères d'acceptation :**
- [ ] Contenu tient sur exactement UNE page
- [ ] Pas de débordement ou coupure
- [ ] Aperçu impression (Ctrl+P) validé
- [ ] Export PDF propre

---

### Story 5.3 : Validation couleurs impression
**En tant que** utilisateur
**Je veux** que les couleurs de fond s'impriment
**Afin de** avoir un PDF identique à l'écran

**Critères d'acceptation :**
- [ ] Fond vert sidebar imprimé
- [ ] Couleurs fidèles au design
- [ ] Test avec "Graphiques d'arrière-plan" activé

---

## Récapitulatif des Stories

| Epic | Story | Priorité | Statut |
|------|-------|----------|--------|
| 1 | 1.1 Initialisation Next.js | Haute | À faire |
| 1 | 1.2 Configuration print styles | Haute | À faire |
| 2 | 2.1 Extraction photo profil | Haute | À faire |
| 3 | 3.1 Sidebar structure | Haute | À faire |
| 3 | 3.2 Photo de profil | Haute | À faire |
| 3 | 3.3 À propos | Moyenne | À faire |
| 3 | 3.4 Contact | Moyenne | À faire |
| 3 | 3.5 Atouts | Moyenne | À faire |
| 3 | 3.6 Formation | Moyenne | À faire |
| 3 | 3.7 Langues | Moyenne | À faire |
| 4 | 4.1 En-tête nom/titre | Haute | À faire |
| 4 | 4.2 Expériences | Haute | À faire |
| 4 | 4.3 Compétences | Moyenne | À faire |
| 4 | 4.4 Méthodes | Basse | À faire |
| 5 | 5.1 Assemblage | Haute | À faire |
| 5 | 5.2 Validation A4 | Haute | À faire |
| 5 | 5.3 Validation couleurs | Haute | À faire |

---

**Date de création :** 2026-02-06
**Basé sur :** PRD CV Landing Page Elvis Dushime Emani
