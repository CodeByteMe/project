
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS入门",
			caseList:[
				{
					caseTitle:"设置div样式",
					publishTime:"2016-10-10",
					caseThumbnail:"case/01设置div样式/01设置div样式.gif",
					caseDescription:"说明：元素获取getElementById，事件类型。<br/>本章知识点：元素获取getElementById、事件类型：鼠标、键盘、窗口、表单、自定义事件、初识函数、变量声明、变量赋值、变量命名规则、关键字、保留字、window、元素基本属性操作、.操作符和[]操作符、if和else、for循环、this关键字、getElementsByTagName、getElementsByClassName、querySelector、querySelectorAll、自定义属性之索引。",
					caseWebsite:"images/case/01设置div样式/index.html"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2016-10-11",
					caseThumbnail:"case/02模拟手机短信发送/模拟短信.gif",
					caseDescription:"说明：这是我完成的一个小案例，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右",
					caseWebsite:"images/case/02模拟手机短信发送/index.html"
				},
				{
					caseTitle:"图片切换实例",
					publishTime:"2016-10-12",
					caseThumbnail:"case/03图片切换实例/图片切换综合应用.gif",
					caseDescription:"说明：for循环，if语句过界处理，数组的运用个，自定义属性，索引值的使用",
					caseWebsite:"images/case/03图片切换实例/index.html"
				},
				{
					caseTitle:"v字形",
					publishTime:"2016-10-14",
					caseThumbnail:"case/04v字形/4v.gif",
					caseDescription:"说明：for循环，取模%判断方向，拼接字符串",
					caseWebsite:"case/04v字形/index.html"
				},
				{
					caseTitle:"多组图片切换",
					publishTime:"2016-10-15",
					caseThumbnail:"case/05多组图片切换/05多组图片切换.gif",
					caseDescription:"说明：自定义属性，索引值使用，for循环，数组的使用",
					caseWebsite:"case/05多组图片切换/index.html"
				},
				{
					caseTitle:"QQ列表",
					publishTime:"2016-10-17",
					caseThumbnail:"case/06QQ列表/06QQ列表.gif",
					caseDescription:"说明：点击onclick，开关的使用，for循环",
					caseWebsite:"case/06QQ列表/index.html"
				},
				{
					caseTitle:"五星评分",
					publishTime:"2016-10-18",
					caseThumbnail:"case/07五星评分/07五星评分.gif",
					caseDescription:"说明：for循环使用，if语句使用，数组，onmouseover，onmouseout",
					caseWebsite:"case/07五星评分/index.html"
				},
				{
					caseTitle:"百度音乐",
					publishTime:"2016-10-20",
					caseThumbnail:"case/08百度音乐/08百度音乐.gif",
					caseDescription:"说明：隔行变色取模%，input的checked，for循环配合if语句判断是否全选",
					caseWebsite:"case/08百度音乐/index.html"
				},
				{
					caseTitle:"擦除图片",
					publishTime:"2016-10-24",
					caseThumbnail:"case/09擦除图片/09擦除图片.gif",
					caseDescription:"说明：2D旋转，transform",
					caseWebsite:"case/09擦除图片/index.html"
				}
			]
		},
		{
			caseName:"日期对象、定时器",
			caseList:[
				{
					caseTitle:"高级版日历",
					publishTime:"2016-11-1",
					caseThumbnail:"case/10高级版日历/10高级版日历.gif",
					caseDescription:"说明：日期对象 new Date()。</br>本章知识点：setInterval间隔型定时器、setTimeout延迟型定时器、定时器编号、清除定时器：clearInterval、clearTimeout，定时器管理、运动基本原理、曲线方程、tween缓动算法的原理和使用、毫秒时间戳、mTween运动框架的封装、计算后样式getComputedStyle、透明度的处理、回调函数、日期对象、时区的差异、日期时间格式化处理",
					caseWebsite:"case/10高级版日历/index.html"
				},
				{
					caseTitle:"上翻时钟",
					publishTime:"2016-11-4",
					caseThumbnail:"case/11上翻时钟/11上翻时钟.gif",
					caseDescription:"说明：定时器、延时器、本地时间",
					caseWebsite:"case/11上翻时钟/index.html"
				}
			]
		},
		{
			caseName:"字符串、数组、排序算法",
			caseList:[
				{
					caseTitle:"文字搬运工",
					publishTime:"2016-11-7",
					caseThumbnail:"case/12文字搬运工/12文字搬运工.gif",
					caseDescription:"说明：字符串的substing、slice方法，定时器setInterval，清除定时器clearInterval。</br>本章知识点：字符串：length、charAt、charCodeAt、indexOf...，字符编码：ASCII、Unicode、UTF-8...，JSON：数据交换格式、规则、用途，JSON对象：parse、stringify，for...in，mTween+、数学对象：ceil、floor、round、abs、random、常用随机值公式，数组：length、push、pop、sort...，排序算法：冒泡排序（BubbleSort）、快速排序（QuickSort）。",
					caseWebsite:"case/12文字搬运工/index.html"
				},
				{
					caseTitle:"查找替换",
					publishTime:"2016-11-8",
					caseThumbnail:"case/13查找替换/13查找替换.gif",
					caseDescription:"说明：字符串的indexOf、split方法，数组的join方法",
					caseWebsite:"case/13查找替换/index.html"
				},
				{
					caseTitle:"随机打乱",
					publishTime:"2016-11-10",
					caseThumbnail:"case/14随机打乱/14随机打乱.gif",
					caseDescription:"说明：随机数Math.random(),数组方法reverse",
					caseWebsite:"case/14随机打乱/index.html"
				},
				{
					caseTitle:"带预览图的图片切换",
					publishTime:"2016-11-13",
					caseThumbnail:"case/15带预览图的图片切换/15带预览图的图片切换.gif",
					caseDescription:"说明：带预览图的图片切换",
					caseWebsite:"case/15带预览图的图片切换/index.html"
				}
			]
		},
		{
			caseName:"DOM、BOM",
			caseList:[
				{
					caseTitle:"操作表格表单",
					publishTime:"2016-11-14",
					caseThumbnail:"case/16操作表格表单/16操作表格表单.gif",
					caseDescription:"</br>本章知识点：文档对象模型DOM、DOM结构、DOM树、DOM节点、节点类型、节点关系、节点常用操作：nodeType、nodeName、子节点操作children...，兄弟节点操作：perviousElementSiblings...，父节点操作：parentNode...，节点盒模型信息：clientWidth、getBoundingClientRect...，元素CURD操作、表格操作、表单操作、表单事件。<br/>本章知识点：浏览器对象模型BOM - Browser Object Model、常用方法：open、close，常用属性： 用户代理信息navigator.userAgent、地址栏信息：location、hash、search（queryString），窗口尺寸、可视区尺寸、滚动距离、文档内容高度，常用事件：onscroll、onresize、土豆网遮罩层、土豆网登录弹出层、返回顶部。",
					caseWebsite:"case/16操作表格表单/index.html"
				},
				{
					caseTitle:"商品选择",
					publishTime:"2016-11-16",
					caseThumbnail:"case/17商品选择/17商品选择.gif",
					caseDescription:"说明：jQuery操作元素节点",
					caseWebsite:"case/17商品选择/index.html"
				},
				{
					caseTitle:"招聘信息",
					publishTime:"2016-11-18",
					caseThumbnail:"case/18招聘信息/18招聘信息.gif",
					caseDescription:"说明：BOM中的知识点，window.location使用，search和hash值的获取。onhashchange的使用。模拟后台数据动态渲染页面。",
					caseWebsite:"case/18招聘信息/list.html"
				}
			]
		},{
			caseName:"事件",
			caseList:[
				{
					caseTitle:"搜索",
					publishTime:"2016-11-20",
					caseThumbnail:"case/19搜索/19搜索.gif",
					caseDescription:"说明:模拟搜索栏，ctrl+鼠标左键、ctrl+回车多项选择，上下按键也可移动选项。<br/>本章知识点：事件类型，事件对象：event、event.clientX、event.target、事件流（捕获阶段、目标阶段、冒泡阶段）、事件委托、阻止冒泡event.stopPropagation()、事件函数绑定：属性绑定、addEventListener、事件函数注销，键盘事件：keydown，event.which...，事件默认行为，阻止默认行为：event.preventDefault()、上下文菜单事件：contextmenu。",
					caseWebsite:"case/19搜索/index.html"
				},
				{
					caseTitle:"放大镜",
					publishTime:"2016-11-24",
					caseThumbnail:"case/20放大镜/20放大镜.gif",
					caseDescription:"说明:模拟搜索栏，ctrl+鼠标左键、ctrl+回车多项选择，上下按键也可移动选项。鼠标移动事件onmousemove，获取鼠标位置clientX、clientY，获取元素宽高offsetWidth、offsetHeight，计算移动比例。",
					caseWebsite:"case/20放大镜/index.html"
				},
				{
					caseTitle:"拖拽选中",
					publishTime:"2016-11-26",
					caseThumbnail:"case/21拖拽选中/21拖拽选中.gif",
					caseDescription:"说明：拖拽、选中元素。单选、群选、鼠标绘制元素。",
					caseWebsite:"case/21拖拽选中/index.html"
				}
			]
		},
		{
			caseName:"正则、面向对象、jQuery",
			caseList:[
				{
					caseTitle:"正则表达式",
					publishTime:"2016-11-30",
					caseThumbnail:"",
					caseDescription:"本章知识点：RegExp对象、方法：test、search、match、replace，修饰符：i（ignore）、g（global），量词：＋、＊、？，子项：()，转义字符：\、次数匹配：{}，任意字符：.，字符集合／字符范围：[]，首位匹配符：^、$，实例：敏感词过滤、日期格式化、html标签过滤，阻止xss跨站脚本攻击、找重复项最多的字符和个数、QQ/邮箱/手机号码/邮箱 验证"
					,caseWebsite:"javascript:;"
				},
				{
					caseTitle:"面向对象",
					publishTime:"2016-12-02",
					caseThumbnail:"",
					caseDescription:"说明：案例参见项目池。<br/>本章知识点：对象的组成：成员属性、成员方法，Object，{}，对象创建和初始化，工厂模式，构造函数，书写规范，运算符new的执行过程和原理分析，this 的使用，原型和原型链，proto，prototype，通过prototype实现公有属性和方法的复用和继承，Mixed Constructor Function/Prototype Method，面向对象的选项卡分析及实现过程，抽象、封装、继承、多态，包装对象：String、Number、Boolean，toString()，toString()的重写(overWrite)和实现过程，hasOwnProperty()方法实现自有属性判断，for...in/for...of的使用及特点，constructor属性的使用，instanceof运算符，继承：继承的特点、拷贝继承、类式继承、原型继承，通过继承实现多种不同形态的元素拖拽。组件的特点：方法、配置、事件，组件配置的作用和实现，组件方法的作用和实现，实例配置和默认配置 - extend()，组件事件的作用和实现，自定义事件机制的实现，基于属性的事件的弊端，事件监听器addEventListener的实现，事件触发器 trigger的实现，事件容器，仿nodejs中EventEmitter实现事件继承。",
					caseWebsite:"javascript:;"
				},
				{
					caseTitle:"music",
					publishTime:"2016-12-04",
					caseThumbnail:"case/23music/23music.gif",
					caseDescription:"说明：jQuery操作DOM",
					caseWebsite:"case/23music/index.html"
				}
			]
		},
		{
			caseName:"AJAX、ES6、Node、Vue",
			caseList:[
				{
					caseTitle:"AJAX、ES6、Node、Git、Vue",
					publishTime:"2016-12-10",
					caseThumbnail:"",
					caseDescription:"说明：案例参见项目池。<br/>本章知识点：XMLHttpRequest，open，异步与同步，send，onload事件，responseText，responseXML，HTTP请求方法get和post的区别，HTTP请求头setRequestHeader，中文编码、缓存、安全等问题，文本、JSON、XML，数据解析处理JSON.parse，无刷新上传与下载，onprogress事件，upload对象，FormData，跨域问题的解决，JSONP原理和实现。<br/>let和const命令，变量的解构赋值，字符串/正则/数字/数组/函数/对象的扩展，Symbol、Proxy和Reflect，二进制数组，Set和Map数据结构，Iterator和for...of循环，Generator函数，Promise对象，异步操作和Async函数，Class，Decorator，Module，Babel转码器。<br/>nodeJS介绍及使用、环境搭建、全局模块、文件模块、文件夹模块、CommonJS规范、NPM包管理器、Stream模块、Buffer模块、fs文件模块、Net模块、HTTP模块，案例：文件扫描工具、项目自动化工具、实时聊天、文件传输，WEB开发框架介绍，Express和模板引擎swig的使用，Mongodb数据库安装与使用，在线博客/问答系统的搭建。<br/> git和github，git安装，git连接，项目创建，github SSH，git的基本使用，git clone，git add，暂存区，工作区，git status，git commit－m，git push origin，git log，git diff，git reset，git checkout，git rm，git remote，git fetch，git merge，git pull，fork，branch，GitHub 免费的远程仓库，使用 GitHub 搭建静态博客。",
					caseWebsite:"javascript:;"
				}
			]
		},
		{
			caseName:"小游戏",
			caseList:[
				{
					caseTitle:"贪吃蛇",
					publishTime:"2017-01-02",
					caseThumbnail:"images/case/24贪吃蛇/贪吃蛇.gif",
					caseDescription:"说明：经典贪吃蛇玩法。上下左右移动，蛇撞墙或撞自己会死亡，吃果实身体会变长。",
					caseWebsite:"images/case/24贪吃蛇/index.html"
				},
				{
					caseTitle:"棍子英雄",
					publishTime:"2017-01-04",
					caseThumbnail:"images/case/25棍子英雄/棍子英雄.gif",
					caseDescription:"说明：按住鼠标左键棍子变长，松开鼠标左键棍子倒下变成桥，如果桥的长度合适则人物可以顺利过桥，否则摔下悬崖死亡。",
					caseWebsite:"images/case/25棍子英雄/index.html"
				},
				{
					caseTitle:"老虎机",
					publishTime:"2017-01-06",
					caseThumbnail:"images/case/26老虎机/26老虎机.gif",
					caseDescription:"说明：单机左键开始抽奖。",
					caseWebsite:"images/case/26老虎机/index.html"
				},
				{
					caseTitle:"坦克开火",
					publishTime:"2017-01-10",
					caseThumbnail:"images/case/27坦克开火/27坦克开火.gif",
					caseDescription:`说明：小键盘1,2,3,5控制移动，空格发射子弹。<br/>解决问题：
										①老师数组法解决按下两个键抬起一个键的bug
										②解决方向右键的bug：改用小键盘1235
										③解决按住空格再走动会停止发射子弹 （开定时器发射炮弹）
										④解决了傻转270度转回去"`,
					caseWebsite:"images/case/27坦克开火/index.html"
				}
			]
		},
		{
			caseName:"静态仿站",
			caseList:[
				{
					caseTitle:"去哪儿网PC端",
					publishTime:"2016-08-10",
					caseThumbnail:"case/28【静仿】去哪儿网PC端/去哪网PC.gif",
					caseDescription:"说明：使用了定位、浮动完成页面布局，并且解决IE6下的兼容问题。标签的嵌套符合W3C标准,为了提高加载速度，增强用户体验，使用了雪碧图。",
					caseWebsite:"case/28【静仿】去哪儿网PC端/html/index.html"
				},
				{
					caseTitle:"去哪儿网移动端",
					publishTime:"2016-09-01",
					caseThumbnail:"case/29【静仿】去哪儿网移动端/去哪儿网移动端.gif",
					caseDescription:"说明：移动端适配不同尺寸设备、物理分辨率和显示分辨率、viewport 视口设置、window.devicePixelRatio 像素比、移动端1px的边框设置、移动端图片发虚问题、移动端rem布局、移动端的默认样式处理。",
					caseWebsite:"case/29【静仿】去哪儿网移动端/html/index.html"
				},
				{
					caseTitle:"响应式UE设计",
					publishTime:"2016-09-10",
					caseThumbnail:"case/30【静仿】响应式UE设计/响应式UE设计.gif",
					caseDescription:"说明：弹性盒模型及响应式布局。display:flex、flex-direction、row、row-reverse、justify-content、align-items、flex-wrap、align-content、flex-flow、order、弹性盒模型的margin:auto、align-self、flex、Media Queries 媒体查询、媒体类型、关键字、媒体类型、Media Queries的兼容。",
					caseWebsite:"case/30【静仿】响应式UE设计/index.html"
				}
			]
		},
]