const $returnBack = document.getElementById('d3-history-back');

$returnBack.addEventListener('click', () => {
  history.back();
});

// const get = window.location.search
//   .replace( '?', '')
//   .split('&')
//   .map(item => item.replace('=', ' '))
//   .join(' ')
  // .reduce(function(obj, arr){
  //   const item = arr.split('=');
  //   obj[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
  //   return obj;
  // }, {});

// const sendMsg = `https://api.telegram.org/bot6404900072:AAEWApiLlg1mAHquxDcJ9oVwrfzI7Fx91HY/sendMessage?chat_id=-1002114761565&text=${get}`;

// fetch(sendMsg);

// Функция для получения значений из GET-параметров
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Функция для создания URL с параметрами, аналогичными {ourDomain}
function createURL() {
  const url = `${window.location.origin}${window.location.pathname}?`;

  const sub3Params = getQueryParam('sub3') ? getQueryParam('sub3').split('__').filter(param => param !== '') : [];

  const queryParams = [
      `erid=${getQueryParam('erid') || ''}`,
      `sub1=${getQueryParam('sub1') || ''}`,
      `source=${getQueryParam('source') || ''}`,
      `sub2=${getQueryParam('sub2') || ''}`,
      `sub3=${sub3Params.map(param => `${param}`).join('_')}`,
      `sub4=${getQueryParam('sub4') || ''}`
  ];

  return url + queryParams.join('&');
}

// Функция для отправки данных в чат бот Telegram
function sendTelegramMessage() {
  const requiredParams = ['sub1', 'source', 'sub2', 'sub3', 'sub4', 'erid'];
  const paramsValid = requiredParams.every(param => getQueryParam(param));

  if (paramsValid) {
      const msg = `
        sub1 ${getQueryParam('sub1')}
        source ${getQueryParam('source')}
        sub2 ${getQueryParam('sub2')}
        sub3 ${getQueryParam('sub3')}
        sub4 ${getQueryParam('sub4')}
        erid ${getQueryParam('erid')}
      `;

      // Замените на ваши токены и ID чата
      const idbot = '6517079832';
      const token = 'AAGzhGJU9_aznHu_nt960chl7zmrSS18gAo';
      const id = '-1002055402631';

      // Отправка данных в чат бот Telegram
      const telegramURL = `https://api.telegram.org/bot${idbot}:${token}/sendMessage?chat_id=${id}&text=${encodeURIComponent(msg)}`;

      // Для тестирования можно использовать, например, fetch
      fetch(telegramURL)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
  }
}

// Вызов функций при загрузке страницы
window.onload = function () {
  console.log(createURL());
  sendTelegramMessage();
};