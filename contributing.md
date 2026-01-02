# Guide de Contribution

## Git Flow

Ce projet utilise Git Flow. Voici comment contribuer :

### 1. Créer une issue

Avant de commencer à travailler, créez une issue décrivant ce que vous allez faire.

### 2. Créer une branche
```bash
# Partir de develop
git checkout develop
git pull origin develop

# Créer votre branche
git checkout -b feature/nom-de-la-fonctionnalite
```

### 3. Nommage des branches

- `feature/` : Nouvelle fonctionnalité
- `fix/` : Correction de bug
- `hotfix/` : Correction urgente en production
- `docs/` : Documentation

### 4. Commits

- Tous les commits doivent être signés
- Utilisez des messages clairs
- Format recommandé : `type: description`
  - `feat:` nouvelle fonctionnalité
  - `fix:` correction de bug
  - `docs:` documentation
  - `style:` formatage
  - `refactor:` refactoring

Exemple : `feat: add navigation menu`

### 5. Pull Request

1. Pousser votre branche
```bash
git push origin feature/nom-de-la-fonctionnalite
```

2. Créer une Pull Request sur GitHub vers `develop`
3. Assigner votre binôme comme reviewer
4. Attendre l'approbation
5. Merger la PR

### 6. Code de qualité

- Le hook pre-commit vérifie automatiquement votre code
- Assurez-vous que votre code passe HTMLHint
- Testez votre code avant de commit


