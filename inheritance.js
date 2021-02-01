class Parent{
constructor(){
  this.parentName="tanvir";
  this.mothername="jinnatun";
}
 }


class Child extends Parent{
 constructor( Cname){
   super();
   this.name=Cname;
 }
 getFullname(){
   return this.name+' '+this.parentName+' '+this.mothername;
 }

}
const childName=new Child("maahi");
const childName2=new Child("sixan");
const childName3=new Child("ibrahim");
console.log(childName.getFullname());
console.log(childName2.getFullname());
console.log(childName3.getFullname());