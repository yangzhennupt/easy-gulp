var gulp=require('gulp'),
    spritesmith=require('gulp.spritesmith'),
	config=require('../config');
	
	
	
	gulp.task('image',function(){
	return gulp.src(config.img.src)
	        .pipe(spritesmith({
				imgName:'sprite.png',     //sprite图名称
				cssName:'/css/sprite.css',   //输出css
				padding:5,        //间距
				algorithm:'binary-tree',   //排列方式
				cssTemplate:function(data){
					var arr=[];
					data.sprites.forEach(function(sprite){
						  arr.push(".icon-"+sprite.name+
                    "{" +
                    "background-image: url('"+sprite.escaped_image+"');"+
                    "background-position: "+sprite.px.offset_x+"px "+sprite.px.offset_y+"px;"+
                    "width:"+sprite.px.width+";"+
                    "height:"+sprite.px.height+";"+
                    "}\n");
					});
					return arr.join("");
				}
				
			}))		
			.pipe(gulp.dest(config.img.dest));
	});
