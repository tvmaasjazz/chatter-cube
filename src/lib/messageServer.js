window.getMessages = (callback) => {
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

window.postMessage = (callback) => {
  axios.post('http://chattercube.thirdtape.com/messages', {message: 'hello', username: 'Dogg'})
    .then((res) => {
      console.log('successful post');
      callback();
    })
    .catch((err) => {
      console.log('FAILED get');
      console.log(err);
    });
};