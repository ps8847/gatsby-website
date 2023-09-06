import React from "react";
import "../styles/global.css"
import Layout from "../Components/Layout";
import Img from "gatsby-image"
import {portfolio , projectscss} from "../styles/projects.module.css"
import { Link, graphql } from "gatsby";

export default function projects({data}) {

  console.log(data);

  let projects = data.projects.nodes;
  let contact = data.contact.siteMetadata.contact

  return (
    <Layout>

    <div className={portfolio}>
     <h2>Portfolio</h2>
     <h3>Projects & Websites I've Created</h3>
    <div className={projectscss}>
      {projects.map(project => (
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
          <div>
            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </div>
        </Link>
      ))}
    </div>
    <p>Like what you see? Email me at {contact} for a query</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
query notes2{
  projects : allMarkdownRemark(sort: {fields: frontmatter___date , order: DESC}){
    nodes{
      html
      frontmatter{
        slug
        title
        stack
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact : site{
    siteMetadata{
      contact
    }
  }
}
`