const person = { name:'rafi',id:'19026',address:'muktagcha',mobileno:'01765341047',gfName:'jinnatun'}

 const {address,gfName}=person;
 
 


//  console.log(gfName,address);
//  console.log(gfName,address);
//  console.log(gfName,address);

const friendsName=['salam','rogi','roni','hujjot'];
const[firstName,secondName,...remainfrined]=friendsName;
console.log("remainfriend:",remainfrined);
console.log(firstName,secondName);

const complexObject={
name:"rafi",
info:{
  address:'tangsil',
  phone:'01777',

}

}
const{phone}=complexObject.info;
console.log(phone);