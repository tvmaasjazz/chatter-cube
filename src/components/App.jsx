class App extends React.Component {
  constructor({getChatterMessages, postChatterMessage}) {
    super({getChatterMessages, postChatterMessage});

    this.setUsername = this.setUsername.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.updateMessages = this.updateMessages.bind(this);


    this.state = {
      username: '',
      messages: []
    }
  }

  setUsername(username) {
    this.state.username = username;
  }

  sendMessage(message) {
    postChatterMessage({
      message: message, 
      username: this.state.username
    }, this.getMessages);
  }

  getMessages() {
    getChatterMessages(this.updateMessages);
  }

  updateMessages(messages) {
    this.state.messages = messages;
  }

  render() {

    return (
      <div className="app">
        <Header />
        <Username />
        <Messages messages={window.sampleMessages}/>
      </div>  
    );
  }
}

window.App = App;

