<?php

/*

此脚本任务说明：
在这里做正式的数据库查询，把查询结果返回
返回的是由行组成的数组，
一行又是一个关联数组，键代表列，值就代表对应的值
前端用这个渲染出表格


从用户发来的json里读出 功能名 + 参数数组，
从存储的功能列表里找出对应的功能的sql语句

*/


/*

在这里做身份认证，如果身份不合法则必须终止

*/




//导入工具库
require_once __DIR__ . '/lib/vendor/autoload.php';
use Fengsuo\Library1 as mylib ;

//读取青石要求的配置文件
//这里默认是相对当前路径，
//如果config.php在其他地方要把这里路径改下
$config = require("/var/www/invites-fun/config.php");

//读取前端发来的数据
$user_text = file_get_contents("php://input");
$user_data = mylib\JsonTool::json_to_obj($user_text);

$sql_data_file = "sql_data.txt";
$file_text = file_get_contents($sql_data_file);

$sql_data_list = mylib\JsonTool::json_to_obj($file_text);

//用功能名找出用户想要执行的是哪一条sql
function find_sql($name , $sql_data_list)
{
	foreach($sql_data_list as $one_sql_data)
	{
		if($one_sql_data->name === $name)
			return $one_sql_data->sql;
	}
}

//从前端发来的params数组，构建PDO参数数组
function build_pdo_query_params($user_data)
{
	$pdo_params = [] ;
	foreach($user_data->params as $one_user_param)
	{
		$key_name = ":" . $one_user_param->key ;
		$pdo_params[$key_name] = $one_user_param->value ;
	}
	
	return $pdo_params;
}

$target_sql = find_sql($user_data->name , $sql_data_list);

/*

在这里创建对数据库的链接
假定现在已经创建好了一个链接
$dsn = 'mysql:dbname=testdb;host=127.0.0.1';
$user = 'dbuser';
$password = 'dbpass';

$db_connection = new PDO($dsn, $user, $password);

我下面测试用的是 这个sqlite数据库文件
$db_connection = new \PDO("ABC.sqlite3");
*/

$dsn = "mysql:dbname={$config['database']['database']};host={$config['database']['host']};port={$config['database']['port']}";
$user = $config['database']['username'] ;
$password = $config['database']['password'] ;

//现在开始建立数据库链接，准备开始查询数据库
//$db_connection = new \PDO("sqlite:ABC.sqlite3");
$db_connection = new \PDO($dsn , $user , $password);
$db = new mylib\DB($db_connection);


$pdo_params = build_pdo_query_params($user_data) ;
$result = $db->run_sql($target_sql , $pdo_params , true) ;

//$result 现在是一个 由数据库行 组成的数组，每个行，又是一个关联数组，键是列名
//现在把结果转换为json文本发给前端
$result_text = mylib\JsonTool::obj_to_json($result);
echo $result_text ;














