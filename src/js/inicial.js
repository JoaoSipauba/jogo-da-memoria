if (localStorage.getItem('top1') === null || localStorage.getItem('top1') === '800') {
    document.write('')
}

else {
    var rankTxt = `<h2>Recorde de ${localStorage.getItem('recordista')} em ${localStorage.getItem('top1')}s</h2>`
    document.write(rankTxt)
}
$('#btn_iniciar').on('click', function () {
    var player = document.getElementById('inputName').value;
    if (player === '') {
        $('#inputName').attr('required', 'req');
    }

    if (player !== '') {
        localStorage.setItem('player', player);
        window.location.href = "src/html/main.html";
    }
})

$('#inputName').keyup(function (event) {
    var inputValue = event.target.value.trim()
    if (inputValue !== '') {
        $('#inputName').removeAttr('required');
    }
})