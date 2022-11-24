const table = document.getElementById("transaction");//list to display
const Name = document.getElementById("Name");
const Total = document.getElementById("balance");
const Amount = document.getElementById("Amount");
const AddExpense = document.querySelector("Button");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const inputerrName = document.getElementById("inputerrName");
const inputerrAmount = document.getElementById("inputerrAmount");


window.onload = () => {//execute immediatly after page is loaded
  Name.value = ""; //take value from input with id name
  Amount.value = "";//take value from input with id amnt
};

let transactions = [];
AddExpense.addEventListener("click", () => {addTransaction()});//add expense == button

let addTransaction = () => {
  if (Name.value.trim() === "" || Amount.value.trim() === "") {//trim to remove white space
    alert("please add text and amount");
  } else {
    const transaction = {
      name: Name.value,
      amount: parseInt(Amount.value),
    };

    transactions.push(transaction);//object pushed to array
    yourBalance();
    displayTransaction();
    Name.value = "";
    Amount.value = "";
  }
};

let displayTransaction = () => {
  let Data = "";
  const result = transactions.map((item) => {
    Data += 
  `<li>${item["name"]}
  <div>
 <button type="button" class="${ Number(item["amount"]) > 0 ? "btn btn-success" : "btn btn-danger"} ">₹${Math.abs(Number(item["amount"]))} </button>
 </div>
  </li> `;
  });
  //abs means absolotue value
  table.innerHTML = Data;

};

let yourBalance = () => {
  const amounts = transactions.map((amount) => {  return amount["amount"];});

  const total = amounts.reduce((acc, item) => (acc += item)).toFixed(2);//tofixed used to approximate to nearest value

  const income = amounts .filter((item) => { return item > 0; }).reduce((acc, item) => (acc += item), 0) .toFixed(2);

  const expense = amounts .filter((item) => {return item < 0;  }).reduce((acc, item) => (acc += item), 0).toFixed(2);

  moneyPlus.innerText = `+${income}`;//to return textcontent
  moneyMinus.innerText = `${expense}`;
  Total.innerText = `₹${total}`;
};