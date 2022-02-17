// Help Btn

const btnHelp = document.getElementById("help");

const activeParagrafo = () =>{
    const p = document.querySelector(".container__text p");

    p.classList.toggle("ativo");
}

btnHelp.addEventListener("click", activeParagrafo);


// DarkMode

const btnDark = document.getElementById("darkMode");

const darkThemes = () =>{
    document.body.classList.toggle("dark");
}

btnDark.addEventListener("click", darkThemes);



// GERAÇÃO E MANIPULAÇÃO

const btnGerar = document.getElementById("gerar");

btnGerar.addEventListener("click", function(){
    location.reload()
})

const tela = document.getElementById("tela");

const aleatorio = Math.floor(Math.random() * (200000 - 100000 + 1)+ 100000);

const random = () =>{

   return tela.innerHTML = `${aleatorio}`;
}

random()

const pass = () =>{
    const inp = document.getElementById("input");

    console.log(aleatorio);

    if(Number(inp.value) === aleatorio){
        alert("Foi");

    }else{
        alert("Tente Novamente");
        location.reload();
    }
}