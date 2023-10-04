var optionChosen = 0; 

function changeBtnColor(){
    var number = document.querySelectorAll(".number");
    var numbers = document.querySelectorAll(".numbers");
    
    var counterOptionChosen = 0;
    if(counterOptionChosen === 0){
        for (let i = 0; i < numbers.length; i++){
            number[i].addEventListener("click", (e) =>{
                number[i].classList.toggle("clicked-btn")
                optionChosen = i + 1;
            });
        };
    }
};

changeBtnColor();


function changePage(){
    const submit = document.querySelector(".btn")

    submit.addEventListener("click",() =>{
        const main = document.querySelector(".main");

        const img = document.createElement('img');
        img.src = "./images/illustration-thank-you.svg";
        img.classList.add("img")

        const div = document.createElement('div');
        div.classList.add("div")
        const divP = document.createElement('p');
        divP.innerText = `You selected ${optionChosen} out of 5`;
        div.appendChild(divP);

        const thankY = document.createElement("p");
        thankY.innerText = "Thank you!";
        thankY.classList.add("thank");

        const p = document.createElement("p");
        p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
        p.classList.add("p")

        main.replaceChildren(img, div, thankY, p);
    });
};

changePage();