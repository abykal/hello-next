import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}/>
    <style jsx>{`
      body {
        background-color: #EAECEE;
      }

      h1, a, p {
        font-family: "Arial";
      }

      p {
        color: #566573;
        width: 80%;
        float: right;
        padding: 10px;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      img {
        overflow: hidden;
        padding: 10px;
      }
    `}</style>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)
  console.log(`Fetched show: ${show}`)

  return { show }
}

export default Post
