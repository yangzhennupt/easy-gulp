var requireDir=require('require-dir');

//加载所有tasks
requireDir('./gulp/tasks',{
	 recurse:true
})