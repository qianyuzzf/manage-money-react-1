rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:qianyuzzf/manage-money-react-1-website.git &&
git branch -M main &&
git push -f origin main &&
cd ..