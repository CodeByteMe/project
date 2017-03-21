
/*		技能展示
	*   {
	*       temp: @value String         				*         模板
	*       skillsClassify: @value Array                *         掌握的技能综合
	*       	{
					skillLanguage: @value String        *         技能名称
	*       		percent: @value String              *         技能百分比
	*       		skillTooltip: @value Array          *         对技能的描述
				}
	*   }

	temp 有两个值可选：
		"circle"：饼形
		"columns":圆柱
*/

var skills = {
		temp:"columns",
		skillsClassify:[
		{
			skillLanguage:"Html5",
			percent:"70%",
			skillTooltip:[
				"video、audio",
				"localStorage本地存储",
				"表格，H5新增表单等……"
			]
		},
		{
			skillLanguage:"CSS3",
			percent:"75%",
			skillTooltip:[
				"浮动、定位、文档流特性、BFC块级格式化上下文",
				"flex弹性布局、响应式布局",
				"移动端开发与适配",
				"CSS3动画与3D变换",
				"CSS预处理：LESS"
			]
		},
		{
			skillLanguage:"Javascript",
			percent:"70%",
			skillTooltip:[
				"了解数据类型、作用域闭包等语言特性",
				"掌握定时器、数组字符串及递归、数组去重等",
				"深入使用DOM\BOM\EVENT，能完成各类组件开发",
				"掌握JS的数据调用、ajax实现机制、各类接口调用",
				"掌握面向对象编程，对封装、继承、多态等均有了解",
				"了解正则表达式，熟悉JS兼容性、JS性能提升",
				"ES6新增属性和方法"
			]
		},
		{
			skillLanguage:"Canvas",
			percent:"40%",
			skillTooltip:[
				"能熟练使用相关接口绘制各类图形",
				"能运用canvas游戏游戏开发",
				"可封装小型图表等数据可视化技术解决方案"
			]
		},
		{
			skillLanguage:"jQuery",
			percent:"40%",
			skillTooltip:[
				"熟练使用jQuery选择操纵DOM",
				"链式调用",
				"发送ajax请求"
			]
		},
		{
			skillLanguage:"Vue",
			percent:"40%",
			skillTooltip:[
				"数据驱动原理、双向数据绑定",
				"组件化、模块化、前端项目工程化",
				"vue-router、vue-cli、vue-resource",
				
			]
		},
		{
			skillLanguage:"node.js",
			percent:"20%",
			skillTooltip:[
				"npm包管理工具、webpack打包工具",
				"node搭载服务器环境，开启本地服务器"
			]
		}
	]
}