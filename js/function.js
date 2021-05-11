

   // функцыя для  выпадения случайного числа 
   function random(max) {
        // случайное число от 1 до максимум
        var sluchaynoeChislo = 1 + Math.random() * (max * 1 );
        // округляем число  
        sluchaynoeChislo = Math.floor(sluchaynoeChislo);
        // return - ето вернуть результат
        return sluchaynoeChislo;

}

/*===================================
функцыи для создания елементов и блоков игры 
====================================*/

    // функцыя  создаем "#info-blok" с тегом dib 
    function sozdaniyeInfoBlok() {
        var infoBlok = document.createElement("div");
        infoBlok.id = "infoBlok";
        igraPole.appendChild(infoBlok);

    }


     // <span></span>  <span></span> <span></span>
     //создаем блок жызней 

     function sozdanieLifeBlok() {
        //  создаем lifes с тегом div
        var lifes = document.createElement("div");
        // присваиваем блоку id
        lifes.id = "lifes";
        // текущее количество жызней 
        var tekucheeColichestvoLifes = 0;
        // создаем цыкл для появления жызней
        while (tekucheeColichestvoLifes < colichestoLifes )  {
            // создаем тег span c id spanLife  и добавляем в документ 
             var span = document.createElement("span");
             span.id = "spanLife";
             // создаем счетчик для избежания бесконечности 
             tekucheeColichestvoLifes = tekucheeColichestvoLifes + 1;
             // добавляем наш спан  в  блок жызней 
             lifes.appendChild(span);
        }
            // добавляем блок очьков в игровой блок 
            igraPole.appendChild(lifes);

}

   // создаем стартовый блок с кнопкой начала игры 
   //<div id="start-blok"><button id="start-knopka">начать</button>
        
   function sozdaniyeStartBlok() {
       //  создаем блок див с id startBlok
       var startBlok = document.createElement("div");
       startBlok.id = "startBlok";
       // создаем кнопку  button c id startKnopka    
       var startKnopka = document.createElement("button");
       startKnopka.id = "startKnopka";
       startKnopka.innerText = "начать игру";
       // добавляем  кнопку в стартовый блок  
       startBlok.appendChild(startKnopka);
       //  добавляем стартовый блок в игровое поле 
       igraPole.appendChild(startBlok);
 }

     // создаем <h2>Время: <span id="taymer">10</span></h2>
     // создания блока таймера 

    function sozdanieTaymerBlok() {
        // создаем заголовок h2 с текстом (Время:)   
        var h2 = document.createElement("h2");
        h2.innerText = "Time:";
        // помещаем в коробочку var taymerBlok и добавляем тег span
        taymerBlok = document.createElement("span"); 
        // добавляем  taymerBlok id  taymer и значения (10)  
        taymerBlok.id = "taymer";
        taymerBlok.innerText = "55";
        // помещаем taymerBlok span в тег h2 заголовок        
        h2.appendChild(taymerBlok); 
        // добавляем заголовок h2  в infoblok
        infoBlok.appendChild(h2);   

 }

      //  <div id="stars">0</div>
      // создания блока очьков 

     function sozdaniyeBlokOchki() {
        // создаем блок div для очьков " stars"
        blokOchki = document.createElement("div");
        //  добавляем блок очькаов в игровое поле 
        igraPole.appendChild(blokOchki);
        // прописіваем id для блока stars
        blokOchki.id = "blokOchki";
        //  стартовое значения очьков = 0
        blokOchki.innerText = 0; 

}





