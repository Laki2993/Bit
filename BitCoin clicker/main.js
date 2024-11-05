let List1_1 = 5;
let List1_2 = 130;
let List1_3 = 5000;
let List1_4 = 100;
let List1_5 = 50;
let List1_6 = 300;
let List1_7 = 9900;
let List1_8 = 250;
let List1_9 = 100;
let List1_10 = 500;
let List1_11 = 18500;
let List1_12 = 1000;

let List2_1 = 1000;
let List2_2 = 70000;
let List2_3 = 150000;
let List2_4 = 10000;
let List2_5 = 100000;
let List2_6 = 170000;
let List2_7 = 50000;
let List2_8 = 120000;
let List2_9 = 1000000;
let Automatic = 0;


let ArrComp = [];


let CountBitcoin = 0;
let Count = 0.1;
let Fcount = document.getElementById("Fcount");
document.getElementById("Bitcoin").addEventListener("click",()=>{
    CountBitcoin += Count;
    CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
    document.getElementById("CountBit").innerHTML = CountBitcoin;
})

document.getElementById("Imuch").addEventListener("click",()=>{
document.getElementById("Buy1").style.display ="none";
document.getElementById("Buy2").style.display ="grid";
document.getElementById("ClickCK").style.border = "5px solid white";
document.getElementById("Imuch").style.border = "none";
document.getElementById("ClickCK").style.border = "none";
document.getElementById("Imuch").style.border = "5px solid white";
})

document.getElementById("ClickCK").addEventListener("click",()=>{
    document.getElementById("Buy2").style.display ="none";
    document.getElementById("Buy1").style.display ="grid";
    document.getElementById("ClickCK").style.border = "5px solid white";
    document.getElementById("Imuch").style.border = "none";
    })



function rev(){
document.getElementById("List1_1").className = "b";
document.getElementById("List1_5").className = "b";
document.getElementById("List1_9").className = "b";
document.getElementById("List1_2").className = "b";
document.getElementById("List1_6").className = "b";
document.getElementById("List1_10").className = "b";
document.getElementById("List1_3").className = "b";
document.getElementById("List1_7").className = "b";
document.getElementById("List1_11").className = "b";
document.getElementById("List1_4").className = "b";
document.getElementById("List1_8").className = "b";
document.getElementById("List1_12").className = "b";
}



