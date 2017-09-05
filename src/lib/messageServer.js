window.getChatterMessages = (callback) => {
  axios.get('http://chattercube.thirdtape.com/messages')
    .then((res) => {
      console.log('successful get');
      callback(res.data);
    })
    .catch((err) => {
      console.log('FAILED get');
      console.log(err);
    });
};

window.postChatterMessage = (message, callback) => {
  axios.post('http://chattercube.thirdtape.com/messages', message)
    .then((res) => {
      console.log('successful post');
      callback();
    })
    .catch((err) => {
      console.log('FAILED get');
      console.log(err);
    });
};

// for (let i = 0; i < 50; i++) {
//   axios.post('http://chattercube.thirdtape.com/messages', {message: 'hello', username: 'Dogg'});
// }