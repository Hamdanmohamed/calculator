function calculator(val){
    document.getElementById("display").value =document.getElementById("display").value + val
}

function cleardisplay(){
    document.getElementById("display").value ="";
}


function result(){
    var data = document.getElementById("display").value
    var total=eval(data)
    document.getElementById("display").value=total
}