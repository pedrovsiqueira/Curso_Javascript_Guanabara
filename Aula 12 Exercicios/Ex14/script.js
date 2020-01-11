function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}


