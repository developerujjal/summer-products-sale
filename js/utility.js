/* All About Product Name Added, Total Result Show, Total Amount Show Start */

let count = 0;
let total = 0;
function productName(e) {
    let productElement = e.target.parentElement.parentElement.children[2].children[0].innerText;

    let productListElement = document.getElementById("productList");

    let li = document.createElement("li");
    li.innerHTML = `
    
                <span>${count += 1}. </span> ${productElement}
    
    `
    productListElement.appendChild(li)

    let priceTotalElement = document.getElementById("totalPrice-amount");

    let totalPriceNumber = innerTextToNumber(e)

    total = total + totalPriceNumber;

    priceTotalElement.innerText = total;

    let totalAmountOnly = document.getElementById("only-total-amount");
    let totalPriceAmount = converInterTextToNumber("totalPrice-amount");

    totalAmountOnly.innerText = totalPriceAmount;


    let discountAmount = converInterTextToNumber("discount-price");
    let amountOnlyTotal = converInterTextToNumber("only-total-amount");
    let finalDiscount = amountOnlyTotal - discountAmount;
    totalAmountOnly.innerText = finalDiscount;


    /* 
    let discountAmount = converInterTextToNumber("discount-price");
    let amountOnlyTotal = converInterTextToNumber("only-total-amount");
    let finalDiscount = amountOnlyTotal - discountAmount;
    totalAmountOnly.innerText = finalDiscount;
    
    */

}



function innerTextToNumber(e) {
    let priceElement = e.target.parentElement.parentElement.children[2].children[1].children[0];
    let priceElementText = priceElement.innerText;
    let priceNumber = parseFloat(priceElementText);
    return priceNumber;
}


function converInterTextToNumber(elementId) {
    let element = document.getElementById(elementId);
    let elementText = element.innerText;
    let elementValue = parseFloat(elementText);
    return elementValue;
}




/* All About Product Name Added, Total Result Show, Total Amount Show End */


function discount(totalPrice, value) {
    let productPrice = totalPrice;
    let discountMulti = productPrice * value;
    let discountPrice = discountMulti / 100;
    return discountPrice;
}


function setValue(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;
}