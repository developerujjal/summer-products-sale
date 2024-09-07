
document.getElementById("btn-buy").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy2").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy3").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy4").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy5").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy6").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy7").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy8").addEventListener("click", function (event) {
    productName(event);
})

document.getElementById("btn-buy9").addEventListener("click", function (event) {
    productName(event);
})




/* Coupon Code Js */


document.getElementById("coupon-field").addEventListener("keyup", function (event) {
    let inputFieldValue = event.target.value;
    if (inputFieldValue === "SELL200") {
        let buttonApply = document.getElementById("btn-coupon-apply");
        buttonApply.removeAttribute("disabled");
        buttonApply.style.backgroundColor = "#E527B2";
        
    }
})


document.getElementById("btn-coupon-apply").addEventListener("click", function () {
    let inputFieldElement = document.getElementById("coupon-field");
    let inputFieldFinalValue = inputFieldElement.value;
    let couponCode = "SELL200";
    if (inputFieldFinalValue === couponCode) {
        let totalPriceValue = converInterTextToNumber("totalPrice-amount");
        let discountPrice = discount(totalPriceValue, 20);

        inputFieldElement.value = "";
        
        if (totalPriceValue >= 200) {
            setValue("discount-price", discountPrice);

            /*      let discountPriceElement = document.getElementById("discount-price");
                    discountPriceElement.innerText = discountPrice; */

            let totalOutput = totalPriceValue - discountPrice;

            /*      let totalAmountOnlyElement = document.getElementById("only-total-amount");
                    totalAmountOnlyElement.innerText = totalOutput; */

            setValue("only-total-amount", totalOutput);


            
            let couponFiled = document.getElementById("coupon-field");
            couponFiled.setAttribute("disabled", true);
        }

        else {
            alert("Discount for 200+ TK. Please buy More!")
        }


    }


})


