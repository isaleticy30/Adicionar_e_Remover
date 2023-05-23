const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const btn2=document.querySelector("#btn2_copiar")
const todasCarteiras=[...document.querySelectorAll(".carteira")]

todasCarteiras.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const carteira=evt.target
        carteira.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const carteirasSelecionadas=[...document.querySelectorAll(".selecionado")]
    carteirasSelecionadas.map((el)=>{
        caixa2.appendChild(el) //AppendChild: Anexa um filho ao elemento caixa2
    })
})
//Botão Reverter e Inserir os Elementos da Caixa2 para a Caixa1
todasCarteiras.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const Revertercarteiras=evt.target
        Revertercarteiras.classList.toggle("removido")
    })
})

btn2.addEventListener("click", ()=>{
    const carteirasRevertidas=[...document.querySelectorAll(".removido")]
    carteirasRevertidas.map((el)=>{
        caixa1.appendChild(el)
    })
})