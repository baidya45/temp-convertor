let c = document.getElementById("c");
let f = document.getElementById("f");
let k = document.getElementById("k");

let cv;
let fv;
let kv;

function render(){
    c.value=cv;
    f.value=fv;
    k.value=kv;
    }

c.addEventListener("input",(e)=>{
    if(e.target.value==""){
        return;
    }
    cv=Number(e.target.value);
    fv= cv*(9/5)+32;
    kv = cv+273;
    render();
})
f.addEventListener("input",(e)=>{
    if(e.target.value==""){
        return;
    }
    fv=Number(e.target.value);
    cv= ((fv-32)/9)*5;
    kv = cv+273;
    render();
})
k.addEventListener("input",(e)=>{
    if(e.target.value==""){
        return;
    }
    kv=Number(e.target.value);
    if(kv<=-1){
        cv="";
        fv="null";
    }
    else{

        cv = kv-273;
        fv= cv*(9/5)+32;
        render();
    }
})


render();
