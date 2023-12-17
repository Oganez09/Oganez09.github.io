const $returnBack = document.getElementById('d3-history-back');

$returnBack.addEventListener('click', () => {
  history.back();
});

const get = window.location.search.replace( '?', '');
const arr = get.split('&').reduce(
  function(p,e){
      var a = e.split('=');
      p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
  },
  {}
);
console.log(arr)

fetch(get);