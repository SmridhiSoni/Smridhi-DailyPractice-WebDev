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