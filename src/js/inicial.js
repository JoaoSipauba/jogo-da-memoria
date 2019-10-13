if (localStorage.getItem('top1') === null || localStorage.getItem('top1') === '800') {
    document.write('')
}
else {
    var rankTxt = `<h2>Recorde de ${localStorage.getItem('recordista')} em ${localStorage.getItem('top1')}s</h2>`
    document.write(rankTxt)
}
$('#btn_iniciar').on('click', function () {
    var player = document.getElementById('inputName').value
    localStorage.setItem('player', player)
})