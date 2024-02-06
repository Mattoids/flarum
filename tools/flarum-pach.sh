#!/bin/bash

# 必须使用 www-data 用户执行
# if [ ! `whoami` == "www-data" ];then
#     echo "using: sudo -u www-data $0"
#     exit 1
# fi

# 切换到论坛目录执行
cd /var/www/invites-fun

# 修改论坛显示时间问题
echo "替换主框架，解决论坛显示时间问题"
chown -R www-data. storage/
sed -i 's/.format("D MMM")/.format("LL")/g' ./vendor/flarum/core/js/dist/forum.js
sudo -u www-data ./flarum cache:clear







echo "End."
