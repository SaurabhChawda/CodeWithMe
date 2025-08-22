function debounce(callbackFn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn.call(this, ...args);
    }, wait);
  };
}
const getData = function (event, name) {
  console.log(event.target.value, name, "Fetching data from Api");
};

const getDataFromApi = debounce(getData, 300);
