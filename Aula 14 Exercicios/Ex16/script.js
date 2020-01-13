function contador(){
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossivel contar`
        window.alert("[ERRO]Verifique os dados e tente novamente")
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo 0 invalido, considerando passo 1")
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c<=f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
