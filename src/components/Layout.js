import * as React from "react"
import Header from '../components/Header'
import Notification from '../components/Notification'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/styles.scss'

const Layout = ({pageTitle, siteTitle = 'Medicare for All Everywhere', pageScript, children, sidebarLinks, activeHeaderLink}) => 
  <div className='Layout'>
    <Head pageTitle={pageTitle} siteTitle={siteTitle} pageScript={pageScript}/>
    <Header activeLink={activeHeaderLink}/>
    <Notification pageTitle={pageTitle} notificationText="Click here to apply to be on our steering committee" link="https://actionnetwork.org/forms/steering-committee-application?source=website"/>
    <div className='middle'>
      <div className='container'>
        {sidebarLinks ? <Sidebar links={sidebarLinks} pageTitle={pageTitle}/> : null}
        <main>
          {children}
        </main>
      </div>
    </div>
    <Footer/>
  </div>

export default Layout
