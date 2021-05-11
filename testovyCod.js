
 // создаем функцыю рестарт игры 
   function restartIgra() {
        status = "nachaty";
        udalenieBlokOkonchanieIgra();
        sozdaniyeInfoBlok();
       clearInterval(ochki);
      // запускаем блок очьков
      sozdaniyeBlokOchki();
     // перезапуск блока жызней
       sozdanieLifeBlok();
      // запускаем создания мячика
      sozdaniyeBall();
      // запускаем блок таймера
      sozdanieTaymerBlok();
      // запускаем таймер
      timerIgra();
   }



//  добавить в блок окончания игры 
// добавляем кнопку рестарт
         var restart = document.createElement("button");
         // добавляем для кнопк id 
         restart.id = "restart";
         // и надпись Начать заново 
         restart.innerText = "Начать заново";
         // добавляем кнопку рестарт в блок окончания игры
         blokOkonchanieIgra.appendChild(restart);
         restart.onclick = restartIgra;


// стиль для кнопки рестарт 
#restart{
    position: relative;
    left: -30px;
    top: 270px;
    color: #040404;
    border-radius: 12px;
    background-color: #d40fb3;
    font-size: 23px;
    border: 5px double #0db53b;
    box-shadow: -10px 20px 20px 0px rgb(239 9 105 / 65%), 0 17px 50px 0 rgb(51 236 86 / 42%);
}




