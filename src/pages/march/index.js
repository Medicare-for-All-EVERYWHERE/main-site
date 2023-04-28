import * as React from "react"
import Layout from '../../components/Layout'
import { MarchSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const MarchPage = () =>
  <Layout pageTitle="July 2023" sidebarLinks={MarchSidebarLinks} activeHeaderLink="March">
    <h1>Healthcare Justice July Actions</h1>
    <h2>The weekend of Medicare's 58th anniversary, July 28th-30th</h2>
    <p>Once again Medicare for All Everywhere is supporting and organizing in-person actions for Healthcare Justice all around the country this July. We are looking to bring out healthcare justice activists across the entire country in events as small as a backyard bbq, and as large as a march on Washington.</p>
    <p>If you would like to attend or help organize a healthcare justice event this July, please! </p>
    <div className='row'>
      <a className='button' href='https://actionnetwork.org/events/march-for-healthcare-justice-seattle-washington?source=website' target='_blank'>Seattle, WA</a>
      <a className='button' href='https://actionnetwork.org/events/march-for-healthcare-justice-boston-massachussets?source=website&' target='_blank'>Boston, MA</a>
      <a className='button' href='https://actionnetwork.org/events/march-for-healthcare-justice-circle-pines-minnesota?source=website&' target='_blank'>Circle Pines, MN</a>
    </div>
    <div className='row'>
      <a className='button' href='https://actionnetwork.org/forms/i-want-to-march-for-healthcarejustice-this-july?source=website&' target='_blank'>RSVP for other cities</a>
      <a className='button' href='https://actionnetwork.org/forms/organize-a-healthcare-justice-event-this-july?source=website' target='_blank'>Organize an event</a>
    </div>
    <h3>Organize an action</h3>
    <p>If you would like to volunteer to help organize an event in a city that has already been announced above, please RSVP to the event and check 'Yes' next to "Volunteer to help organize this event?"</p>
    <p>If you are interested in organizing an event in a city that has not been announced above, please click the button below and fill out the form so we can get in touch and see how we can support you.</p>
    <h3>Partner with us</h3>
    <p>Medicare for All Everywhere seeks to work as collaboratively and in as coalitional a way possible. Our doors and minds are always open to partnership opportunities with other organizations. We are seeking both cosponsors of these events, partners who will actively help fund, plan, and coordinate events, and endorsers from organizations wishing to offer their solidarity and support without committing organizational resources.</p>
    <a className='button' href='https://actionnetwork.org/forms/2023-healthcare-justice-action-partners?source=website' target='_blank'>Partner with M4A Everywhere</a>
  </Layout>
export default MarchPage
