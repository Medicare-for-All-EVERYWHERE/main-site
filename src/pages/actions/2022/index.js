import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../../../components/Layout'
import { MarchSidebarLinks } from '../../../helpers/constants'
import '../../../styles/styles.scss'

const Events2022Page = () =>
  <Layout pageTitle="2022 Events" sidebarLinks={MarchSidebarLinks} activeHeaderLink="March">
    <h2>2022 Healthcare Justice Events</h2>
    <p>In 2022 we were happy to co-organize or co-sponsor events in <Link to='./portland'>Portland</Link>, <Link to='./san-francisco'>San Francisco</Link>, and <Link to='./seattle'>Seattle</Link>.</p>
  </Layout>
export default Events2022Page
