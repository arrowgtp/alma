import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from '@reach/router';
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from '../components/seo'
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import { motion, AnimatePresence } from 'framer-motion'

import Content from '../components/layout/Content'

import FullWidthContainer from '../components/layout/FullWidthContainer'
import { FullImage, Image } from '../components/visual/FullImage'
import { FullContentCard, HeadingContainer } from '../components/layout/FullContentCard'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, SmallSpace, H1, H2, P, UL, ListTitle, LI } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'


const StickyBox = styled.div`
  grid-column: 1 /4;
  margin: 0;
  padding: 0;
  z-index: 1;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(2rem, 1fr) 
    minmax(1rem, 45rem) 
    minmax(2rem, 1fr)
  ;
`

const CenteredStickyContainer = styled(CenteredContainer)`
  position: fixed;
  bottom: 8vh;
  bottom: calc(var(--vh, 1vh) * 8);
  width: 100vw;
  margin: 1rem 0;
  padding: 1rem 0;
  background: white;
  opacity: 1;
  z-index: 5;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  /* border: 1px solid red; */
  /* overflow-x: auto;
  -webkit-overflow-scrolling: touch; */
  box-shadow: 0px 0px 32px rgba(0,0,0,.25);

  @media (min-width: 50rem) {
    width: 100%;
    position: sticky;
    top: 1rem;
    border-radius: 32px;
  }
`

const JobButton = styled.button`
  background: #ddd;
  /* border: 1px solid red; */
  border: none;
  font-size: 10px;
  padding: 0.5rem 1.25rem;
  margin: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 16px;

  &:active {
    background: #111;
  }

  &:focus {
    background: #555;
    color: white;
    outline: none;
  }

  @media (min-width: 50rem) {
    margin: 0 1rem;
    font-size: 16px;
  }
`

