import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () =>
  <Layout pageTitle="Events" activeHeaderLink="Events">
    <h1>Events calendar</h1>
    <p>This is a calendar of all of our public meetings and events. You're encouraged to join any meeting that interests you. All participants are expected to abide by our <a href='https://actionnetwork.org/forms/code-of-conduct-2?source=direct_link&' target='blank'>Code of Conduct</a> when in any Medicare for All Everywhere community or event.</p>
    <p>To keep meetings running orderly and on time meeting facilitators may only allow for speakers who are on the<a href='https://docs.google.com/document/d/1-JPt1EVL3WAOSfIJ8TatwznozjaF1elkI-K6G1L8exg/edit#heading=h.nyn9s1nk7mz4'> meeting agenda</a>, but you are encouraged to use the "raise hand" function to ask to speak. You are welcome to make suggestions for things you would like to see on the agenda by leaving a comment on the Google Document. Facilitators are not required to to give all suggestions agenda time, but they will try and reserve time for questions and discussion from all participants.</p>
    <iframe src="https://calendar.google.com/calendar/embed?src=info%40medicareforalleverywhere.org" style={{border: 0, width:'100%', height:550, frameborder:0, scrolling:'no'}}></iframe>
    <h1>How to join a meeting using Jitsi Meet</h1>
    <p>We use <a href='https://meet.jit.si/' target='_blank'>Jitsi Meet</a> for our videoconferencing software which is a free and open source tool that allows us to create as many meeting links as we need without the hassle of managing accounts and passwords. You should be able to join from a computer, tablet, or phone using the built-in web browser. However, if you prefer you can also <a href='https://jitsi.org/downloads/' target='_blank'>download it as an app</a>.</p>
    <p>If you would like to practice joining a meeting, you may join this fake meeting room by clicking the link below.</p>
    <p><a href='https://meet.jit.si/M4AE-test-room' target='_blank'>https://meet.jit.si/M4AE-test-room</a></p>
    <p>You can find the meeting link in the description of the meeting on our Google Calendar. To receive notifications about our upcoming meetings use this link to <a href='https://actionnetwork.org/forms/code-of-conduct-2?source=direct_link&' target='_blank'>join our Slack</a> (you will be asked to accept our Code of Conduct first).</p>
  </Layout>
export default IndexPage
