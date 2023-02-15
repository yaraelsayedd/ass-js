var bookmarkerNameInputs = document.getElementById("bookmarkName")//masek input kolo//
var bookmarkURLInputs = document.getElementById("bookmarkURL")
console.log(bookmarkURLInputs)
var alertName = document.getElementById('alertName')
var elertURL = document.getElementById("elertURL")
var arr = []
//-----add-----//
if(localStorage.getItem("websites")!=null)
{arr=JSON.parse(localStorage.getItem("websites"))

display(arr)
}
function add() {
    if (validationNAME() === true & validationURL() === true) {  //validation mlyaaaaan hydeef w y4a8al function add
        var website = {
            sitename: bookmarkerNameInputs.value,
            siteurl: bookmarkURLInputs.value

        }
        arr.push(website)
        localStorage.setItem("websites",JSON.stringify(arr))
        console.log(arr)

        display()
        clearITEMS()
    }





}


//----------------display---------//
function display() {
    var cartoona = ``
    for (var i = 0; i < arr.length; i++) {
        cartoona += `
        <tr>
        <td>${arr[i].sitename}</td>
        
        <td>
        
        <button class=" btn btn-primary">visit</button>
        <button onclick="deleteItem(${i})"  class=" btn btn-danger">delete</button>
    </td>
    </tr>
        
        `

    }
    document.getElementById("tablerow").innerHTML = cartoona
}
//---DELETE------------//

function deleteItem(i) {

    arr.splice(i, 1)
    display()
}
//------clear---------//
//-------------clear-----------//
function clearITEMS() {
    bookmarkerNameInputs.value = "";
    bookmarkURLInputs.value = "";

}
//------validation-------//
function validationNAME() {
    if (bookmarkerNameInputs.value == "") {   //fadiiii//
        alertName.classList.remove("d-none")   //show//
        return false;
    }
    else {                                       //mesh fadiiii//
        alertName.classList.add("d-none")     //hide alert//
        return true;                                //lw hia true hidif 3adii     f ht3ml call lel function eli esmaha add
    }

}
//-----------url//
function validationURL() {
    if (bookmarkURLInputs.value == "") {   //fadiiii//   //false//
        elertURL.classList.remove("d-none")   //show//
        return false;
    }
    else {                                       //mesh fadiiii//
        elertURL.classList.add("d-none")     //hide alert//
        return true;                                //lw hia true hidif 3adii     f ht3ml call lel function eli esmaha add
    }

}

