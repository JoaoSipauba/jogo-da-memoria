$('#msg').hide()
$('.btn_reiniciar').on('click', function () { document.location.reload() })
$('document').ready(function () {
    if (localStorage.getItem("top1") === null) {
        localStorage.setItem("top1", 800)
    }
    let q = ""
    let elementos = ['black', 'red', 'purple', 'blue', 'white', 'hotpink', 'orange', 'green'];
    let matriz = elementos.concat(elementos);
    let tamanho = matriz.length;
    for (let i = 0; i < tamanho; i++) {
        let randomGet = Math.floor(Math.random() * matriz.length);
        q += `<div id='${matriz[randomGet]}' class="imageContainer" style="background-color: ${matriz.splice(randomGet, 1)}">
                            <div class="front"></div>
                        </div>`
        $('#content').html(q);
    }
    var t0 = performance.now();
    var click = []
    var errou = 0
    var achados = 0
    $('#b').on('click', function () {
        $('#msg').hide()
        location.href = "../../index.html";
    })
    $('.imageContainer').on('click', function (event) {
        if ($(this).find('.back').attr('class') === 'back') {
            return
        }
        let hidden = $(this).find('.front')
        hidden.removeClass('front').addClass('back')
        click.push(
            {
                nome: $(this).attr('id'),
                obj: $(this)
            }
        )
        if (click.length === 2) {
            if (click[0].nome === click[1].nome) {
                achados = achados + 1;
                if (achados === 8) {
                    var t1 = performance.now();
                    window.clearInterval(intervalo);
                    var tempo = ((t1 - t0) / 1000).toFixed(2);
                    var top1 = localStorage.getItem("top1")
                    if (tempo < top1) {
                        $('#msg').show()
                        $('#msg #mensagem').html(`<h2>você bateu o recorde em ${tempo}s.</h2>`)
                        localStorage.setItem('top1', tempo);
                        localStorage.setItem('recordista', localStorage.getItem('player'));
                    }
                    else {
                        $('#msg').show()
                        $('#msg #mensagem').html(`<h2>você ganhou em ${tempo}s.</h2>`)
                    }
                }
                errou = 0;
                $('#erros').html('');
            }
            else {
                for (const item of click) {
                    setTimeout(function () {
                        item.obj.find('.back').removeClass('back').addClass('front');
                    }, 500)
                }
                errou = errou + 1;
                if (errou == 1){
                    $('#erros').html(`<h2>Você errou ${errou} vez.</h2>`);
                }
                else{
                    $('#erros').html(`<h2>Você errou ${errou} vezes.</h2>`);
                }
            }
            click = []
            if (errou === 6) {
                $('#msg').show()
                $('#msg #mensagem').html('<h2>6 erros seguidos. Você perdeu!</h2>')
                window.clearInterval(intervalo);
            }
            
        }
    })
     
});