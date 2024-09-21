

let buttons = document.querySelectorAll(".btn");
let totalPrice = 0;
let manplush = 0;
let manmaynas = 40;
let smallclick = 0; 
let bigclick = 4; 
let maxPrice = 2200; 

for (let btn of buttons) {
    btn.addEventListener("click", function () {
        if (smallclick >= bigclick || totalPrice >= maxPrice) {
            if(btn.style.background === "blue"){
                alert("Alredy boking");
                return;
            }
            else{
                alert("Apnar ar seat nite parben na")
                return;
            }
        }

        if(btn.style.background === "blue"){
            alert("Alredy boking");
            return;
        }


        btn.style.background = "blue"
        let buttonText = btn.innerText;
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
        document.getElementById("ticet-total").innerText = totalPrice;


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