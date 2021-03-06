'use scrict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-OO', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

    let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Низкий уровень бюджета");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++){
            let a = prompt("Введите статью необязательных расходов"),
                b = prompt("Во сколько это обойдется");
            
            if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50){
                console.log("yes");
                appData.optionalExpenses[i] = b;
            } else {
                i = i - 1;
            }
            
        }
    },
    chooseIncome: function() {
        for(let i = 0; i<1; i++){
            let items = prompt("Что принесет дополнительный доходп? (Перечислите через запятую)" , "");
            if((typeof(items)) === "string" && typeof(items) != null && items !="" && items.length < 50){
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            } else {
                i--;
            }
        }
        console.log("Cпособы дополнительного заработка:");
        appData.income.forEach(function(item, i){
            
            console.log(i+1, item);
        });
    }

};

console.log("Наш объект включает следующие данные:");
for(let prop in appData){
    console.log(prop + " = " + appData[prop]);
}
