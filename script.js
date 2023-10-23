function check() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('txtyear')
    let res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERRO] Check the date and try again')
    } else {
        
    }
}