

/*
Symbol
primitive value : 유일무이하고 고유한 존재 
기본적으로 열거대상에서 제외된다. 
암묵적으로 형변환이 불가능하다. 
    ex) true  + 1 return 값은 2 이다 왜냐하면 true가 암묵적으로 1로 형변환 되기 떄문이다.


사용 예:) prop 은닉화 , 열거 대상에서 제외  

*/


const a = Symbol('a'); 
const b = Symbol('a'); 



console.log(a===b); 
//매번 만들 때 마다 새로운 녀석이다.

const c =a; 
console.log(c===a); 



const x = ()=>{

    const a = Symbol('a'); 
    return {
        [a] : 10 ,
        a : a
    }

}
//프로퍼티의 은닉화 , 신기하네;;
const y= x(); 
console.log('y------------->', y); 
console.log('y.a----------->',y.a); 
console.log('y[y.a]-------->',y[y.a]); 



//문자열이 아닌 타입은 자동으로 toString()처리 된다.
const obj1  = {a : 1}
const sb1 = Symbol(obj1); 
const sb2 = Symbol(obj1); 

console.log("obj1.toString() --> " + obj1.toString()); 
console.log(sb1, sb2); 
console.log(sb1 === sb2); 

console.log('-----------------------------------------------------------------------------------------------------'); 



const NAME = Symbol('이름'); 
const GENDER = Symbol('성별'); 
//아... Symbol은 열거 대상에서 제외되기 때문에 
//예를들면 조건식을 달아서 for문을 돌릴 필요가 없다... 이런 의미지 않을까? 


const iu = {

        [NAME] : '아이유',    //Symbol을 객체의 프로퍼티 키 로 하기 위해서는 반드시 []를 해줘여 한다.(문법이자 약속) 
        [GENDER] : 'female', 
        age :26
}



const suzi = {

    [NAME] : '수지', 
    [GENDER] : 'female', 
    age :26


}



const ji = {

    [NAME] : '준일', 
    [GENDER] : 'male', 
    age :30


}

console.log(iu[NAME],suzi[NAME],ji[NAME])
console.log(iu,suzi,ji)



console.log('-----------------------------------------------------------------------------------------------------'); 


//열거 대상에서 제외이기 때문에... Symbol prop은 존재하지 않음 
for(const e in iu){
    console.log(iu[e])
}

//일반 prop만 접근 가능 
Object.getOwnPropertyNames(iu).forEach(v=>{
    console.log(v, '  : ' , iu[v]);
})

//이 메소드를 Symbol prop만 접근 가능 
Object.getOwnPropertySymbols(iu).forEach(v=>{
    console.log(v, " : " , iu[v]); 
})

//Symbol prop  + 일반 prop 하려면.. 
Reflect.ownKeys(iu).forEach(v=>{
    console.log(v, " : " , iu[v]); 
})





console.log('-----------------------------------------------------------------------------------------------------'); 


const obj3 = {

    [Symbol('a')] : 1
}

const d = Reflect.ownKeys(obj3); 
console.log('d--->', d)
console.log(d[0])
console.log(obj3[d[0]])



console.log('-----------------------------------------------------------------------------------------------------'); 





const obj2 =()=>{

    const aa = {a : 0}

    return {

        [aa] :10,
        a : aa

    }

}

const testf = obj2(); 
console.log(testf); 
console.log(testf.a)
