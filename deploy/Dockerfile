# 基础镜像nginx
FROM nginx:alpine
# 定义作者
MAINTAINER outsider<outsider@gmail.com>
# 设置时区

RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
#nginx.conf
#CMD ["rm","-rf","/home/data/nginx/conf.d/"]
#CMD ["cp ","-r","./dist/","/home/data/nginx/www/"]
#CMD ["cp ","-r","./nginx.conf","/home/data/nginx/conf/"]
#RUN #rm /etc/nginx/conf.d/default.conf
#RUN cp ./dist/ /home/data/nginx/www/
#RUN cp ./nginx.conf /home/data/nginx/conf/
# 端口
EXPOSE 80

RUN echo 'dockerfile build images success!!'

