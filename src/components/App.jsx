class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <div><Header /></div>
        <div><Username /></div>
        <div><Messages messages={window.sampleMessages}/></div>
      </div>  
    );
  }
}

window.App = App;

