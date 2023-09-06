import React from 'react'
import Layout from "../Components/Layout";
import Img from "gatsby-image";
import {details , featured , html} from "../styles/project-details.module.css"
import { graphql } from 'gatsby';

export default function ProjectDetails({data}) {
    
  return (
    <Layout>
        <div className={details}>
            <h2>{data.markdownRemark.frontmatter.title}</h2>
            <h3>{data.markdownRemark.frontmatter.stack}</h3>
            <div className={featured}>
                <Img fluid={data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid} />
            </div>
            <div className={html} dangerouslySetInnerHTML={{__html : data.markdownRemark.html}} />
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetails($slug:String){
    markdownRemark(frontmatter: {slug: {eq: $slug}}){
        html
        frontmatter{
            stack
            title
            featuredImg{
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`