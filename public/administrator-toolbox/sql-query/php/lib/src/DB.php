<?php
namespace Fengsuo\Library1;
/*
这个类用来提供对sqlite数据库的便捷访问

为了适配Flarum，这里的构造函数改为了需要传入已经建立的连接
*/
class DB
{
	
	/*
	function __construct($filename)
	{
		$this->connection = new \PDO("sqlite:{$filename}");
		$this->connection->exec('PRAGMA busy_timeout = 5000;');
		$this->connection->exec('PRAGMA journal_mode = wal2;');
	}
	*/
	
	function __construct(&$connect)
	{
		$this->connection = $connect;
	}
	
	function run_sql($sql , $params = null , $need_result = false)
	{
		$db_connection = $this->connection;
		$stms = $db_connection->prepare($sql);
		$stms->execute($params);
		
		if(!$need_result)
			return null;
		
		$result_array = [] ;
		while( $oneRow = $stms->fetch( \PDO::FETCH_ASSOC ) )
		{
			$result_array[] = $oneRow ;
		}
		
		//如果数组是空的
		if(!$result_array)
			return null;
		
		return $result_array;
	}
	
	function close()
	{
		$this->connection = null ;
	}
}
