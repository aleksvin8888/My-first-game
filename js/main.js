//  главный фаил в котоком  будут вызываца функцыи и действия в игре 
//  управления процесами игры 
  
  // вызов функцыи для запуска игры 
  startIgra();

   // функцыя запуска игры 
   function startIgra(){
      // запуск стартового блока с кнопкой "начать игру"
      sozdaniyeStartBlok();
      // вызов функцыи начала игры при клике на кнопку "начать игру"
      startKnopka.onclick = nachaty;
}


   // функцыя начала игры 
   function nachaty() {
      status = "nachaty";
      sozdaniyeInfoBlok();
       // запускаем блок таймера
      sozdanieTaymerBlok();
      // запускаем таймер
      timerIgra();
      // запускаем блок очьков
      sozdaniyeBlokOchki(); 
      // запускаем блок жызней
      sozdanieLifeBlok();
      // запускаем создания мячика
      sozdaniyeBall();    
      // удаляем стартовый блок 
      udalenieStartBlok();
      
}


   // функцыя конц игры 
   function gameOver() {
      status = "konec";

      udalenieBlokOchki();

      udalenineTaymerBlok();

      udalenieInfoBlok();

      setTimeout(function() {

      ochistitIgraPole();

      sozdanieBlokOkonchanieIgra();

      },200 );



   }

   //  функцыя для обратного отсчета времени игры 
   function timerIgra() {
        // таймер обратного отсчета помещен в переменную (коробочку)
        var chasy = setInterval(function() {
        // функцыя которую выполняет таймер обратный отсчет
        taymerBlok.innerText = taymerBlok.innerText - 1;
        // условия которое выполница по окончания таймера 
        if(taymerBlok.innerText == 0) {
        //вызов остановки самого таймера 
        clearInterval(chasy);
        //останавливаем игру когда таймер = 0
        gameOver();
       }
    }, 1000);
}

 









