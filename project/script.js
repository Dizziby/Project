let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let rashod1 = prompt("Введите обязательную статью расходов в этом месяце");
let pashod2 = prompt("Во сколько обойдется?");


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        rashod1 : rashod1
    },
    optionalExpenses: null,
    income: null,
    savings: false
};
let budgetOneDay = money/30;
alert("бюджет на 1 день - " + budgetOneDay + " р");
