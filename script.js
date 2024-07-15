/////////////////// registeration//////////////

function register(){
    localStorage.clear()
    username=uname.value;
    emailid=email.value;
    password=pswd.value;
    if(username in localStorage){
        alert('already registered')
    }else{
        let user={
            username,
            password,
            emailid,
            balance:0,
            expence:0
        }
        localStorage.setItem(username,JSON.stringify(user))

        alert('reg sucess')
        // window.location='.//index.html';
        // window.location='./budget-calculator/index.html';
    }
}

/////////////////////// login ////////////////////

function login() {

let uname=username.value;
let psw=password.value;
if(uname in localStorage){
let login=JSON.parse(localStorage.getItem(uname))
if(uname==login.username && psw==login.password){
alert('login sucess')
window.location='./budget-calculator/home.html';
}else
{alert('invalid')}
}
else {
    alert('not reg')
}
}

///////////////// welcome /////////////////////




///////////////////////////add income/////////////////
totalBalance=0;

function addIncome(){
let type=incomtype.value;
let amt=incomamt.value;
amt=Math.floor(amt);

console.log(type,amt);
   
 if(type==' ' ||amt==' ' || amt<=0){
    alert('fill all feilds')

 }else{
    let cdate=new Date();
    let formdate=cdate.toLocaleString()
    totalBalance+=amt;
     console.log(totalBalance);
 
    alert('amount added successfully');
    tableHtml=`
    <tr>
    <td>${type}</td>
    <td>${amt}</td>
    <td>${totalBalance}</td>
    <td>${formdate}</td>
  </tr>   `

  incomedisplay.innerHTML=`Rs ${amt}/-`

  incomedetails.innerHTML+=tableHtml;
  localStorage.setItem('type',totalBalance)
 }
}

//////////////////// Add Expense ///////////////////

expence=0;
function addExpense(){
let type=expensetype.value;
let amt=expenseamt.value;
amt=Math.floor(amt);
if(type==' ' ||amt==' ' || amt<=0){
    alert('fill all feilds')
}else{
let cdate=new Date();
let formdate=cdate.toLocaleString()
expence+=amt;
totalBalance-=amt
alert('amount added successfully')
tableHtml=`
    <tr>
    <td>${type}</td>
    <td>${amt}</td>
    <td>${totalBalance}</td>
    <td>${formdate}</td>
  </tr>   `
  expensedisplay.innerHTML=`Rs ${amt}/-`

  expensedetails.innerHTML+=tableHtml;
  localStorage.setItem('type',expence)
}

}