document.getElementById("List1_1").addEventListener("click",()=>{
    if(CountBitcoin > List1_1  || CountBitcoin == List1_1){
        document.getElementById("List1_1").className = "b-1";
        setTimeout(rev,1000);
        Count += 0.1;
        CountBitcoin = CountBitcoin - List1_1;
        List1_1 +=10;
        document.getElementById("l1t1").innerHTML = List1_1 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_5").addEventListener("click",()=>{
    if(CountBitcoin > List1_5  || CountBitcoin == List1_5){
        document.getElementById("List1_5").className = "b-1";
        setTimeout(rev,1000);
        Count += 0.3;
        CountBitcoin = CountBitcoin - List1_5;
        List1_5 +=100;
        document.getElementById("l1t5").innerHTML = List1_5 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_9").addEventListener("click",()=>{
    if(CountBitcoin > List1_9  || CountBitcoin == List1_9){
        document.getElementById("List1_9").className = "b-1";
        setTimeout(rev,1000);
        Count += 0.8;
        CountBitcoin = CountBitcoin - List1_9;
        List1_9 +=100;
        document.getElementById("l1t9").innerHTML = List1_9 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_2").addEventListener("click",()=>{
    if(CountBitcoin > List1_2  || CountBitcoin == List1_2){
        document.getElementById("List1_2").className = "b-1";
        setTimeout(rev,1000);
        Count += 1.2;
        CountBitcoin = CountBitcoin - List1_2;
        List1_2 +=100;
        document.getElementById("l1t2").innerHTML = List1_2 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_6").addEventListener("click",()=>{
    if(CountBitcoin > List1_6  || CountBitcoin == List1_6){
        document.getElementById("List1_6").className = "b-1";
        setTimeout(rev,1000);
        Count += 2.4;
        CountBitcoin = CountBitcoin - List1_6;
        List1_6 +=300;
        document.getElementById("l1t6").innerHTML = List1_6 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_10").addEventListener("click",()=>{
    if(CountBitcoin > List1_10  || CountBitcoin == List1_10){
        document.getElementById("List1_10").className = "b-1";
        setTimeout(rev,1000);
        Count += 5;
        CountBitcoin = CountBitcoin - List1_10;
        List1_10 +=500;
        document.getElementById("l1t10").innerHTML = List1_10 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_3").addEventListener("click",()=>{
    if(CountBitcoin > List1_3  || CountBitcoin == List1_3){
        document.getElementById("List1_3").className = "b-1";
        setTimeout(rev,1000);
        Count +=10.5;
        CountBitcoin = CountBitcoin - List1_3;
        List1_3 +=2000;
        document.getElementById("l1t3").innerHTML = List1_3 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_7").addEventListener("click",()=>{
    if(CountBitcoin > List1_7  || CountBitcoin == List1_7){
        document.getElementById("List1_7").className = "b-1";
        setTimeout(rev,1000);
        Count +=19.7;
        CountBitcoin = CountBitcoin - List1_7;
        List1_7 +=4000;
        document.getElementById("l1t7").innerHTML = List1_7 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List1_11").addEventListener("click",()=>{
    if(CountBitcoin > List1_11  || CountBitcoin == List1_11){
        document.getElementById("List1_11").className = "b-1";
        setTimeout(rev,1000);
        Count +=30.3;
        CountBitcoin = CountBitcoin - List1_11;
        List1_11 +=5000;
        document.getElementById("l1t11").innerHTML = List1_11 +"₿";
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        Count = parseFloat(Count.toFixed(1));
        Fcount.innerHTML = Count;
    }
    else{
        alert("Insufficient funds");
    }
})

function Auto(){

    CountBitcoin+=Automatic;
    CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
    document.getElementById("CountBit").innerHTML = CountBitcoin;
    Automatic = parseFloat(Automatic.toFixed(1));
    document.getElementById("CountAuto").innerHTML ="+"+Automatic+"/s"  ;
}

document.getElementById("List1_4").addEventListener("click",()=>{
    if(CountBitcoin > List1_4  || CountBitcoin == List1_4){
        document.getElementById("List1_4").className = "b-1";
        setTimeout(rev,1000);
        Automatic+=0.5;
        let Auto1 = setInterval(Auto,1000);
        CountBitcoin = CountBitcoin - List1_4;
        List1_4 +=200;
        document.getElementById("l1t4").innerHTML = List1_4 +"₿";
        Count = parseFloat(Count.toFixed(1));
    }
    else{
        alert("Insufficient funds");
    }
})

function Auto_1(){

    CountBitcoin+=Automatic;
    CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
    document.getElementById("CountBit").innerHTML = CountBitcoin;
    Automatic = parseFloat(Automatic.toFixed(1));
    document.getElementById("CountAuto").innerHTML ="+"+Automatic+"/s" ;
}

document.getElementById("List1_8").addEventListener("click",()=>{
    if(CountBitcoin > List1_8  || CountBitcoin == List1_8){
        document.getElementById("List1_8").className = "b-1";
        setTimeout(rev,1000);
        Automatic+=1;
        let Auto2 = setInterval(Auto_1,1000);
        CountBitcoin = CountBitcoin - List1_8;
        List1_8 +=200;
        document.getElementById("l1t8").innerHTML = List1_8 +"₿";
        Count = parseFloat(Count.toFixed(1));
    }
    else{
        alert("Insufficient funds");
    }
})

function Auto_2(){

    CountBitcoin+=Automatic;
    CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
    document.getElementById("CountBit").innerHTML = CountBitcoin;
    Automatic = parseFloat(Automatic.toFixed(1));
    document.getElementById("CountAuto").innerHTML ="+"+Automatic+"/s"  ;
}

document.getElementById("List1_12").addEventListener("click",()=>{
    if(CountBitcoin > List1_12  || CountBitcoin == List1_12){
        document.getElementById("List1_12").className = "b-1";
        setTimeout(rev,1000);
        Automatic+=5;
        let Auto3 = setInterval(Auto_2,1000);
        CountBitcoin = CountBitcoin - List1_12;
        List1_12 +=1000;
        document.getElementById("l1t12").innerHTML = List1_12 +"₿";
        Count = parseFloat(Count.toFixed(1));
    }
    else{
        alert("Insufficient funds");
    }
})


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

document.getElementById("Task").addEventListener("click",()=>{
    dialog.style.display = "flex";
    dialog.style.alignItems = "center";
    dialog.style.justifyContent = "center";
dialog.showModal();
})

document.getElementById("EXIT").addEventListener("click",()=>{
    dialog.close();
    dialog.style.display = "none";
    dialog.style.alignItems = "center";
    dialog.style.justifyContent = "center";
})


document.getElementById("List2_1").addEventListener("click",()=>{

    if(CountBitcoin > List2_1  || CountBitcoin == List2_1){
        document.getElementById("List2_1").className = "b-1";
        document.getElementById("List2_1").className = "Goff";
        CountBitcoin = CountBitcoin - List2_1;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t1").innerHTML = "Bought";
        document.getElementById("Task1").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
       
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List2_2").addEventListener("click",()=>{
    if(CountBitcoin > List2_2  || CountBitcoin == List2_2){
        document.getElementById("List2_2").className = "b-1";
        document.getElementById("List2_2").className = "Goff";
        CountBitcoin = CountBitcoin - List2_2;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t2").innerHTML = "Bought";
        document.getElementById("Task4").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
       
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List2_3").addEventListener("click",()=>{
    if(CountBitcoin > List2_3  || CountBitcoin == List2_3){
        document.getElementById("List2_3").className = "b-1";
        document.getElementById("List2_3").className = "Goff";
        CountBitcoin = CountBitcoin - List2_3;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t3").innerHTML = "Bought";
        document.getElementById("Task7").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
       
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List2_4").addEventListener("click",()=>{
    if(CountBitcoin > List2_4  || CountBitcoin == List2_4){
        document.getElementById("List2_4").className = "b-1";
        document.getElementById("List2_4").className = "Goff";
        CountBitcoin = CountBitcoin - List2_4;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t4").innerHTML = "Bought";
        document.getElementById("Task2").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
       
    }
    else{
        alert("Insufficient funds");
    }
})



document.getElementById("List2_5").addEventListener("click",()=>{
    if(CountBitcoin > List2_5  || CountBitcoin == List2_5){
        document.getElementById("List2_5").className = "b-1";
        document.getElementById("List2_5").className = "Goff";
        CountBitcoin = CountBitcoin - List2_5;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t5").innerHTML = "Bought";
        document.getElementById("Task5").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);  
    }
    else{
        alert("Insufficient funds");
    }
})


document.getElementById("List2_6").addEventListener("click",()=>{
    if(CountBitcoin > List2_6  || CountBitcoin == List2_6){
        document.getElementById("List2_6").className = "b-1";
        document.getElementById("List2_6").className = "Goff";
        CountBitcoin = CountBitcoin - List2_6;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t6").innerHTML = "Bought";
        document.getElementById("Task8").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List2_7").addEventListener("click",()=>{
    if(CountBitcoin > List2_7  || CountBitcoin == List2_7){
        document.getElementById("List2_7").className = "b-1";
        document.getElementById("List2_7").className = "Goff";
        CountBitcoin = CountBitcoin - List2_7;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t7").innerHTML = "Bought";
        document.getElementById("Task3").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List2_8").addEventListener("click",()=>{
    if(CountBitcoin > List2_8  || CountBitcoin == List2_8){
        document.getElementById("List2_8").className = "b-1";
        document.getElementById("List2_8").className = "Goff";
        CountBitcoin = CountBitcoin - List2_8;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t8").innerHTML = "Bought";
        document.getElementById("Task6").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
    }
    else{
        alert("Insufficient funds");
    }
})

document.getElementById("List2_9").addEventListener("click",()=>{
    if(CountBitcoin > List2_9  || CountBitcoin == List2_9){
        document.getElementById("List2_9").className = "b-1";
        document.getElementById("List2_9").className = "Goff";
        CountBitcoin = CountBitcoin - List2_9;
        Count = parseFloat(Count.toFixed(1));
        document.getElementById("l2t9").innerHTML = "Bought";
        document.getElementById("Task9").style.backgroundImage = "url(/img/On.png)"
        CountBitcoin = parseFloat(CountBitcoin.toFixed(1));
        document.getElementById("CountBit").innerHTML = CountBitcoin;
        ArrComp.push(1);
    }
    else{
        alert("Insufficient funds");
      
    }
})

function Win(){
    if(ArrComp.length == 9){
        clearInterval(Www);
        document.getElementById("End").showModal();
        document.getElementById("End").style.display= "flex";
    }
}
let Www = setInterval(Win, 1000);

document.getElementById("WinExit").addEventListener("click",()=>{
    document.getElementById("End").style.display= "none";
    location.reload();
});





