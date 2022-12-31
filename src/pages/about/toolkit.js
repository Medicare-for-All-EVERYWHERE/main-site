import * as React from "react"
import Layout from '../../components/Layout'
import InfoCard from '../../components/InfoCard'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'
import Andre from '../../images/jigsaw-map.webp'
import Terence from '../../images/logo.png'

const ToolkitPage = () =>
  <div className='Layout'>
    <Layout pageTitle="Digital Toolkit" sidebarLinks={AboutSidebarLinks} activeHeaderLink="Ditital Toolkit">
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
    </main>
    </Layout>
  </div>
export default ToolkitPage
