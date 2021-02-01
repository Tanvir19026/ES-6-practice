// function doubleIt(num){
//   return num*2;
// }
// let result=doubleIt(5);
                                    //ager diner 
// const doubleIt=function(num){
//   return num*2;
// }


//es-6
// one perameter
const doubleIt=num=>num*2; //const funtionName = perameter => return ;
let result1=doubleIt(10);
// console.log(result1);


//multiple perameter

const add=(num1,num2)=>num1+num2;
const result2=add(10,10);
// console.log(result2);
//multiple math
const doMath=(x,y)=>{
  const sum=x+y;
  const min=x-y;
  const mul=x*y;
  const div=x/y;
  return sum+min+mul+div;
  
}
const result4=doMath(100,100);
console.log(result4);

//none peremater
const give5=()=>5;
// const result=give5();
// console.log(result);
