// Object:对象;
var person = {
    name: '小明',
    age: 21,
    sex: 'male',
    study:function(){
        // this:指代当前对象
        console.log('我是' + this.name + ',今年' + this.age + '岁了,我在智游学习。');
    }
}
console.log(person);
//打点调用;可以获取对象的某个属性的取值;
console.log(person.name);
// 修改属性的值;
person.age = 22 ;
// 添加一个属性;
person.phone = '13356345678';
// 删除一个属性;delete:删除
// delete person.age ;

// 调用对象的方法;
person.study();

// car : brand ,price ;
// intro:函数;
var car = {
    brand:'Jeep',
    price:1234556,
    color:'白',
    intro:function(){
        console.log('我是' + this.brand);
    }
}
car.intro();


