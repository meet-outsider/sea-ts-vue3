# linux环境搭建
## docker
```
curl -sSL https://get.daocloud.io/docker | sh
```
## docker compose
```
官方下载
sudo curl -L "github.com/docker/comp… -s)-$(uname -m)" -o /usr/local/bin/docker-compose


国内镜像下载
curl -L get.daocloud.io/docker/comp… -s-uname -m` > /usr/local/bin/docker-compose

```
## 在宿主机递归创建nginx数据卷目录
```
mkdir -p  /home/data/nginx/{www,conf,logs}
```
## 创建数据卷
```
 docker volumes create vol-nginx
```
# 部署
## 代码打包
```bash
npm run buid
```
## 自动化执行 deploy.sh 脚本
```bash
cd /home/temp/deploy/
chmod +x ./deploy.sh 
./deploy.sh
```
