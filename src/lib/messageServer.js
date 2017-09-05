window.getChatterMessages = (callback) => {
  axios.get('http://chattercube.thirdtape.com/messages')
    .then((res) => {
      console.log('successful get');

      //filter
      const filteredMessages = [];
      for (let message in res.data) {
        filteredMessages.push({
          message: _.escape(message.message),
          username: _.escape(message.username)
        });
      }
      callback(filteredMessages);

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