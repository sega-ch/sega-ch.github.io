let userAnsw1 = prompt("Самая яркая звезда в галактике млечный путь?");
let res = 0;
let bad = 0;

if (userAnsw1==="Солнце" || userAnsw1==="солнце")
{
    res++;
    alert("А ты хорош!");
    //second
    let userAnsw2 = prompt("Самый популярный электромобиль?");

    if (userAnsw2==="Tesla"||userAnsw2==="tesla"||userAnsw2==="Тесла"||userAnsw2==="тесла")
    {
        res++;
        alert("Хм, ты прав!");
        let userAnsw3 = prompt("Культурная столица России это?");

        if (userAnsw3==="Питер"|| userAnsw3==="Санкт-Петербург" || userAnsw3==="питер" || userAnsw3==="санкт-петербург" || userAnsw3==="Санкт-петербург" || userAnsw3==="спб" || userAnsw3==="Спб" || userAnsw3=== "СПБ")
        {
            res++;
            alert("Правильно!");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        else
        {
            bad++;
            alert("Чел, это же Питер");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        
    }
    else
    {
        bad++;
        alert("Неа, тебе стоит узнать о Илоне Маске)");
        let userAnsw3 = prompt("Культурная столица России это?");

        if (userAnsw3==="Питер"|| userAnsw3==="Санкт-Петербург" || userAnsw3==="питер" || userAnsw3==="санкт-петербург" || userAnsw3==="Санкт-петербург" || userAnsw3==="спб" || userAnsw3==="Спб" || userAnsw3=== "СПБ")
        {
            res++;
            alert("Правильно!");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        else
        {
            bad++;
            alert("Чел, это же Питер");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        
    }
}
else
{
    bad++;
    alert("Увы, но нет(");
    //second
    let userAnsw2 = prompt("Самый популярный электромобиль?");

    if (userAnsw2==="Tesla"||userAnsw2==="tesla"||userAnsw2==="Тесла"||userAnsw2==="тесла")
    {
        res++;
        alert("Хм, ты прав!");
        let userAnsw3 = prompt("Культурная столица России это?");

        if (userAnsw3==="Питер"|| userAnsw3==="Санкт-Петербург" || userAnsw3==="питер" || userAnsw3==="санкт-петербург" || userAnsw3==="Санкт-петербург" || userAnsw3==="спб" || userAnsw3==="Спб" || userAnsw3=== "СПБ")
        {
            res++;
            alert("Правильно!");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        else
        {
            bad++;
            alert("Чел, это же Питер");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        
    }
    else
    {
        bad++;
        alert("Неа, тебе стоит узнать о Илоне Маске)");
        let userAnsw3 = prompt("Культурная столица России это?");

        if (userAnsw3==="Питер"|| userAnsw3==="Санкт-Петербург" || userAnsw3==="питер" || userAnsw3==="санкт-петербург" || userAnsw3==="Санкт-петербург" || userAnsw3==="спб" || userAnsw3==="Спб" || userAnsw3=== "СПБ")
        {
            res++;
            alert("Правильно!");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        else
        {
            bad++;
            alert("Чел, это же Питер");
            alert("Конец игры( "+"Всего было 3 вопроса. "+"Правильных "+res+". Неправильных "+bad);
        }
        
    }
    
}






