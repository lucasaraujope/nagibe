let valueDisplays = document.querySelectorAll(".alunos__number");
let interval = 20000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});


let videoAtual = document.querySelector('.layer-videos');

let videoNovo = document.querySelectorAll('.videos__botoes');

function trocar(){
    document.getElementById("videos").scr = videoAtual;
    let aux = videoAtual;
    videoAtual = videoNovo;
    videoNovo = aux;
}
    
function changeVideo(embedUrl) {
        document.getElementById("video").src = embedUrl;
}

function changeVideo2(embedUrl) {
        document.getElementById("video2").src = embedUrl;
}

  
const checkbox = document.getElementById('marcar');
checkbox.addEventListener('change', (event) => {
const sessao = document.getElementById('sessao')
        if(event.target.checked) {
            sessao.className = "ocultar"
        } else {
            sessao.className = "mostrar"
        }
})
    
        const checkbox2 = document.getElementById('marcar2');
        checkbox2.addEventListener('change', (event) => {
            const sessao = document.getElementById('sessao2')
            if(event.target.checked) {
                sessao2.className = "ocultar"
            } else {
                sessao2.className = "mostrar"
            }
        })
     

        const checkbox3 = document.getElementById('marcar3');
        checkbox3.addEventListener('change', (event) => {
            const sessao = document.getElementById('sessao3')
            if(event.target.checked) {
                sessao3.className = "ocultar"
            } else {
                sessao3.className = "mostrar"
            }
        })
      

        const checkbox4 = document.getElementById('marcar4');
        checkbox4.addEventListener('change', (event) => {
            const sessao = document.getElementById('sessao4')
            if(event.target.checked) {
                sessao4.className = "ocultar"
            } else {
                sessao4.className = "mostrar"
            }
        })
     

        const checkbox5 = document.getElementById('marcar5');
        checkbox5.addEventListener('change', (event) => {
            const sessao = document.getElementById('sessao5')
            if(event.target.checked) {
                sessao5.className = "ocultar"
            } else {
                sessao5.className = "mostrar"
            }
        })
      