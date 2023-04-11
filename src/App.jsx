import React from 'react';
import ReactDOM from 'react-dom';
import "../main.css";
import Header from './components/Header';
import Button from './components/Button';
import DescriptionList from './components/DescriptionList';

const App = () => {
  const desp = [
    {
      header: "Ничего лишнего",
      text: "Отсутствие лишних приложений для операторов. Оператору не нужно учиться работать с чатом"
    },
    {
      header: "Ничего лишнего",
      text: "Отсутствие лишних приложений для операторов. Оператору не нужно учиться работать с чатом"
    },
    {
      header: "Ничего лишнего",
      text: "Отсутствие лишних приложений для операторов. Оператору не нужно учиться работать с чатом"
    },
    {
      header: "Ничего лишнего",
      text: "Отсутствие лишних приложений для операторов. Оператору не нужно учиться работать с чатом"
    },
  ]


  return (
      <>
        <Header items={["Подключение", "Оплата", "Контакта", "Выход"]}/>
        <div className='section-1'>
          <h1>Telegram чат на вашем сайте</h1>
          <p>Общение клиентами станет простым<br/>
             и удобным, а подключение займет 5 минут.<br/>
             Первый месяц – <strong>бесплатно</strong>
          </p>
          <Button text="Подключить" />
        </div>
        <div className='section-2'>
          <h2>Tochka Online – это</h2>
          <DescriptionList items={ desp }/>
        </div>
      </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));