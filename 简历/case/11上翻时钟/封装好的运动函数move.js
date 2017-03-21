 function move (obj,object1,duration,tween,fn) {  
//传入的元素，元素的多个属性和目标值(属性用引号，值不用引号不用单位，全部用{}包起来，中间用逗号) 例如 “width”:200,持续时间(毫秒)，线型变化（必须配合封装好的线型公式函数使用，值为"linear"等，默认值为linear），回调函数
	var startTime = new Date();
	var d = duration;
	var j = {};
	tween=tween||"linear";       //设置tween的默认值，如果没有设置tween，则其值为linear
	for( var a in object1){   //遍历object1对象，将输入的值和js获取到的初始位置按照想要的格式存入对象j中
		j[a] = {};
		j[a].b = parseFloat(getComputedStyle(obj)[a]);   //b代表元素属性的初始值
		j[a].c = object1[a] - j[a].b;     //c代表总路程
	}
////	console.log(j);
////	j的内容格式：
//	{
//		'width':{
//			b:parseFloat(getComputedStyle(obj)[a]),
//			c:object1[a] - j[a].b
//		},
//		'height':{
//			b:parseFloat(getComputedStyle(obj)[a]);
//			c:object1[a] - j[a].b;
//		}
//	}
	obj.timer = setInterval(function(){
		
		var t = new Date() - startTime;
		if(t>=d){       //如果时间t超出规定时间d，让t=d,因为t的值关系到后面计算出的元素属性最终值
			t = d;
		}
		for(var a in j){
			var c = j[a].c;
			var b = j[a].b;
			var v = Tween[tween](t, b, c, d);    //需要怎样的线型运动是需要人通过参数tween传入的，如果没有传入上面已经赋给了默认值linear
			if(a == "opacity"){     //如果改变的属性是opacity，是没有px单位的。其他没有单位的属性无法套用move函数
				obj.style[a] = v ;
			}else{
				obj.style[a] = v + "px";
			}
		}
		if(t==d){             //如果经过的时间t到了规定的执行时间d，清空定时器，判断是否执行回调函数。
			clearInterval(obj.timer);
			fn&&fn();
		}
	},16)    //新版本chrom浏览器的最小执行间隔在4-5毫秒之间
}