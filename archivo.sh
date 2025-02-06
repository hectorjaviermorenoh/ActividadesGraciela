eval "$(ssh-agent -s)"
ssh-add ~/.ssh/hectorjaviermorenoh

git pull origin main --no-rebase


# Deploy codigo en Actividades Graciela hectorjaviermorenoh
git remote remove origin
git remote add origin git@github.com:hectorjaviermorenoh/ActividadesGraciela.git
git status
git add .
git commit -m "deployando Codigo"
git push origin main


# deploy en gh-pages hectorjaviermorenoh
git remote remove origin
git remote add origin git@github.com:hectorjaviermorenoh/ActividadesGraciela.git
npm run deploy