const Showroom = ({ data, intl }) => {
  return (
    <Content>

      <SEO title="Careers" />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader
            white
            title="Careers"
          />
        </HeadingContainer>
        <Image grid fluid={data.showroomEntrance.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </FullContentCard>

      <StickyBox>
        <CenteredStickyContainer>
          <JobButton
            tabindex="0"
            onClick={() => {navigate('#office-manager')}}
          >
            Office Manager
          </JobButton>
          <JobButton
            tabindex="1"
            onClick={() => {navigate('#administrative-asistant')}}
          >
            Administrative Asistant
          </JobButton>
          <JobButton
            tabindex="2"
            onClick={() => {navigate('#vacation-counselor')}}
          >
            Vacation Counselor
          </JobButton>
        </CenteredStickyContainer>

        <CenteredContainer id="office-manager" tabindex="0">
          <Space/>
          <Space/>
          <Space/>
          <H1>Office Manager</H1>
          <SmallSpace/>
          <P><strong>Position:</strong> Office Manager</P>
          <P><strong>Where:</strong> Alma Resorts, 575 Anton Blvd., Suite 650, Costa Mesa, CA 92626</P>
          <P><strong>Type of Business:</strong> Sales and Marketing Operation</P>
          <P><strong>Hours of Operation:</strong> Wednesday – Sunday, must be flexible with hours</P>
          <P><strong>Compensation:</strong> $45,000 to $50,000 annually depending on experience plus monthly bonus</P>
          <P><strong>Benefits:</strong> Full benefits available after 60 days of employment</P>
          <Space/>
          <H2>Position Overview</H2>
          <SmallSpace/>
          <P>We are a new start up sales and marketing company located in Costa Mesa, California. We are an off-site sales operation for a five-star resort being built in Nha Trang, Vietnam. Our focus initially is to market to the Southern California Vietnamese American community and expand that market as we grow as a company.</P>
          <P>We are looking for an Office Manager who is very detail oriented and has very good organizational skills. The candidate will be responsible for the overall running of the office, kids club, staffing, training, contract processing and supporting the sales and marketing organizations. The candidate should have excellent communication skills and preferably proficient in English and Vietnamese.</P>
          <Space/>
          <H2>Office Manager Duties and Responsibilities</H2>
          <SmallSpace/>
          <UL>
            <LI>Hire, train and manage the administrative staff</LI> 
            <LI>Process sales contracts in an expeditious, efficient manner</LI>
            <LI>Ensure that guests are properly checked in, dispositioned in the system and taken care of properly throughout the guest experience</LI>
            <LI>For those guests with children, manage the check-in process and supervise the Kids Club activities while the parents are in the Sales process</LI>
            <LI>Manage the inventory, distribution and accounting of gifts to be given to guests and orchestrate the daily/weekly coordination of the front desk, food & beverage, gifting and contract processing functions and ensure that Sales & Marketing collateral and first day incentive materials are adequately stocked</LI>
            <LI>Learn new tracking software and ensure that all administrative staff are trained properly</LI>
            <LI>Run timely marketing and sales reports as directed</LI>
            <LI>Ensure that all contracts, reports etc. are reported and filed properly</LI>
            <LI>Manage the ordering of office supplies and other supplies for serving guests</LI>
            <LI>Create a positive atmosphere in supporting sales operations in the office</LI>
            <LI>Maintain professionalism at all times and ensure the same for all employees</LI>
            <LI>Coordinate payroll with PEO company and accounting with outsourced accounting firm</LI>
            <LI>Write SOP’s as directed</LI>
            <LI>Establish the weekly scheduling for all Sales & Marketing Operations Team personnel to ensure proper operational coverage</LI>
            <LI>Manage the Payroll processing function for all Sales & Marketing Center personnel to ensure accurate and timely salary, hourly and commission payments</LI>
            <LI>Oversee all Bank Account activity and relations with Bank Staff and Management</LI>
            <LI>Review and administer all weekly/monthly payroll, accounting & internal/third-party billing & accounts receivable for accuracy and timely payment processing</LI>
            <LI>Work with internal Marketing and Sales stakeholders to customize and design performance metrics and cost/benefit reports using Excel and other reporting tools</LI>
            <LI>Gather, refine, and transform data into accurate and valuable analytics reports that support decision making and process improvements</LI>
            <LI>Supervise all aspects of the Contract Processing and Closing process to ensure that all Federal and State regulatory information, documents and requirements are current in the Closing process and reviewed and updated on a regular basis</LI>
          </UL>
          <H2>Office Manager Requirements and Qualifications</H2>
          <UL>
            <LI>Prior experience handling office responsibilities, experience in customer service, or related field</LI> 
            <LI>Excellent verbal and written communication skills</LI>
            <LI>Flexible in working hours</LI>
            <LI>Bilingual in English and Vietnamese a plus</LI>
            <LI>Highly organized multi tasker who works well in a fast-paced environment</LI>
            <LI>Undergraduate or graduate degree in a business discipline with proven analytical experience and skills</LI>
            <LI>Strong computer skills are a requirement with demonstrated experience working with Excel and other performance analytics tools preferred</LI>
            <LI>Possess high level of competency and demonstrable skills in Microsoft Office Suite (Excel, PowerPoint, Word, QuickBooks, etc.)</LI>
            <LI>Superior analytical and problem-solving skills</LI>
            <LI>Strong interpersonal skills with ability to work in a highly visible role that will interact with individuals at all organizational levels, customers and leaders in the local community</LI>
            <LI>Strong project management skills and ability to self direct efforts towards results without detailed instructions from management is a requirement</LI>
            <LI>Improve and challenge existing procedures and practices to maximize efficiency</LI>
            <LI>Maintain and analyze key marketing and sales productivity and forecasting metrics</LI>
            <LI>Work closely with Senior Sales & Marketing leaders to ensure accurate & timely delivery of information required for performance analysis to review and develop action plans</LI>
            <LI>Investigate and resolve revenue/cost/vendor/payroll/commissions issues</LI>
            <LI>Help support Executive Management by collaborating with sales, marketing and operations/servicing teams</LI>
            <LI>Accounting or Finance background a plus</LI>
          </UL>
          <H2>Contact Information</H2>
          <SmallSpace/>
          <P><strong>Hank Scott</strong></P>
          <P><strong>Email:</strong> hankscott@cox.net</P>
          <P><strong>Mobile:</strong> (949) 878-8287</P>
          <Space/>
        </CenteredContainer>

        <CenteredContainer id="administrative-asistant" tabindex="1">
          <Space/>
          <Space/>
          <Space/>
          <H1>Administrative Asistant</H1>
          <SmallSpace/>
          <P><strong>Position:</strong> Administrative Assistant</P>
          <P><strong>Where:</strong> Alma Resorts, 575 Anton Blvd., Suite 650, Costa Mesa, CA 92626</P>
          <P><strong>Type of Business:</strong> Sales and Marketing Operation</P>
          <P><strong>Hours of Operation:</strong> Wednesday – Sunday, must be flexible with hours</P>
          <P><strong>Compensation:</strong> $15.00 per hour plus monthly bonus.</P>
          <P><strong>Benefits:</strong> Full benefits available after 60 days of employment</P>
          <Space/>
          <H2>Position Overview</H2>
          <SmallSpace/>
          <P>We a new start up sales and marketing company located in Costa Mesa, California. We are an off-site sales operation for a five-star resort being built in Nha Trang, Vietnam. Our focus initially is to market to the Southern California Vietnamese community and expand that market as we grow as a company.</P>
          <P>We are looking for an administrative assistant in an entry level position to assist the office manager running the office. The candidate will be responsible for a variety of duties including reception duties, serving customers, supervising the kids’ corner, performing a variety of sales and marketing reporting and helping in contract processing. The position requires flexibility and the ability to learn new things. The candidate should have excellent communication and organizational skills and preferably proficient in English and Vietnamese.</P>
          <Space/>
          <H2>Administrative Assistant Duties and Responsibilities</H2>
          <SmallSpace/>
          <UL>
            <LI>Perform various functions as directed by the Office Manager</LI> 
            <LI>Help process sales contracts in an expeditious, efficient manner</LI>
            <LI>Ensure that guests are properly checked in and taken care of properly</LI>
            <LI>Learn new tracking software for reception duties and reporting</LI>
            <LI>Run timely marketing and sales reports as directed</LI>
            <LI>Ensure that all contracts, reports etc. are filed properly</LI>
            <LI>Create a positive atmosphere in supporting sales operations in the office</LI>
            <LI>Maintain professionalism at all times</LI>
          </UL>
          {/* <Space/> */}
          <H2>Administrative Assistant Requirements and Qualifications</H2>
          {/* <SmallSpace/> */}
          <UL>
            <LI>Proficient computer skills including Microsoft Office Suite</LI> 
            <LI>Prior experience handling office responsibilities, experience in customer service, or related field</LI>
            <LI>Excellent verbal and written communication skills</LI>
            <LI>Flexible in working hours</LI>
            <LI>Bilingual in English and Vietnamese a plus</LI>
            <LI>Highly organized multi tasker who works well in a fast-paced environment</LI>
          </UL>

          <H2>Contact Information</H2>
          <SmallSpace/>
          <P><strong>Hank Scott</strong></P>
          <P><strong>Email:</strong> hankscott@cox.net</P>
          <P><strong>Mobile:</strong> (949) 878-8287</P>
          <Space/>
        </CenteredContainer>

        <CenteredContainer id="vacation-counselor" tabindex="2">
          <Space/>
          <Space/>
          <Space/>
          <H1>Vacation Counselor</H1>
          <SmallSpace/>
          <P><strong>Position:</strong> Administrative Assistant</P>
          <P><strong>Where:</strong> Alma Resorts, 575 Anton Blvd., Suite 650, Costa Mesa, CA 92626</P>
          <P><strong>Type of Business:</strong> Sales and Marketing Operation</P>
          <P><strong>Hours of Operation:</strong> Wednesday – Sunday, must be flexible with hours</P>
          <P><strong>Compensation:</strong> $15.00 per hour plus monthly bonus.</P>
          <P><strong>Benefits:</strong> Full benefits available after 60 days of employment</P>
          <Space/>
          <H2>Position Overview</H2>
          <SmallSpace/>
          <P>We a new start up sales and marketing company located in Costa Mesa, California. We are an off-site sales operation for a five-star resort being built in Nha Trang, Vietnam. Our focus initially is to market to the Southern California Vietnamese community and expand that market as we grow as a company.</P>
          <P>We are looking for an administrative assistant in an entry level position to assist the office manager running the office. The candidate will be responsible for a variety of duties including reception duties, serving customers, supervising the kids’ corner, performing a variety of sales and marketing reporting and helping in contract processing. The position requires flexibility and the ability to learn new things. The candidate should have excellent communication and organizational skills and preferably proficient in English and Vietnamese.</P>
          <Space/>
          <H2>Vacation Counselor Duties and Responsibilities</H2>
          <SmallSpace/>
          <UL>
            <LI>Perform various functions as directed by the Office Manager</LI> 
            <LI>Help process sales contracts in an expeditious, efficient manner</LI>
            <LI>Ensure that guests are properly checked in and taken care of properly</LI>
            <LI>Learn new tracking software for reception duties and reporting</LI>
            <LI>Run timely marketing and sales reports as directed</LI>
            <LI>Ensure that all contracts, reports etc. are filed properly</LI>
            <LI>Create a positive atmosphere in supporting sales operations in the office</LI>
            <LI>Maintain professionalism at all times</LI>
          </UL>
          <H2>Vacation Counselor Requirements and Qualifications</H2>
          <UL>
            <LI>Proficient computer skills including Microsoft Office Suite</LI> 
            <LI>Prior experience handling office responsibilities, experience in customer service, or related field</LI>
            <LI>Excellent verbal and written communication skills</LI>
            <LI>Flexible in working hours</LI>
            <LI>Bilingual in English and Vietnamese a plus</LI>
            <LI>Highly organized multi tasker who works well in a fast-paced environment</LI>
          </UL>
          <H2>Contact Information</H2>
          <SmallSpace/>
          <P><strong>Hank Scott</strong></P>
          <P><strong>Email:</strong> hankscott@cox.net</P>
          <P><strong>Mobile:</strong> (949) 878-8287</P>
          <Space/>
        </CenteredContainer>
      </StickyBox>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </Content>
  )
}

export const query = graphql`
  query {
    showroomEntrance: file(relativePath: { eq: "showroom/showroom-entrance-3x2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(Showroom)