<?php

/*

读出json数据返回给前端

*/

/*

在这里做身份认证，如果身份不合法则必须终止

*/


//导入工具库
require_once __DIR__ . '/lib/vendor/autoload.php';
use Fengsuo\Library1 as mylib ;

$sql_data_file = "sql_data.txt";
$file_text = file_get_contents($sql_data_file);

echo $file_text;
















