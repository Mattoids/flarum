<?php

/*

接收前端编辑好的一条sql数据，
追加到json文件里

*/

/*

在这里做身份认证，如果身份不合法则必须终止

*/


//导入工具库
require_once __DIR__ . '/lib/vendor/autoload.php';
use Fengsuo\Library1 as mylib ;

//读取前端网页发来的一条sql数据
$user_text = file_get_contents("php://input");
$one_sql_data_from_user = mylib\JsonTool::json_to_obj($user_text);

//把这条插入sql列表里

//先读出旧的sql数据
$sql_data_file = "sql_data.txt";
$file_text = file_get_contents($sql_data_file);

$sql_data_list = mylib\JsonTool::json_to_obj($file_text);

//把用户发来的一条追加到数组末尾
$sql_data_list[] = $one_sql_data_from_user ;

//保存到文件
$file_text = mylib\JsonTool::obj_to_json($sql_data_list);
file_put_contents($sql_data_file , $file_text) ;

















