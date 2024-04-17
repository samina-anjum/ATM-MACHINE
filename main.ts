//#!/usr/bin/env node
import inquirer from "inquirer";

let myBlances=0;
let IsContinue=true;
const pinCode= 1234;
const message= "wel come to my ATM";
console.log(message);
//......................................................

let pin_ans=await inquirer.prompt({
  type:"number",
  name:"ans",
  message:"enter your pin code:"
  
})

if(pin_ans.ans=== 1234){ 
  
  {do {
  let ans =await inquirer.prompt({
    "type":"list",
    "name":"list",
    message:" select my options",
    choices: [
      "Deposit ",
      "Withdraw ",
      "Deposit ",
      "fast cash",
      "Balance Check",
    ]

  })
  //........................................Deposit...............................//
  if(ans.list=== "Deposit "){
    let ans= await inquirer.prompt({
      "type":"number",
      "name":"Deposit_amount",
      message:"please enter your amount "
    })
    if(ans.Deposit_amount>0){
      myBlances= myBlances + ans.Deposit_amount 
      console.log(myBlances);
  
  }
  
}

//............................""Withdraw""...

else if(ans.list=== "Withdraw_amount "){
  let ans= await inquirer.prompt({
    "type":"number",
    "name":"Withdraw_amount",
    message:"please enter your amount "
  })
  if(ans.Withdraw_amount <= myBlances){
    myBlances= myBlances - ans.Withdraw_amount 
    console.log(myBlances);
  
  }else{
    console.log("insufficient balance");
  }
  
}

//............................""fast cash""...

else if(ans.list=== "fast cash"){
  let ans= await inquirer.prompt({
    "type":"list",
    "name":"fast_cash",
    message:"please select one ",
    choices: [
      "500",
      "1000",
      "2000"],
  })
  if(ans.fast_cash <= myBlances){
    if(ans.fast_cash=== "500"){
      myBlances-= ans.fast_cash 
      console.log(myBlances);
  
  }else if(ans.fast_cash=== "1000"){
    myBlances-= ans.fast_cash 
    console.log(myBlances);

  }else if(ans.fast_cash=== "2000"){
    myBlances-= ans.fast_cash
    console.log(myBlances);
  
}
}
}

//............................""Balance Check""..

else if(ans.list=== "Balance Check"){
  console.log(` your balance is :&{myBlances} `);
}

//............................"while condition"...

let while_ans = await  inquirer.prompt( {
  "type":"confirm",
  "name":"condition",
  message:"do you continue ",
  
})
if(while_ans. condition=== false) {IsContinue= false
}
}
while (IsContinue) ;
  }
}else{console.log( "invalid pin code");


}


