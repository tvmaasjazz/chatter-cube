class App extends React.Component {
  constructor({getChatterMessages, postChatterMessage}) {
    super({getChatterMessages, postChatterMessage});

    this.setUsername = this.setUsername.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.messageInputChange = this.messageInputChange.bind(this); 

    this.state = {
      username: 'Dogg',
      message: '',
      messages: []
    }
  }

  setUsername(username) {
    this.setState({username: username});
  }

  sendMessage(event) {
    event.preventDefault();
    postChatterMessage({
      message: this.state.message, 
      username: this.state.username
    }, this.getMessages);
  }

  getMessages() {
    getChatterMessages(this.updateMessages);
  }

  updateMessages(messages) {
    this.setState({messages: messages});
  }

  messageInputChange(event) {
    console.log(event.target.value);
    this.setState({message: event.target.value});
  }

  render() {

    return (
      <div className="app">
        <Header />
        <Username />
        <MessageForm sendMessage={this.sendMessage} messageInputChange={this.messageInputChange}/>
        <Messages messages={window.sampleMessages}/>
      </div>  
    );
  }
}

window.App = App;

