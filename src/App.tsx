import React from 'react';
import Google from '../src/image/Google.png';
import Icon from '../src/image/icon.png'




function App() {
  return (
   <body>
    <div className='link'>
      <a href='https://www.google.com/intl/ru/gmail/about/'>Почта </a>
      <a href='https://www.google.ru/imghp?hl=ru&ogbl'>Картинки </a>
      <span>Квадрат </span>
      <span>Аккаунт</span>
    </div>
    <div className='my_img'>
      <img src={Google} alt="" />
    </div>
    <div className='my_input'>
      <input type="text"/>
      <img className='serch' src={Icon}/>
    </div>


  
    
    <div className='my_button'>
      <form action="https://www.google.com">
        <button>Поиск в Google</button>
      </form>
      <form action="https://www.google.com/doodles">
        <button>Мне повезет!</button>
      </form>      
    </div>
    <footer>
      <span>
        Россия
      </span>
      <hr />
      <div>
        <a href="https://about.google/?utm_source=google-RU&utm_medium=referral&utm_campaign=hp-footer&fg=1">Все о гугл</a>
        <a href="https://www.google.ru/intl/ru_ru/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Реклама</a>
        <a href="https://www.google.ru/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Для бизнеса</a>
        <a href="https://google.com/search/howsearchworks/?fg=1">Как работает Google поиск </a>
        <a className='link_central' href="https://sustainability.google/intl/ru/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=">Нулевой выброс углекислого газа с 2007 года</a>
        <a className='link_right' href="https://policies.google.com/privacy?hl=ru&fg=1">Конфиденциальность</a>
        <a className='link_right' href="https://policies.google.com/terms?hl=ru&fg=1">Условия</a>
        <span className='text_right'>Настройки</span>
      </div>
    </footer>
   </body>
  );
}
export default App;
