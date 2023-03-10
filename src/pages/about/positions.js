import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const PositionsPage = () => 
  <Layout pageTitle="Open Positions" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <h1>Open Positions</h1>
    <h2>Jobs</h2>
    <p>Medicare for All Everywhere does not currently have the budget to hire temporary or full time staff. We may occasionally be able to compensate labor on specific contracted projects. If you would like to help Medicare for All Everywhere build infrastructure, compensate work, and hire staff please consider making a tax-deductible donation at medicareforalleverywhere.org/donate.</p>
    <h2>Volunteer Positions</h2>
    <p>Medicare for All Everywhere is primarily powered by the labor of healthcare justice activists, organizers, volunteers, and supporters all over the country. Our supporters span online spaces to on-the-ground actions and campaigns. We are currently recruiting volunteers to take on the following critical roles.</p>
    <h3>Steering Committee Member</h3>
    <p>Medicare for All Everywhere is forming a volunteer steering committee to establish its first formal governing body. The goal of this is to create a formal decision-making process facilitating the development of organizing infrastructure, internal engagement, and public awareness for Medicare for All Everywhere.</p>
    <a className='button' href='https://actionnetwork.org/forms/steering-committee-application?source=website'>Apply here</a>
  </Layout>
export default PositionsPage
