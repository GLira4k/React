import "./styles.css";

import { Posts } from "../../components/Posts";
import { Component } from "react";
import { loadPosts } from "../../utils/load-posts";
import Button from "../../components/Button";

//class component, eles têm um ciclo de vida mais complexo e são usados principalmente para componentes que precisam de um estado interno ou de acesso a métodos do ciclo de vida.

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: "",
  };

  // método não utiliza arrow function

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postAndPhotos = await loadPosts();
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        {!!searchValue && (
          <>
            <h1>Search Value: {searchValue}</h1>
          </>
        )}

        <input type="search" onChange={this.handleChange} value={searchValue} />
        <Posts posts={posts} />
        <div className="button_container">
          <Button
            text="Load More Posts"
            /* Passando apenas valor do onClick em props */
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}

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
