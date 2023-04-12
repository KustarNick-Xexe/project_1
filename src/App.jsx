import React from 'react';
import ReactDOM from 'react-dom';
import "../main.css";
import Header from './components/Header';
import Button from './components/Button';
import Descriptions from './components/Descriptions';
import Cards from './components/Cards';
import Steps from './components/Steps';
import Comments from './components/Comments';

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

  const rate = [
    {
      name: "Базовый",
      desc: "Менее 1000 посещений в сутки",
      cost: 200,
      duration: "месяц"
    },
    {
      name: "Базовый",
      desc: "Менее 1000 посещений в сутки",
      cost: 200,
      duration: "месяц"
    },
    {
      name: "Базовый",
      desc: "Менее 1000 посещений в сутки",
      cost: 200,
      duration: "месяц"
    },
  ]

  const steps = [
    {
      name: "Telegram чат",
      desc: "Консультант отвечает на вопросы посетителей сайта.",
    },
    {
      name: "Telegram чат",
      desc: "Консультант отвечает на вопросы посетителей сайта.",
    },
    {
      name: "Telegram чат",
      desc: "Консультант отвечает на вопросы посетителей сайта.",
    },
  ]

  const comments = [
    {
      header: "Как же удобно!",
      text: "В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.",
      src: null,
      name: "Анна Купер",
      site: "romashka.ru",
    },
    {
      header: "Как же удобно!",
      text: "В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.",
      src: null,
      name: "Анна Купер",
      site: "romashka.ru",
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
          <Descriptions items={ desp }/>
        </div>
        <div className='section-3'>
          <h2>Тарифы</h2>
          <p>Стоимость зависит от трафика сайта</p>
          <Cards items={ rate }/>
        </div>
        <div className='section-4'>
          <h2>Всего три шага для подключения Telegram чата</h2>
          <Steps items={ steps }/>
        </div>
        <div className='section-5'>
          <h2>Отзывы клиентов</h2>
          <Comments items={ comments }/>
        </div>
      </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));