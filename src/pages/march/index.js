import * as React from "react"
import Layout from '../../components/Layout'
import { MarchSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const MarchPage = () =>
  <Layout pageTitle="July 2023" sidebarLinks={MarchSidebarLinks} activeHeaderLink="March">
    <h1>March for Healthcare Justice</h1>
    <h2>The weekend of Medicare's 58th anniversary, July 28th-30th</h2>
    <p>Once again Medicare for All Everywhere is supporting and organizing in-person actions for Healthcare Justice all around the country this July. We are looking to bring out healthcare justice activists across the entire country in events as small as a backyard bbq, and as large as a march on Washington.</p>
    <p>If you would like to attend or help organize a healthcare justice event this July, please ! </p>
    <div className='row'>
      <a className='button' href='https://actionnetwork.org/events/march-for-healthcare-justice-seattle-washington?source=website' target='_blank'>Seattle, WA</a>
      <a className='button' href='https://actionnetwork.org/events/march-for-healthcare-justice-boston-massachussets?source=website&' target='_blank'>Boston, MA</a>
      <a className='button' href='https://actionnetwork.org/events/march-for-healthcare-justice-circle-pines-minnesota?source=website&' target='_blank'>Circle Pines, MN</a>
    </div>
    <div className='row'>
      <a className='button' href='https://actionnetwork.org/forms/i-want-to-march-for-healthcarejustice-this-july?source=website&' target='_blank'>RSVP for other cities</a>
    </div>
  </Layout>
export default MarchPage
