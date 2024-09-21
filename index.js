
let buttons = document.querySelectorAll(".btnn");
let totalPrice = 0;
let manplush = 0;
let manmaynas = 40;
let smallclick = 0;
let bigclick = 4;
let maxPrice = 2200;



for (let btnn of buttons) {
    btnn.addEventListener("click", function () {

        if (smallclick >= bigclick || totalPrice >= maxPrice) {
            if (btnn.style.background === "blue") {

                alert("Alredy boking");
                return;
            }

            else {

                alert("Apnar ar seat nite parben na");
                return;
            }
        }

        if (btnn.style.background === "blue") {

            alert("Alredy boking");
            return;
        }

        if (totalPrice >= 1650) {
            document.getElementById("copun-input").removeAttribute("disabled")
            document.getElementById("copun-button").removeAttribute("disabled")

        }


        btnn.style.background = "blue"
        let buttonText = btnn.innerText;
        let price = 550;
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between pt-5"> 
                <h1> ${buttonText} </h1> 
                <h1> Hanif </h1>
                <h1> ${price} </h1> 
            </div>
        `;


        document.getElementById("title").classList.add("hidden")
        document.getElementById("seat-price").appendChild(div);
        totalPrice += price;
        document.getElementById("ticet-total").innerText = totalPrice.toFixed(2);


        //  seat-plush button
        manplush++
        let seatplus = document.getElementById("seat-plus");
        seatplus.innerText = manplush;

        //  seat-maunas button//
        manmaynas--
        let seatmaunas = document.getElementById("total-sets");
        seatmaunas.innerText = manmaynas;

    });
}


// .................cuopt function.......................hfghb................

document.getElementById("copun-button").addEventListener("click", function () {

    let copuninput = document.getElementById("copun-input");
    let copuninputvalue = copuninput.value;

    if (copuninputvalue === "NEW 50%") {
        let totalparsent = totalPrice * 20 / 100;
        let totaldiscount = totalPrice - totalparsent;
        document.getElementById("discount-total").innerText = totalparsent;
        document.getElementById("discount-alltotal").innerText = totaldiscount.toFixed(2);
        document.getElementById("discount-price").classList.remove("md:hidden")
        document.getElementById("copun-form").classList.add("hidden")
    }
    // others sistyme
    else if (copuninputvalue === "Couple 20%") {
        let cupelparsent = totalPrice * 20 / 100;
        let cupeltotaldiscount = totalPrice - cupelparsent;
        document.getElementById("discount-total").innerText = cupelparsent;
        document.getElementById("discount-alltotal").innerText = cupeltotaldiscount.toFixed(2);
        document.getElementById("discount-price").classList.remove("md:hidden")
        document.getElementById("copun-form").classList.add("hidden")
    }
    else {
        alert("faild")
    }

})


// .....form validation............................//
document.getElementById("input-number").addEventListener("input", function () {
    let inputnumber = document.getElementById("input-number");
    let numbervalue = inputnumber.value;
    if (numbervalue.length >= 11) {
           document.getElementById("next-btn").removeAttribute("disabled")
    }
    
    else if (numbervalue.length <= 10) {
           document.getElementById("next-btn").setAttribute("disabled",true)
    }
    

})


// popup button//

document.getElementById("next-btn").addEventListener("click", function(e){
    e.preventDefault()
    document.getElementById("popup-container").classList.remove("hidden")
})

document.getElementById("popup-btn").addEventListener("click", function(){
    // document.getElementById("popup-container").classList.add("hidden")
   window.location.reload();
})