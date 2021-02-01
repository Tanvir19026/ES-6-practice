const age=[10,20,30];
const age2=[20,30,20];
const age3=[10,20,30,40];
const result=age.concat(age2).concat([88]).concat(age3);
const result2=[...age, ...age2,88,...age3];



// old version;
const minister=300;
const businessman=400;
const sochib=500;
const result3=Math.max(minister,businessman,sochib);
// console.log(result3);

const ArrayList=[100,200,300,400];
const maximum=Math.max(...ArrayList);
console.log("maximum: ",+maximum);

