function tablas(){
    debugger
    let resp = "", tab = "", ini = "", fin = "", r = 0, msg = ""
    tab = document.getElementById("tabla").value
    ini = document.getElementById("vi").value
    fin = document.getElementById("vf").value
    resp = document.getElementById("resp")
    tab = parseInt(tab)
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      r = ini * tab
      msg = msg + `${ini}*${tab}=${r}` + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  function tabla_7(){
    debugger
    let resp = "", tab = 7, ini = 1, fin = "", r = 0, msg = ""
    fin = document.getElementById("vf").value
    resp = document.getElementById("resp")
    tab = parseInt(tab)
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      r = ini * tab
      msg = msg + `${r}` + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  function mensa(){
    debugger
    let resp = "", msj = "", ini = 1, fin = "", msg = ""
    resp = document.getElementById("resp")
    msj = document. getElementById("msj").value
    fin = document.getElementById("vf").value
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      msj
      msg = msg + msj + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  function sumas(){
    debugger
    let resp = "", tab = 10, ini = 1, fin = 12, r = 0, msg = ""
    resp = document.getElementById("resp")
    tab = parseInt(tab)
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      r = ini + tab
      msg = msg + `${ini}+${tab}=${r}` + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  function multiplos(){
    debugger
    let resp = "", numer = "", ini = 1, fin = "", r = 0, msg = ""
    numer = document.getElementById("num").value
    fin = document.getElementById("vf").value
    resp = document.getElementById("resp")
    numer = parseInt(numer)
    ini = parseInt(ini)
    fin = parseInt(fin)
    while (ini <= fin) {
      r = ini * numer
      msg = msg + `${r}` + "\n"
      ini = ini + 1
    }
    resp.innerHTML = msg
  }
  function nums(){
    debugger
    let resp = "", num1 = 0, num2 = 0, r = 0, msg = ""
    num1 = document.getElementById("vi").value
    num2 = document.getElementById("vf").value
    resp = document.getElementById("resp")
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    while (num1 < num2-1) {
      r = num1+1
      msg = msg + `${r}` + "\n"
      num1 = num1 + 1
    }
    resp.innerHTML = msg
  }
  function numpar(){
    debugger
    let resp = "", num1 = 0, num2 = 0, r = 0, msg = ""
    num1 = document.getElementById("vi").value
    num2 = document.getElementById("vf").value
    resp = document.getElementById("resp")
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    while (num1 <= num2) {
      if (num1 % 2==0){
        r=num1
         msg = msg + `${r}` + "\n"
      }
      num1 = num1 + 1
    }
    resp.innerHTML = msg
  }
  function divisores(){
    debugger
    let resp = "", num = 0, r = 0, msg = "", cont =1
    num = document.getElementById("num").value
    resp = document.getElementById("resp")
    num = parseInt(num)
    while (num > cont) {
      if (num % cont==0){
        r=cont
         msg = msg + `${r}` + "\n"
      }
      cont = cont + 1
    }
    resp.innerHTML = msg
  }