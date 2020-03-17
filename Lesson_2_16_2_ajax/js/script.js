// ajax(url, method, functionName, dataArray)
// POST -> date = '2020-03-17'

document.querySelector('button').onclick = function(){
    let dateInput = document.querySelector('#input-date');
    let date = {'date' : dateInput.value};
    ajax('datetime.php', 'POST', showTime, date);
}

function showTime(data) {
    data = JSON.parse(data);
    console.log(data);
    alert(data.F);
}