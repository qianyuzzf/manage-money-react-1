rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@e.coding.net:xiaoqian001/manage-money-react-1-website/manage-money-react-1-website.git &&
git push -f origin master &&
cd ..