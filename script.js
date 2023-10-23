function check() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('txtyear')
    let res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERRO] Check the date and try again')
    } else {
        let fsex = document.getElementsByName('radsex')
        let yearsold = year - Number(fyear.value)
        let gender = ''
        let img =document.createElement('img')
        img.setAttribute('id', 'photo')
        if(fsex[0].checked) {
            gender = 'man'
            if (yearsold >= 0 && yearsold < 10) {
                img.setAttribute('src', '/images/baby-boy.jpg')
            } else if (yearsold < 21) {
                img.setAttribute('src', '/images/boy.jpg')
            } else if (yearsold < 50) {
                img.setAttribute('src', '/images/man.jpg')
            } else {
                img.setAttribute('src', '/images/old-man.png')
            }

        } else if (fsex[1].checked) {
            gender = 'woman'
            if (yearsold >= 0 && yearsold < 10) {
                img.setAttribute ('src', '/images/baby-girl.jpg',)
            } else if (yearsold < 21) {
                img.setAttribute ('src', '/images/girl.jpg',)
            } else if (yearsold < 50) {
                img.setAttribute ('src', '/images/woman.jpg',)
            } else {
                img.setAttribute ('src', '/images/old-woman.jpg',)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${gender} with ${yearsold} years old.`
        res.appendChild(img)

    
    }
}