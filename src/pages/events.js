import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () =>
  <Layout pageTitle="Events" activeHeaderLink="Events">
    <h1>Events calendar</h1>
    <iframe src="https://calendar.google.com/calendar/embed?src=massmovement.healthcare%40gmail.com&ctz=America%2FLos_Angeles" style={{border: 0, width:'100%', height:600, minHeight:400, frameborder:0, scrolling:'no'}}></iframe>
  </Layout>
export default IndexPage
