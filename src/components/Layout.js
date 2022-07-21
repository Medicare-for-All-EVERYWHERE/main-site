import * as React from "react"
import Header from '../components/Header'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/styles.scss'

const Layout = ({pageTitle, siteTitle = 'Medicare for All EVERYWHERE', children, sidebarLinks, activeHeaderLink}) => 
  <div className='Layout'>
    <Head pageTitle={pageTitle} siteTitle={siteTitle}/>
    <Header activeLink={activeHeaderLink}/>
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
