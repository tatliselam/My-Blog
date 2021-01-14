  function Posts(props){
    return(<section>
      {props.post.map(item=>{
        return (
          <article>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          </article>
        )
      })}
      </section>
    )


  }
  export default Posts;