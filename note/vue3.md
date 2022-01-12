1.vue3和vue2 有什么区别
	
2.vite 的使用

3.选项api 和 组合api

4.组件api和 setup 函数的使用
setup：

5.vue3的生命周期

6.reactive 响应式数据
const obj = reactive({  //vue3模板使用变量需要在setup(return {obj,})
                name:'',// vue3实现响应式数据，需要定义reactive函数，
age:8,	//是vue3的内置的方法
            })

7.toRef 和 头 toRefs 函数 实现 响应式数据 ref 函数的使用
proxy才是响应式，
不常用但是需要知道 ，使用的话 复杂情况下 容易混淆变量  ...结构是不好使的
// toref 和torefs 是为了在模板使用时不想obj.name 想直接只用name渲染，使用的
需要转换成响应式数据

toRef：是为了实现对象里面只用某个值，定义响应式数据，避免代码沉余
	const name = toRef(obj,'name')//toRef 会把这个值变成一个对象，
	使用const 没什么关系，toRef 会默认把值变成对象，
	赋值给对象里面的vale属性 value是存放值得地方
	所以我们需要改变值得时候需要name.vlaue
使用场景：已经有响应式数据，但是我们只用数据里面的某一个数据，不能直接改变值，
所以需要toref, 使用场景不多！

toRefs ：是将对象里面所以的key 变成响应式数据 大白话就是懒不想用.想直接用key
	const obj2 = toRefs(obj)
	//修改的话 可以直接obj.name  也可以 obj.name.value  //他们二个是用的一个响应式数据
	setup{
	   return(...obj)
	}
ref 函数：如果知道他要声明几个 直接使用ref 就可以，
	const name = ref('name')
	const age = ref(10)  -v-isRef:true是不是ref定义的 模板直接取value的值 所以不需要.value
 
定义响应式数据：只用二中方法，一种是reactive 一种是ref，toRef,toRefs其实是辅助函数
reactive 常用于用来定义复杂响应式数据对象的，
ref 常用于用来定义简单的响应式数据对象的，特点，获取值是需要.value 模板中使用是 一样的

8.computed 的使用


9.watch 监听
	1.监听ref的：watch('变量',(newValue,oldValue)=>{})
	2.监听reactive数据: watch('对象',(newValue,oldValue)=>{})
	3.监听多个数据辨别：watch([const,obj],()=>{})
	4.监听对象中某个属性的变化例如obj.name：watch(()=>obj.name,()=>{})
	//是一个函数，需要监听到某个对象的值，需要写成函数返回该属性，
	//
	5.监听对象里面的对象变化，例obj:{ obj2:{name:5}}:watch(obj,()=>{}),{deep:true})
	watch的第三个参数，配置选项，deep:true深度监听，默认执行就是页面就执行一次，immediate:true,就会页面进来时执行一次

10.获取ref 的使用，
	1.定义单个ref 需要在setup里面定义一个const dom=ref(null) 然后return出去] 模板定义ref='dom'
	2.获取循环ref 需要函数然后push到数组里 const domList = [];
	const getDomList = (el) =>{domList .push(el)}模板定义：ref='getDomList'
	
9.父子通信

10.依赖注入

11.v-model 语法糖

12.mixins 的用法 

13.vuex  vue-router 的方法，和使用

14.vue3使用的时候可以怎样使用
	可以定义一个方法，把方法里面的值，方法return 出去，在setup里面定义一个
	const mouse = mounse(); 模板就可以使用了 ，setup里面也不会太多代码 或者引入一个文件
	

Vue3面试题
1.Vue3源码分析资料和vue2的区别 和vue3这样使用的好处