import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const MediaPage = () =>
  <div className='Layout'>
    <Layout pageTitle="Media" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <h1>Media Coverage</h1>
      <p>Medicare for All EVERYWHERE has not even existed for a year and has already been covered in publications and podcasts.</p>
      <ul>
        <li><a href='https://www.latimes.com/california/story/2022-02-25/demise-of-single-payer-healthcare-in-california-trips-up-efforts-in-other-states'>Demise of single-payer healthcare in California trips up efforts in other states</a></li>
        <li><a href='https://www.youtube.com/watch?v=4WtIAZvmn-w'>In-Depth Podcast - Conversation with Andre Stackhouse & Joe Firestone</a></li>
      </ul>
      <p>If you would like to set up an interview or media appearance with a representative from Medicare for All EVERYWHERE please send an inquiry to <a href="mailto:info@medicareforalleverywhere.org">info@medicareforalleverywhere.org</a>  </p>
    </main>
    </Layout>
  </div>
export default MediaPage
