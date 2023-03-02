import * as React from "react"
import Layout from '../../components/Layout'
import InfoCard from '../../components/InfoCard'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'
import JigsawMap from '../../images/jigsaw-map.webp'
import Logo from '../../images/logo.png'
import MLKQuote from '../../images/mlk-quote.png'
import BusinessCard from '../../images/business-card.png'
import Literature from '../../images/literature.png'

const ToolkitPage = () =>
  <div className='Layout'>
    <Layout pageTitle="Digital Toolkit" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <h1>Digital Toolkit</h1>
      <p>All of our logos, grapics, posters, literature, etc. are available in our digital toolkit.</p>
      <a href='https://drive.google.com/drive/folders/1btqL9eztzqFM0CTx8yINF-O9Y6VXrQNS?usp=share_link' target='_blank'>View the full toolkit here</a>
      <div className='row'>
        <InfoCard
          title="USA Jigsaw Map"
          link='https://drive.google.com/drive/folders/1cYDrzeg9LJVxDVu_Cga0QYpEiMUXMb7I?usp=share_link'
          image={JigsawMap}
        />
        <InfoCard
          title="M4A-E Logo"
          link='https://drive.google.com/drive/folders/1WdhDnUjq14WwEQbVgk19Os16L4bpaUqc?usp=share_link'
          image={Logo}
        />
        <InfoCard
          title="MLK Quote"
          link='https://drive.google.com/drive/folders/1j9GzWl6rGl1UZ5BZpdujuGk3KEmmcDM5?usp=share_link'
          image={MLKQuote}
        />
        <InfoCard
          title="Business Cards"
          link='https://drive.google.com/drive/folders/1OYuwFNzESFK9JAW3pQw5FPd5Y7AxFoqG?usp=share_link'
          image={BusinessCard}
        />
        <InfoCard
          title="Literature"
          link='https://drive.google.com/drive/folders/1865-gh4wY63BajmJDuG4_a2HnkLKZv-s?usp=share_link'
          image={Literature}
        />
      </div>
      <h2>Color theme</h2>
      <ul>
        <li>Primary Accent: <a href='https://www.color-hex.com/color/f8e71c' target='_blank'><span style={{backgroundColor:'#F8E71C', color:'black', border:'1px solid lightgrey', padding:5}}><strong>#F8E71C</strong></span></a></li>
        <li>Secondary Accent: <a href='https://www.color-hex.com/color/4f7177' target='_blank'><span style={{backgroundColor:'#4f7177', color:'white', border:'1px solid lightgrey', padding:5}}><strong>#4F7177</strong></span></a></li> 
        <li>Light Primary: <a href='https://www.color-hex.com/color/e9e7e8' target='_blank'><span style={{backgroundColor:'#e9e7e8', color:'black', border:'1px solid lightgrey', padding:5}}><strong>#E9E7E8</strong></span></a></li> 
        <li>Dark Primary: <a href='https://www.color-hex.com/color/444745' target='_blank'><span style={{backgroundColor:'#444745', color:'white', border:'1px solid lightgrey', padding:5}}><strong>#444745</strong></span></a></li> 
      </ul>
    </main>
    </Layout>
  </div>
export default ToolkitPage
