function contar(){
    var ini = window.document.getElementById('tini')
    var fim = window.document.getElementById('tfim')
    var pas = window.document.getElementById('tpas')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            alert('[ERRO] passo inválido! Considerando passo = 1')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1}`
            }

        } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}