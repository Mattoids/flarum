#!/bin/bash

date

# 定义备份目录和日期
backup_dir="/var/www/backups"
source_dir="/var/www/invites-fun/public/assets"
rsa_publin_key="/var/www/backups/public_rsa_key.pem"

# 备份的时间
current_month=$(date -d "$(date +'%Y-%m-01') -1 day" +"%Y-%m") # 目录名
current_date=$(date +"%Y-%m-%d_%H-%M-%S") # 压缩文件名
last_month_backup_dir="files/$(date -d "$(date +'%Y-%m-01') -1 day" +"%Y-%m-*")"

# 备份文件位置
source_backup_dir="${backup_dir}/${current_month}"
source_backup_file="${source_backup_dir}/${current_date}"

echo "current_month=${current_month}"
echo "current_date=${current_date}"

# 创建目录
if [ ! -d "${source_backup_dir}" ]; then
    mkdir "${source_backup_dir}"
else
    rm -rf "${source_backup_dir}/*"
fi

# 创建压缩文件
echo "Create a compressed file..."
cd "${source_dir}"
tar -zcf - avatars/ covers/ ${last_month_backup_dir} | split -d -b 100m - "${source_backup_file}.tar.gz."

# 循环每个文件 进行加密
echo "Encrypt one by one..."
for file in $(ls ${source_backup_dir}/*.tar.gz.*); do
    echo ${file}

    # 密钥文件名
    key_file="${source_backup_dir}/aes_${file##*/}"

    # 生成密钥
    openssl rand 32 > "${key_file}.key"

    # 对文件进行压缩
    openssl enc -nosalt -aes-256-cbc -pbkdf2 -in "${file}" -out "${file}.enc" -pass "file:${key_file}.key"

    # 使用 RSA 加密 AES 密钥
    openssl pkeyutl -encrypt -pubin -inkey "${rsa_publin_key}" -in "${key_file}.key" -out "${key_file}.kec"

    # 删除未加密的原始文件
    # rm -rf "${file}" "${key_file}.key"
done

# 清理未加密的 key
rm -rf "${source_backup_dir}/*.key"
