function sendEmail() {
  console.log("Sending mail to User");
}

function throttle(callbackFn, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callbackFn(...args);
        timer = null;
      }, delay);
    }
  };
}

const sendEmailToUser = throttle(sendEmail, 1000);
