import React from 'react'
import Loading from './components/Loading'
import Main from './components/Main'
const port = process.env.PORT || 5004;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      reviews: null,
      main: true,
      loadingMessage: `Connected to port:${port} App is loading...`
    }
  }
  
  componentDidMount() {
  fetch(`http://localhost:${port}/reviews`)
  .then((response) => response.json())
  .then((data) => {this.setState({reviews: data, loading: false}); console.log(data)})
  .then(() => console.log("Mounted"));
  }

  render() {

    if(this.state.loading) {
      return (
        <Loading loadingMessage={this.state.loadingMessage}/>
      )
    }
    
    return (
       <Main reviews={this.state.reviews}/>
    )
  }
}

export default App;