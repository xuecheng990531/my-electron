let fs=require("fs")
let btn=document.querySelector('button')
let i=0;

btn.onclick=function(){
    i++;
    fs.writeFile(`new${i}.txt`,'text',(err)=>{
        if (err){
            console.log(err)
        }else{
            console.log('success!')
        }
    })
}