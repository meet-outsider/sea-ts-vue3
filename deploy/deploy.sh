echo 'before handler'
# 目标是宿主机数据卷路径
cp -r ./dist/ /home/data/nginx/www/
cp -r ./nginx.conf /home/data/nginx/conf/
docker-compose stop
docker-compose rm -f
echo '---- build new container----'
docker-compose up --d --build
