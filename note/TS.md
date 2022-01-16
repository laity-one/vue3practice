

## TS基础
### 1.原始数据类型
    原始数据类型包括：布尔值、数值、字符串、null、undefined
    Boolear:
    	let isBoolear:boolear = true; //正确
    	使用构造函数创造的boolear 不是 布尔值
    	let createdByNewBoolean: boolean = new Boolean(1); // 会报错
    	直接调用Boolean的话 返回的是一个布尔值  通过的
    	let createdByBoolean: boolean = Boolean(1);
    number:
    	number 八进制 二进制都是正确的 Infinity 无穷
    	let decLiteral: number = 6;
    	let hexLiteral: number = 0xf00d;
    	// ES6 中的二进制表示法
    	let binaryLiteral: number = 0b1010;
    	// ES6 中的八进制表示法
    	let octalLiteral: number = 0o744;
    	let notANumber: number = NaN;
    	let infinityNumber: number = Infinity;
    String:
    	let myName: string = 'Tom';
    	let myAge: number = 25;
    	let myNamec: string = 'Tom';
    	// string 拼接 number 不会报错 推荐使用模板字符串可以写表达式 
    	myName  = `${myName}+${myAge +1}`; 
    	console.log(myName); // tom26	
    Void:
    	void：表示没有返回值得函数	
    	//声明 void 只能赋值 undefind和null
    	let unusable: void = undefined;
    	function alertName(): void {
       		 alert('My name is Tom');
    	}
    Null和undefined:
    	undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
    	let u: void;
        let num: number = u; //void 类型定义变量不可以赋值给number string 等类型
        // Type 'void' is not assignable to type 'number'.


### 2.任意值

```
any:
    let myFavoriteNumber: string = 'seven';
    myFavoriteNumber = 7;//如果是一个普通类型，在赋值过程中改变类型是不被允许的
    let myage:any:'server';
    myage = 7 //通过的
any属性和方法：
	any 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
	let anyThing: any = 'hello';
	变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
	let something;
    something = 'seven';
    something = 7;

```

### 3.类型推断

```
function getLength(something: string | number): number {
    return something.toString();
}
联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
```

### 4.对象的类型-接口

```
interface:
	有的编程语言中会建议接口的名称加上 I 前缀-+63-
	定义的变量比接口少了一些属性是不允许的 多一些也是不可以的
	赋值的时候，变量的形状必须和接口的形状保持一致
    interface Person {
        name: string;
        age: number;
    }

    let tom: Person = {
        name: 'Tom';
       	// age: 25;
    	//geder: 'male;
    };
可选属性、任意属性、只读属性:
	// 加上问号的时候 就变成了可选属性 
	一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
	一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
	只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
	interface Person {
		readonly id: number;
        name: string;
        age?: number;
        [propName: string]: any; // 一旦用了 string 其他属性必须也是 string
        [propName: string]: string | number;
    }
    let tom: Person = {
    	id:165
        name: 'Tom';
        gender: 'male';
    };
    tom.id = 55 //报错   
    

```

### 5.数组的类型

```

```

### 6.函数的类型

```

```

### 7.类型断言

```

```



### 8.声明文件

```

```



### 9.内置对象

```

```


## TS进阶

### 1.类型别名

```

```

### 2.字符串字面量类型

```

```

### 3.元组

```

```

### 4.枚举

```

```

### 5.类

```

```

### 6.类于接口

```

```

### 7.泛型

```

```

### 8.声明合并

```

```





## TS面试题