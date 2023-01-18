#!/usr/bin/envsh

# abortar en caso de errores
set -e

# compilado
pnpm build

# navega al directorio de salida de compilación
cd dist

# coloca .nojekyll para forzar el procesamiento de Jekyll
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# si estás desplegando en https://<NOMBRE DE USUARIO>.github.io/<REPO>
git push -f git@github.com:williamsmata/heroes-spa.git main:gh-pages

cd -
