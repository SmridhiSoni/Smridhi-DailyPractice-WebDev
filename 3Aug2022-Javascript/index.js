function funPro(){
    let l=document.getElementById("l").value;
 
    l=Number(l);
   
    let count =0;
    for(let i=0;i<l;i++){
        if(i%2==0){
            count+=i;
            document.getElementById("p2").innerHTML=i;
        }
        document.getElementById("p1").innerHTML=count;
    }
   

}