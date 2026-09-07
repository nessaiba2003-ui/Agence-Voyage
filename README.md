# Fantastic Golden

Site bilingue français/arabe de l'agence Fantastic Golden, prêt pour Vercel.

## Déploiement avec l'interface Vercel

1. Publier ce dossier dans un dépôt GitHub, GitLab ou Bitbucket.
2. Dans Vercel, choisir **Add New → Project**.
3. Importer le dépôt.
4. Si le dépôt contient le dossier parent `agence-voyage`, définir **Root Directory** sur `fantastic-golden`.
5. Garder **Framework Preset: Next.js** et cliquer sur **Deploy**.

Aucune variable d'environnement n'est nécessaire pour la version actuelle.

## Déploiement avec la CLI

```bash
npm install
npx vercel
npx vercel --prod
```

## Développement local

```bash
npm install
npm run dev
```

Le projet demande Node.js 22.13 ou une version plus récente.

## Contenu commercial

Les prix doivent être saisis en dirhams marocains et affichés avec le suffixe `DH`. Les dates, hôtels, disponibilités et témoignages doivent rester non publiés tant qu'ils ne sont pas confirmés par l'agence.
