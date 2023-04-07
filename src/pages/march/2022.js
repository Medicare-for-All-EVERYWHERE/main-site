import * as React from "react"
import Layout from '../../components/Layout'
import { MarchSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const Events2022Page = () =>
  <Layout pageTitle="2022 Events" sidebarLinks={MarchSidebarLinks} activeHeaderLink="March">
    <h2>2022 Healthcare Justice Events</h2>
  </Layout>
export default Events2022Page
