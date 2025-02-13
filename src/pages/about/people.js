import * as React from "react"
import Layout from '../../components/Layout'
import InfoCard from '../../components/InfoCard'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'
import Andre from '../../images/andre-stackhouse.jpg'
import Terence from '../../images/terence-cudney.png'
import Betty from '../../images/betty-toto.png'
import { Link } from 'gatsby'

const PeoplePage = () =>
  <Layout pageTitle="People" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <h1>People</h1>
    <p>Medicare for All Everywhere does not currently have a membership system, but we are recruiting for our steering committee which handles our governance. If you are interested in applying for a role please check for listings on our <Link to='/about/positions'>open positions page.</Link></p>
    <h2>Our co-founders</h2>
    <div className='row'>
      <InfoCard
        title="Andre Stackhouse"
        link='https://captainstack.github.io/public-stackhouse'
        description='Andre is the campaign director of Whole Washington and sits on the DSA Medicare for All National Steering Committee. His background is in information science and computer software.'
        image={Andre}
      />
      <InfoCard
        title="Terence Cudney"
        link='https://www.cudney4ma.com'
        description='Terence was independent candidate for the Massachussets State Senate in November of 2022 and has a background in tech entrepreneurship and international relations.'
        image={Terence}
      />
      <InfoCard
        title="Betty Faye Doumas-Toto"
        link='https://www.singlemindedforsinglepayer.com/'
        description="Betty has cofounded or holds leadership positions across a number of healthcare justice organizations in California including Single Minded for Single Payer and California Poor People's Campaign."
        image={Betty}
      />
    </div>
  </Layout>
export default PeoplePage
