import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/styles.scss'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () =>
  <Layout pageTitle="Home" activeHeaderLink="Home">
    <h1>Medicare for All Everywhere</h1>
    <iframe id='videoPlayer' src="https://www.youtube.com/embed/OXgLtBwtsRE" title="We need Medicare for All EVERYWHERE!" style={{frameborder:0, scrolling:'no'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className='row' style={{width:'100%', justifyContent:'space-around', alignItems:'center'}}>
      <a className='button' href='https://actionnetwork.org/forms/medicare-for-all-everywhere-action-takers?source=direct_link&'>Sign up</a>
      <a className='button' href='https://opencollective.com/m4a-everywhere/contribute/custom-donation-50029/checkout?interval=month&platformTip=0&amount=27'>Donate</a>
      <Link className='button' to='/events'>Events</Link>
    </div>
    <h2>An aspiring coalition</h2>
    <p>Medicare for All Everywhere is an aspiring coalition that includes every US state and territory working in collaboration to build a mass movement with the political power to win national improved Medicare for All federally.</p>
    <p>We believe that Medicare for All will not happen in a vacuum, nor will it be handed down from the top. It will be won through a bottom-up mass movement. Our strategy is to create a universal campaign for universal healthcare that unites the many statewide campaigns for single payer healthcare with a national strategy for Medicare for All.</p>
    <StaticImage src='../images/jigsaw-map.webp' alt="US map jigsaw puzzle" style={{margin:0}} placeholder='blurred'/>
  </Layout>
export default IndexPage
