const rates = { USD: 1, EUR: 0.91, INR: 83.5 };
function currency(){
    let amount=Number(document.getElementById("input").value);
    let from =document.getElementById("fromCurrency").value;
    let to=document.getElementById("ToCurrency").value;
    
    let convertedAmount = amount * (rates[to] / rates[from]);
    document.getElementById("result").textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}
   
