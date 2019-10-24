import React from 'react'
import { graphql } from 'gatsby'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import Content from '../components/layout/Content'

import FullWidthContainer from '../components/layout/FullWidthContainer'
import { FullImage, Image } from '../components/visual/FullImage'
import { FullContentCard, HeadingContainer } from '../components/layout/FullContentCard'
import CenteredContainer from '../components/layout/CenteredContainer'
import AlmaHeader from '../components/Header'
import { Button, ButtonContainer } from '../components/visual/Button'
import { Space, P } from '../components/visual/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

const VideoBox = styled.div`
  position: relative;
	padding-bottom: 52.75%;
	padding-top: 25px;
	height: 0;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Construction = ({ data, intl }) => {
  return (
    <Content>

      <SEO title={intl.formatMessage({ id: "construction-title" })} />
      
      <FullContentCard>
        <HeadingContainer>
          <AlmaHeader white title={intl.formatMessage({ id: "construction-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.sep1.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </FullContentCard>



      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-september-2019" })}
        />
        <Space/>
        <VideoBox>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5HuINkl3sOQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoBox>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-september-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-september-2019-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-september-2019-paragraph-3" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-september-2019-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep3.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep4.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep5.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep6.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep7.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep8.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.sep9.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-august-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-august-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-august-2019-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-august-2019-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.june2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june3.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june4.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june5.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-july-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-july-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-july-2019-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-july-2019-paragraph-3" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-july-2019-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <FullImage>
          <Image rounded fluid={data.june6.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june7.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june8.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june9.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-june-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-june-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-june-2019-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-june-2019-paragraph-3" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-june-2019-paragraph-4" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june10.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june11.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june12.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.june13.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-may-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-may-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-may-2019-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-may-2019-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.may1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.may2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-april-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-april-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-april-2019-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.april1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-march-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-march-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-march-2019-paragraph-2" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-march-2019-paragraph-3" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.march1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-february-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-february-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-february-2019-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.feb1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.feb2.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>

      <CenteredContainer>
        <Space/>
        <AlmaHeader
          blue
          title={intl.formatMessage({ id: "construction-january-2019" })}
        />
        <Space/>
        <P>{intl.formatMessage({ id: "construction-january-2019-paragraph-1" })}</P>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-january-2019-paragraph-2" })}</P>
        <Space/>
      </CenteredContainer>

      <FullWidthContainer>
        <Space/>
        <FullImage>
          <Image rounded fluid={data.jan1.childImageSharp.fluid}/>
          <Caption medium>Actual Image</Caption>
          <Watermark medium/>
        </FullImage>
        <Space/>
      </FullWidthContainer>
        
      <CenteredContainer>
        <Space/>
        <P>{intl.formatMessage({ id: "construction-to-vacations" })}</P>
        <Space/>
        <ButtonContainer>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "vacations-title" })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
        <Space/>
      </CenteredContainer>

      <Footer>
        <p>{intl.formatMessage({ id: "copyright-notice" })}</p>
        <p>{intl.formatMessage({ id: "solicitation-notice" })}</p>
      </Footer>

    </Content>
  )
}

export const query = graphql`
  query {
    jan1: file(relativePath: { eq: "construction/01-january-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    feb1: file(relativePath: { eq: "construction/02-february-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    feb2: file(relativePath: { eq: "construction/02-february-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    march1: file(relativePath: { eq: "construction/03-march-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    april1: file(relativePath: { eq: "construction/04-april-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    may1: file(relativePath: { eq: "construction/05-may-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    may2: file(relativePath: { eq: "construction/05-may-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june1: file(relativePath: { eq: "construction/june-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june2: file(relativePath: { eq: "construction/june-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june3: file(relativePath: { eq: "construction/june-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june4: file(relativePath: { eq: "construction/june-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june5: file(relativePath: { eq: "construction/june-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june6: file(relativePath: { eq: "construction/june-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june7: file(relativePath: { eq: "construction/june-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june8: file(relativePath: { eq: "construction/june-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june9: file(relativePath: { eq: "construction/june-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june10: file(relativePath: { eq: "construction/june-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june11: file(relativePath: { eq: "construction/june-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june12: file(relativePath: { eq: "construction/june-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june13: file(relativePath: { eq: "construction/june-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june14: file(relativePath: { eq: "construction/june-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep1: file(relativePath: { eq: "construction/september-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep2: file(relativePath: { eq: "construction/september-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep3: file(relativePath: { eq: "construction/september-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep4: file(relativePath: { eq: "construction/september-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep5: file(relativePath: { eq: "construction/september-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep6: file(relativePath: { eq: "construction/september-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep7: file(relativePath: { eq: "construction/september-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep8: file(relativePath: { eq: "construction/september-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep9: file(relativePath: { eq: "construction/september-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
    
  }
`

export default injectIntl(Construction)