// <div id="ball"></div>
// создания блока шарика 
     function sozdaniyeBall() {
        // создаем блок div  для мячика 
        var ball = document.createElement("div");
        // создаем переменную для разных напрвлений новых шаров
        var napravlenie = random(5); // 1 -left 2 - rght
        // условия для вылета шаров  1- лево 2 право 
        if(napravlenie == 1) {
            ball.className = "ball left";
        } else {
            ball.className = "ball right";
        }
        if(napravlenie == 3 ) {
           ball.className = "ball bom"; //  -1 жызнь
        } 
        if(napravlenie == 4) {                         
           ball.className = "ball lif";   //  + 1 жызнь
        }   
        if (napravlenie == 5) {                           
           ball.className = "ball bonus";  // + время
        }                                   

         // реализовуем удаления шарика при наведении на него мышы 
        ball.onmousemove = function() { 
                // условия если ияч ball.className не ожыдает удаления с поля то при наведени мышы 
                //  защитать  очько 
                if(ball.className != "ball ojidayt-udalenie"){           
                ochki = ochki + 1; 
                // отображения очьков      
                blokOchki.innerText = ochki;              
                // создаем множествиное выпадения шариков при каждом клике 
                setTimeout(function() {  
                    // при клике на шарик он удаляеца 
                    ball.remove();
                    // вобераем переменную .ball 
                    var suschestvuetBall = document.querySelector(".ball"); // element | nall
                    // условия если количество шариков на игровом поле достигло null 
                    // только тогда создаем новые 
                    if(suschestvuetBall == null) {
                    // количество шариков которое нужно создать небольше 5    
                    var colichestvoBall = random(5);
                    // текуще количество шариков     
                    var tekucheeColichestvoBall = 0;
                    // создем цыкл для  появления шарикоа       
                    while(tekucheeColichestvoBall <  colichestvoBall) {
                        sozdaniyeBall();
                       // делаем подсчет созданых шариков чтобы неуйти в бесконечность
                         tekucheeColichestvoBall = tekucheeColichestvoBall + 1; 
          } // коннец  цыкла создания шариков 
        }                   
      }, 200); // конец таймера ofcetTimeout  для задержки удаления  и появления новых шариков
                  
     } 
                   // мяч ожыдает удаления с поля сответственно нашему setTimeout - 200 м.сек.
                   ball.className = "ball ojidayt-udalenie";

 }; // конец события клика по мячю 

                    // при достижении нужног кол  очьков игра останавливаеца 
                    if (ochki == 100) {
                         gameOver();                      
                }               
                    // помещения шарика в случайное место в игровом поле через 200 м.с.      
                    setTimeout(function() {
                    ball.style.top = random(350) + "px";
                    ball.style.left = random(550) + "px";      
            } , 200);
                    // запустить передвыжения шарика вниз и удалять его 
                    // если вышол за границы поля + удалять 1 жызнь 
                    setTimeout(function() {
                           // удаляем свойство с задержкой изменения стилей
                           ball.style.transition = "all 0s";
                           // создаем таймер который каждые 50 м.с опускает шарик ниже
                           var taymerBall = setInterval(function()  {
                               // меняем позицыю шарика опуская его на 8 пикс. вниз 
                               ball.style.top = ball.offsetTop + 10 + "px";
                               // если шарик вышел за приделы поля то 
                               if(ball.offsetTop > 550) {
                                  // удаляем шарик
                                  ball.remove();
                                  // создаем шарик 
                                  sozdaniyeBall();
                                  // отнимаем 1 жызнь
                                  colichestoLifes = colichestoLifes  - 1 ;
                                  if(colichestoLifes == 0) {
                                     gameOver();
                                  }
                                  // удаляем блок жызней 
                                  udalenieLifeBlok();
                                  // перезапуск блока жызне
                                  sozdanieLifeBlok();
                                  // удаляем таймер 
                                  clearInterval(taymerBall);

                                  } 
                          }, 100);
                               
             }, 1000);
                    // условия если переменная status не имеит значения konec продолжаем 
                     // добавлять шарики в игровое поле 
                    if(status != "konec") {
                        // вставляем ball в игровое поле 
                    igraPole.appendChild(ball);
                    }
                    
}
  



    // создания блока окончания  игры 
    function sozdanieBlokOkonchanieIgra() {
        // сздаем блок див с id okonchanieIgra
         var blokOkonchanieIgra = document.createElement("div");
         blokOkonchanieIgra.id = "blokOkonchanieIgra";
         // создаем тег h2 для заголовка и добавляем id igraOkonchena
         var igraOkonchena = document.createElement("h2");
         igraOkonchena.id = "igraOkonchena";
         // добавляем надпись об окончании игры 
         igraOkonchena.innerText = "GAME OVER";     
         // создаем заголовок h3  с результатом игры 
         var h3 = document.createElement("h3");
         h3.id = "rethultatIgra";
         h3.innerText = "Ваш результат:" + ochki + "очьков";
         // добавляем заголовок h3 в блок окончани игры 
         blokOkonchanieIgra.appendChild(h3);
         // вставляем наш заголовок h2  в блок окончания игры 
         blokOkonchanieIgra.appendChild(igraOkonchena);
         // вставляем блок окончания игры в игровой блок 
         igraPole.appendChild(blokOkonchanieIgra);

   }


/*===================
функцыи для удаления елементов игры 
======================*/
     
     // функцыя для удалени стартового блока 
     function udalenieStartBlok() {
        // удаления стартового юлока      
        startBlok.remove();
}


    // функцыя для удаления блока жызне 
    function udalenieLifeBlok() {
         lifes.remove();
}


    // создание функцыи для удаления блока очьков 
    function udalenieBlokOchki() {
        blokOchki.remove();
}


    // создания функцыи для удаления таймер блока
    function udalenineTaymerBlok() {
        taymerBlok.remove();
}

   // создание функцыи для удалени блока окончания игры 
   function udalenieBlokOkonchanieIgra() {
         blokOkonchanieIgra.remove();
   }

   //функцыя очистить игровое поле
   function ochistitIgraPole() {
         igraPole.innerText = "";
   }

  // функцыя удаления Инфо-Блока
  function udalenieInfoBlok() {
      infoBlok.remove();
  }


