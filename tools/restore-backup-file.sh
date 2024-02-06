#!/bin/bash

# 定义备份目录和日期
backup_dir="/var/www/backups"
rsa_private_key="/var/www/backups/test/private_rsa_key.pem" # 私钥用于解密AES密钥
current_month='2023-10' # 需要还原的月份


# 循环每个加密文件 进行解密和还原
for file in $(ls ${backup_dir}/${current_month}/*.tar.gz.*.enc); do
    echo "Decrypting ${file}"

    # 密钥文件名
    file_name=$(basename "${file}" .enc)
    key_file="${backup_dir}/${current_month}/aes_${file_name}"
    echo $key_file

    # 使用 RSA 解密AES密钥
    openssl pkeyutl -decrypt -inkey "${rsa_private_key}" -in "${key_file}.kec" -out "${key_file}.key2"

    # 解密文件
    echo "de..."
    openssl enc -nosalt -d -aes-256-cbc -pbkdf2 -in "${file}" -out "${backup_dir}/${current_month}/de_${file_name}" -pass "file:${key_file}.key2"
done

exit

# 合并和解压备份文件
cd "${backup_dir}/${current_month}"
cat *.tar.gz* | tar -zxvf -

# 删除解密的AES密钥文件
rm -f "${backup_dir}/${current_month}/aes_*.key"
