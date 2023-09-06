import * as React from "react"
import Layout from "../Components/Layout";
import {header , btn} from "../styles/home.module.css"
import { Link, graphql} from "gatsby";
import Img from "gatsby-image"

export default function Home({data}) {
  console.log(data);
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux Designer & web developer based in manchaster</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
       
        <Img fluid={data.file.childImageSharp.fluid} />
        </section>  
    </Layout>
  );
}

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "demo.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`