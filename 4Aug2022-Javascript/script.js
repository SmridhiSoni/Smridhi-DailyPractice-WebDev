console.log(new Date().getDay());
let dayName;

switch (new Date().getDay()) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // present day 
document.getElementById("p1").innerHTML="Today is "+dayName;
function fnpro(){
    let l=document.getElementById("l").value;
    let r=document.getElementById("r").value;
    let k=document.getElementById("k").value;
    l=Number(l);
    r=Number(r);
    k=Number(k);
    let count=0;
    for( let i=l;i<=r;i++){
  if(i%k==0){
    count++;
  }

    }
    document.getElementById("demo").innerHTML=count;

}
