import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const ContactPage = () => 
  <Layout pageTitle="Contact" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About" pageScript="https://actionnetwork.org/widgets/v5/form/contact-medicare-for-all-everywhere?format=js&source=widget">
    <h1>Contact</h1>
    <ul>
      <li><strong>Give us a call: </strong> <a href='tel:+2029879953'>(202) 987-9953</a></li>
      <li><strong>Send us an email: </strong><a href="mailto:info@medicareforalleverywhere.org">info@medicareforalleverywhere.org</a></li>
      <li><strong>Message us on Slack: </strong><a href="https://actionnetwork.org/forms/code-of-conduct-2?source=direct_link&">invite link</a></li>
    </ul>
    <div id='can-form-area-contact-medicare-for-all-everywhere' style={{width: '100%'}}></div>
  </Layout>
export default ContactPage
