
const angkaDOM = document.getElementById("angka")
let data = 0

function render(){
   let getData = JSON.parse(localStorage.getItem("nomor"))
   if (getData != null){
       data = getData
   }
    angkaDOM.innerHTML = data

}
render()
function plus(){
    if (data >=20){
        return alert("tidak boleh lebih dari 20")
    }
    data = data + 1
    localStorage.setItem("nomor", JSON.stringify(data))
    angkaDOM.innerHTML = data
}
function minus(){
    if (data <=0){
        return alert("tidak boleh minus")
    }
    data = data - 1
    localStorage.setItem("nomor", JSON.stringify(data))
    angkaDOM.innerHTML = data
}
function bayar(){
    data = 0
    render()
    alert("terima kasih")
}

