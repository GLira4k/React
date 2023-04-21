import "./App.css";
import { Posts } from "./components/Posts";
import { Component } from "react";
import { loadPosts } from "./components/utils/load-posts";

//class component, eles têm um ciclo de vida mais complexo e são usados principalmente para componentes que precisam de um estado interno ou de acesso a métodos do ciclo de vida.

class App extends Component {
  state = {
    posts: [],
  };

  /* Lifecycle Methods
     Montagem
    - constructor()
    - getDerivedStateFromProps()
    - render()
    - componentDidMount()

     Atualização
    - getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
    
     Desmontagem
    - componentWillUnmount()
  */

  // método não utiliza arrow function
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
