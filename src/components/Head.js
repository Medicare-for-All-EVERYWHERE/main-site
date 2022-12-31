import * as React from "react"
import { Helmet } from 'react-helmet'
import Screenshot from '../images/screenshot.png'

const Head = ({pageTitle = 'Page', siteTitle = 'Medicare for All EVERYWHERE'}) =>
  <Helmet>
    <html lang="en" />
    <title>{pageTitle} | {siteTitle}</title>
    <meta content={Screenshot} property="og:image" />
    <meta property="og:description" content="Medicare for All EVERYWHERE is an aspiring coalition including every US state and territory united behind the goal of Medicare for All both statewide and federally." />
    <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' />
    <script src='https://actionnetwork.org/widgets/v5/form/contact-medicare-for-all-everywhere?format=js&source=widget'></script>
  </Helmet>

export default Head
