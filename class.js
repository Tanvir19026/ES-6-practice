class Student{
 constructor(sId,sName){
   this.id=sId;
   this.name=sName;
   this.schoolName="Nabarun Biddya Niketon";
 }
 

}
const student1=new Student(12,"tanvir");
const student2=new Student(22,"jinnatun");
student1.name="rafi";
student2.name=" meem";
console.log(student1,student2);