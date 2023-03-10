import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const AboutPage = () =>
  <Layout pageTitle="About" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <h1>About</h1>
    <p>Medicare for All Everywhere held its first meeting in October 2021 and has in its short time organized tweet storms, marches, and petition drives across multiple states and in Washington D.C. We have volunteer signups in more than 30 states and are working to build a nationwide mass movement for healthcare justice through grassroots organizing and direct action.</p>
    <h2>Fiscal host</h2>
    <p>Medicare for All Everywhere has been fiscally hosted by <a href='https://opencollective.foundation'>Open Collective Foundation</a> since November 2022, which gives us 501(c)3 nonprofit status without requiring us to manage a bank account, board of directors, or legal entity. A 5-8% share of donations go to Open Collective Foundation to handle our bookkeeping and compliance.</p>
    <iframe src="https://www.youtube.com/embed/269SyUQmL_U" title="What is Open Collective Foundation? (2 minute animation)" style={{width:'100%', height:455, frameborder:0, scrolling:'no'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2>Financial transparency</h2>
    <p>Medicare for All Everywhere is committed to total financial transparency. All of our donations and reimbursements are done through <a href='https://opencollective.com/m4a-everywhere'>our Open Collective</a> where you can also view our budget which shows every contribution, expense, and payment. As a 501(c)3 we are generally <a href='https://docs.opencollective.foundation/how-it-works/policies/political-activity' target='_blank'>prohibited from spending funds on political lobbying or campaign intervention</a>, but all donations are tax-deductible in the United States.</p>
    <p>To learn more about nonprofits, IRS compliance, and campaign finance check out <a href='https://www.stayexempt.irs.gov/home/existing-organizations/political-campaigns-and-charities' target='_blank'>this course from IRS.gov.</a></p>
  </Layout>
export default AboutPage
