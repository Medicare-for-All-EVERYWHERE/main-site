import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const MediaPage = () =>
  <div className='Layout'>
    <Layout pageTitle="Media" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
      <h1>Media Coverage</h1>
      <p>Medicare for All Everywhere has been covered in multiple publications and podcasts. If you would like to set up an interview or media appearance with a representative from Medicare for All Everywhere please send an inquiry to <a href="mailto:info@medicareforalleverywhere.org">info@medicareforalleverywhere.org</a>.</p>
      <ul>
        <li><a href='https://www.latimes.com/california/story/2022-02-25/demise-of-single-payer-healthcare-in-california-trips-up-efforts-in-other-states'>Demise of single-payer healthcare in California trips up efforts in other states</a></li>
        <li><a href='https://www.youtube.com/watch?v=4WtIAZvmn-w'>In-Depth Podcast - Conversation with Andre Stackhouse & Joe Firestone</a></li>
        <li><a href='https://www.youtube.com/watch?v=i1EayZ7vI0Y'>Sabby Sabs</a></li>
        <li><a href='https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMDMyNzA0LnJzcw/episode/QnV6enNwcm91dC0xMTc4MjkxOQ?sa=X&ved=0CAUQkfYCahcKEwiYvd6iidX8AhUAAAAAHQAAAAAQNQ'>Solutions from the Multiverse</a></li>
      </ul>
    </Layout>
  </div>
export default MediaPage
