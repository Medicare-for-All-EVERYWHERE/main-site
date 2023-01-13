import * as React from "react"
import Layout from '../../components/Layout'
import InfoCard from '../../components/InfoCard'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'
import Andre from '../../images/jigsaw-map.webp'
import Terence from '../../images/logo.png'

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
          link='https://drive.google.com/file/d/1WevB2aJ-CVqG-hRWDoWLKEGj-C3GGTS9/view?usp=share_link'
          image={Andre}
        />
        <InfoCard
          title="M4A-E Logo Large"
          link='https://drive.google.com/file/d/1Xp5U7DHSYlwhuzxyd1QxXtzVumrjGLdr/view?usp=share_link'
          image={Terence}
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
