

const dia = document.getElementById('data');
 const hora = document.getElementById('hour');
 const min = document.getElementById('min');
const sec = document.getElementById('sec');

const lancamento = "20 jul 2023"



 function countDown() {
     const dataLanc = new Date(lancamento);

     const hoje = new Date();



     const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
   const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
     const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

     dia.innerHTML = formatoTempo(finalDias) + 'D';
     hora.innerHTML = formatoTempo(finalHoras) + 'H';
     min.innerHTML = formatoTempo(finalMinutos) + 'M';
     sec.innerHTML = formatoTempo(finalSegundos) + 'S';

}


 function formatoTempo(tempo) {
     return tempo < 10 ? `0${tempo}` : tempo;
 }
 countDown();
 setInterval(countDown, 1000);



 let sabado = document.querySelector('#sabado')
 sabado.classList.add('card-off')


function highlightCards(selector) {
    let element = document.querySelector(selector);

    
    element.classList.toggle("card-highlight");


}





 function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {

        let ingresso1 = document.querySelector('#quinta');
       let ingresso2 = document.querySelector('#sexta');
        let ingresso3 = document.querySelector('#sabado');
        let ingresso4 = document.querySelector('#domingo');


       let code = event.code;


         if (code == "Digit1") {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
             ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
            

        }

         if (code == "Digit2") {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
           ingresso3.classList.remove("card-highlight");
           ingresso4.classList.remove("card-highlight");
        }

         if (code == "Digit3") {
           ingresso1.classList.remove("card-highlight");
             ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
             ingresso4.classList.remove("card-highlight");
         }

         if (code == "Digit4") {
             ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
             ingresso3.classList.remove("card-highlight");
           ingresso4.classList.toggle("card-highlight");
       }

    }, false);

}



 const ingressos = []


 function selectCard(selector) {
     let element = document.querySelector(selector);

     element.classList.toggle('card-selected');

     if (ingressos.includes(selector)) ingressos.pop(selector);

     else ingressos.push(selector);

 }



 function showSelectedCards() {
     if (ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);

 }

 addKeyboardEventListeners();









