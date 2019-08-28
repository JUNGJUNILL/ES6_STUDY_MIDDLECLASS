let className = 'class'; 
let obj = {}; 

obj ={

    'ab cd' : 'AB CD'

}

console.log(obj);
console.log(obj['ab cd']); 

const obj03 = {

    ['A'+className] : 'A급'

}

console.log(obj03); 
console.log(obj03['Aclass'])
console.log(obj03['A'+className])


console.log('-----------------------------------------------------------------------------------------------------'); 

const x = ()=>{

    const a = Symbol('a'); 

    return{
        [a] : 10,
        // { Symbol('a') : 10 } 
        a : a
    }

}

const y = x(); 
console.log(y); 
console.log(y.a); 
console.log(y[y.a])



const NAME = Symbol('이름'); 
const GENDER = Symbol('성별'); 
//아... Symbol은 열거 대상에서 제외되기 때문에 
//예를들면 조건식을 달아서 for문을 돌릴 필요가 없다... 이런 의미지 않을까? 


const iu = {

        [NAME] : '아이유',    //Symbol을 객체의 프로퍼티 키 로 하기 위해서는 반드시 []를 해줘여 한다.(문법이자 약속) 
        [GENDER] : 'female', 
        age :26
}

//.log(iu[NAME] , " : " , iu[GENDER]); 
Reflect.ownKeys(iu).forEach(v=>{
    console.log(v, " : " , iu[v]); 
})

const obj3  = {

        [Symbol('a')] : 1


}
const d = Reflect.ownKeys(obj3); 
console.log('d--->', d)
console.log(obj3[d[0]])
