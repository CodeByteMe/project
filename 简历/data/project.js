
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"云盘",
			projectWebsite:"project/云盘/index.html",
		    startTime:"2016.12.10",
			endTime:"2017.01.20",
			projectExplain:"less预处理，根据扁平化模拟数据渲染页面；新建、删除、移动、重命名文件或文件夹；操作单个文件或批处理文件；面包屑导航点击回退；树形菜单单机双击折叠、打开操作；鼠标拖动文件并移动到其他文件、鼠标框选多个文件等操作。",
			projectLabel:["html","css3","js","less"],
			projectThumbnail:"project/云盘/云盘.gif"
		},
		{
			projectName:"部落3游戏",
			projectWebsite:"project/部落3游戏/html/index.html",
		    startTime:"2017.02.10",
			endTime:"2017.02.27",
			projectExplain:"运用H5的video、audio及canvas，借助TweenMax，采用ES6的let、set、箭头函数、超级字符串、class类等，OOP面向对象式编程。babel+uglifyjs编译、优化代码，提升性能。",
			projectLabel:["html5","css3","js","canvas","ES6"],
			projectThumbnail:"project/部落3游戏/部落3游戏.gif"
		},
		{
			projectName:"外卖APP",
			projectWebsite:"project/外卖APP/dist/index.html",
		    startTime:"2017.03.01",
			endTime:"2017.03.18",
			projectExplain:"学习并尝试制作一款完整的SPA，以线上生产环境的要求开发。vue-cli脚手架工程化项目；npm包管理；vue-loader组件化、模块化开发；vue-router路由；使用node搭载服务器环境开发及测试，mock数据；localstorge本地存储；vue-resource实现Ajax通信；es6 + babel + eslint；Webpack打包。",
			projectLabel:["html5","css3","js","vue","node.js"],
			projectThumbnail:"project/外卖APP/外卖APP.gif"
		},
]