function getUrlVar() {
    var urlVar = window.location.search; // получаем параметры из урла
    var arrayVar = []; // массив для хранения переменных
    var valueAndKey = []; // массив для временного хранения значения и имени переменной
    var resultArray = []; // массив для хранения переменных
    arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
    if (arrayVar[0] == "") return false; // если нет переменных в урле
    for (i = 0; i < arrayVar.length; i++) { // перебираем все переменные из урла
        valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
        resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
        resultArray.length++;
    }
    return resultArray; // возвращаем результат
}
function getUrl() {
    var search = window.location.search.substr(1);

    var regexp = /=%22|%22/g;

    return search.split(regexp)[1];
}
function nevelization() {
    
    window.location.replace("index.htm?url=%22" + document.getElementById("siteurl").innerText + "%22");
    return;
}
window.onload = function () {
    var paramsFetch = getUrlVar();
    if (paramsFetch.length == undefined) {
        return;
    }
    if ((paramsFetch['url'] == undefined || paramsFetch['url'].length == 0)) {
        alert("Неверный формат запроса!");
        window.location.replace('index.htm');
    }
    else {
        document.getElementById("inProgress").style.display = "block";
        document.getElementById("addressForm").style.display = "none";
        if(paramsFetch['nevelizator']==undefined){       
        //$("#victimSite").load(getUrl());
        var frame = document.getElementById("victimSite");
        frame.src = getUrl();
        frame.onload = function(){ 
            $("#victimSite").contents().replace("/.*а.*/", "э");
            //frame.contentDocument.innerHTML.replace("/.*а.*/", "э");
        
        document.getElementById("startForm").style.display = "none";
        document.getElementById("mainContent").style.backgroundColor = "#FFFFFF";
        document.getElementById("victimSite").style.display = "block";
            }
        }
    }
}
