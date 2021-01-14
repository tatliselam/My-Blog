import Posts from './components/Posts.js'
  const posts = [
    {
      title:'Post Title 1',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci metus, convallis sit amet vehicula a, fermentum vel nisi. Nullam dolor risus, auctor at molestie a, pretium vel augue. Fusce sed ligula lacus.'
    },
    {
      title:'Post Title 2',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci metus, convallis sit amet vehicula a, fermentum vel nisi. Nullam dolor risus, auctor at molestie a, pretium vel augue. Fusce sed ligula lacus.' 
    },
    {
      title:'Post Title 3',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci metus, convallis sit amet vehicula a, fermentum vel nisi. Nullam dolor risus, auctor at molestie a, pretium vel augue. Fusce sed ligula lacus.'
    },
    {
      title:'Post Title 4',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci metus, convallis sit amet vehicula a, fermentum vel nisi. Nullam dolor risus, auctor at molestie a, pretium vel augue. Fusce sed ligula lacus.'
    },
    {
      title:'Post Title 5',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci metus, convallis sit amet vehicula a, fermentum vel nisi. Nullam dolor risus, auctor at molestie a, pretium vel augue. Fusce sed ligula lacus.'
    }
  ]

  function App() {
      return(
    <section>
        <h1>Welcome to My Blog</h1>
        <Posts post={posts}/>

      </section>
      
      ) 
  }

  export default App;
