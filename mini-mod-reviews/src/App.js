import React from 'react'
import Loading from './components/Loading'
import Main from './components/Main'
const port = process.env.PORT || 5555;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      review: false,
      main: true,
      loadingMessage: `Connected to port:${port} App is loading...`
    }
  }
  
  // componentDidMount() {
  // fetch(`/home`)
  // .then((response) => response.json())
  // .then((data) => this.setState({blog: data, loading: false}));
  // }

  render() {
    // const setSingleTodo = (e) => {
    //   fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({singleTodo: data}))
    // }
    // const changeSingleState = () => {
    //   this.setState({singleTodo: null})
    // }
    // const getBlog = () => {
    //   fetch(`localhost5555/home`)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({blog: data}))
    // }
    const changeSingleBlog = () => {
      this.setState({home: true, singleBlog: null})
    }

    const setSingleBlog = (e) => {
      fetch(`/blog/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({home: false, singleBlog: data}))
    }

    const deleteBlogbyId = (id) => {
      fetch(`/blog/${id}`, {method: 'DELETE'})
      .then((data) => this.setState({home: true, singleBlog: null}))
    }
    

    if(this.state.loading) {
      return (
        <Loading loadingMessage={this.state.loadingMessage}/>
      )
    }
    
    return (
       <Main/>
      // this.state.user ? <Home home={this.state.home}/>
      // : <Login user={this.state.user}/>
    )
  }
}

export default App;