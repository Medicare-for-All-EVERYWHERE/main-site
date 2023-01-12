import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const ContactPage = () => 
  <Layout pageTitle="Contact" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About" pageScript="https://actionnetwork.org/widgets/v5/form/contact-medicare-for-all-everywhere?format=js&source=widget">
    <h1>Contact</h1>
    <p>You can contact Medicare for All EVERYWHERE via email at <a href="mailto:info@medicareforalleverywhere.org">info@medicareforalleverywhere.org</a>.</p>
    <p>You may also join our Slack community to connect with our leadership and volunteers across the country. To get a Slack invite please view and agree to our <strong><a href='https://actionnetwork.org/forms/code-of-conduct-2?source=direct_link&'>Code of Conduct.</a></strong></p>
    <div id='can-form-area-contact-medicare-for-all-everywhere' style={{width: '100%'}}></div>
  </Layout>
export default ContactPage
