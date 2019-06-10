import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, injectIntl } from 'gatsby-plugin-intl'

// import Instagram from '../components/Instagram'
// import News from '../components/News'

import PageWrapper from '../components/PageWrapper'
import FullWidthContainer from '../components/styled/FullWidthContainer'
import CenteredContainer from '../components/styled/CenteredContainer'
import HorizontalScrollContainer from '../components/styled/HorizontalScrollContainer'
import H1 from '../components/styled/H1'
// import Logo from '../components/Logo'

import almaLogoWithBG from '../images/alma-logo-with-bg.svg'

// const FullContentCard = styled.div`
//   grid-column: 1 / 4;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 90vh;
//   display: grid;
//   grid-template-rows: repeat(8, 1fr);
//   grid-template-columns: repeat(8, 1fr);

//   @media (min-width: 50rem) {
//     height: 100vh;
//   }
// `

const FullContentCard = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  width: 100%;
  /* width: 100vw; */
  height: 90vh;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);

  @media (min-width: 50rem) {
    height: 100vh;
  }
`

const MainLogo = styled.img`
  grid-row: 1 / 3;
  grid-column: 3 / 7;
  z-index: 5;
  align-self: center;
  justify-self: center;
  filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25));
  /* filter: drop-shadow(
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ); */

  @media (min-width: 50rem) {
    grid-column: 4 / 6;
    display: none;
  }
`

const FullContentImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 0;
`

// const FullImg = styled(Img)`
//   width: 100%;
//   height: 90vh;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   object-fit: cover;
//   z-index: 0;

//   @media (min-width: 50rem) {
//     height: 100vh;
//   }
// `

// const PageTitle = styled.div`
//   grid-row: 1 / 2;
//   grid-column: 1 / 9;
//   z-index: 1;
//   color: black;
//   font-size: 32px;
//   align-self: center;
//   justify-self: center;
// `

const PageSlogan = styled.div`
  grid-row: 7 / 9;
  grid-column: 1 / 9;
  z-index: 1;
  color: white;
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
  align-self: end;
  justify-self: center;
  margin-bottom: 3rem;

  @media (min-width: 50rem) {
    grid-row: 8 / 9;
    grid-column: 1 / 9;
  }
`

const Card = styled.div`
  flex: 0 0 auto;
  margin: 2rem 1rem;
  padding: 1rem; 
  width: 80%;
  background: white;
  line-height: 1.5;
  font-size: 18px;
  white-space: pre-wrap;
  border-radius: 8px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);

  :first-child {
    margin-left: 2rem;
  }

  :last-child {
    margin-right: 0;
  }

  @media (min-width: 50rem) {
    width: 40%;
  }
`

// const NavLink = styled(Link)`
//   text-decoration: none;
//   padding: 1rem;
//   line-height: 1;
// `

const P = styled.p`
  margin: 1rem 0;
  padding: 0;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));

  @media (min-width: 50rem) {
    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`

const NewsContainer = styled.div`
  grid-column: 1 / 8;
  margin: 0;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (orientation: landscape) {
    .content-grid {
      margin: 2rem;
    }
  }
`

const NewsCard = styled(Link)`
  box-sizing: border-box;
  /* top: 0px; */
  margin: 0;
  padding: 0;
  /* align-self: stretch;
  justify-self: stretch; */
  /* padding-top: calc(1 / (16/9) * 100%); */
  position: relative;
  text-decoration: none;
  /* padding: 1rem; */
  line-height: 1;
  background: white;
  cursor: pointer;
  border-radius: 16px;
  transition: All 250ms ease;
  box-shadow: 
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ;
  /* padding-top: calc(1 / (16/12) * 100%); */
  /* padding-bottom: 100%; */
  padding-top: 55%;

  :hover {

    box-shadow:
      0 30px 60px -12px rgba(50,50,93,.25),
      0 18px 36px -18px rgba(0,0,0,.3),
      0 -12px 36px -8px rgba(0,0,0,.025)
    ;
    transform: translateY(-2px);
  }

  :active {
    transition: All 100ms ease;
    transform: translateY(2px);
  }

  @media (min-width: 50rem) {
    /* padding-top: calc(1 / (16/8) * 100%); */
    padding-top: 55%;
  }
`

const NewsContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  /* margin: 0;
  padding: 0; */
`

const NewsTitle = styled.h1`
  text-shadow: 0px 0px 8px hsla(360, 100%, 100%, 1);
  font-size: calc(32px + (64 - 32) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Caveat', 'Knewave', 'Oswald', 'Condiment', 'Over the Rainbow',  sans-serif;
  font-weight: normal;
  color: #fff;
  margin: 0;
  padding: 0 0 0 1rem;
  font-weight: normal;
  color: #fff;
  line-height: 1;
  font-style: bold;
  grid-column: 1 / 13;
  grid-row: 5 / 7;
  align-self: end;
  z-index: 5;

  @media (min-width: 800px) {
    font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
  }
`

const NewsSubtitle = styled.h2`
  text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
  font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  margin: 0;
  padding: 0 0 0 1rem;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  align-self: center;
  font-style: normal;
  grid-column: 1 / 13;
  grid-row: 7 / 8;
  z-index: 4;

  @media (min-width: 800px) {
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
  }
`

const NewsDate = styled.h3`
  text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
  font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  grid-column: 1 / 13;
  grid-row: 8 / 9;
  z-index: 5;
  padding: 0 0 0 1rem;
  margin: 0;
`

const NewsImage = styled(Img)`
  grid-column: 1 / 13;
  grid-row: 1 / 9;
  width: 100%;
  height: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 16px;
  z-index: 0;
  /* margin: 0;
  padding: 0; */
`

const NewsScrim = styled.div`
  grid-column: 1 / 13;
  grid-row: 1 / 9;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.006) 8.1%,
    hsla(0, 0%, 0%, 0.024) 15.5%,
    hsla(0, 0%, 0%, 0.052) 22.5%,
    hsla(0, 0%, 0%, 0.088) 29%,
    hsla(0, 0%, 0%, 0.13) 35.3%,
    hsla(0, 0%, 0%, 0.176) 41.2%,
    hsla(0, 0%, 0%, 0.225) 47.1%,
    hsla(0, 0%, 0%, 0.275) 52.9%,
    hsla(0, 0%, 0%, 0.324) 58.8%,
    hsla(0, 0%, 0%, 0.37) 64.7%,
    hsla(0, 0%, 0%, 0.412) 71%,
    hsla(0, 0%, 0%, 0.448) 77.5%,
    hsla(0, 0%, 0%, 0.476) 84.5%,
    hsla(0, 0%, 0%, 0.494) 91.9%,
    hsla(0, 0%, 0%, 0.5) 100%
  );
  border-radius: 16px;
  z-index: 1;
  /* margin: 0;
  padding: 0; */
`

const InstaGrid = styled.div`
  margin: 0;
  padding: 2rem;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr); */
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 1fr; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (min-width: 50rem) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const InstaPost = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 16px;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
  position: relative;
  transition: All 250ms ease;
  box-shadow: 
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ;

  :hover {
    box-shadow:
      0 30px 60px -12px rgba(50,50,93,.25),
      0 18px 36px -18px rgba(0,0,0,.3),
      0 -12px 36px -8px rgba(0,0,0,.025)
    ;
    transform: translateY(-2px);
  }
`

const InstaSpacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* display: inline-block; */
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
`

const InstaLikes = styled.p`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  margin: 0;
  padding: 0;
  justify-self: start;
  align-self: end;
  z-index: 5;
  color: white;
  justify-self: center;
  font-size: calc(8px + (32 - 12) * ((100vw - 300px) / (1600 - 300)));
`

const InstaComments = styled.p`
  grid-row: 8 / 9;
  grid-column: 5 / 9;
  margin: 0;
  padding: 0;
  z-index: 5;
  color: white;
  justify-self: center;
  font-size: calc(8px + (32 - 12) * ((100vw - 300px) / (1600 - 300)));
`

const InstaImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  margin: 0;
  padding: 0;
  border-radius: 16px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const InstaScrim = styled.div`
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.003) 8.1%,
    hsla(0, 0%, 0%, 0.012) 15.5%,
    hsla(0, 0%, 0%, 0.026) 22.5%,
    hsla(0, 0%, 0%, 0.044) 29%,
    hsla(0, 0%, 0%, 0.065) 35.3%,
    hsla(0, 0%, 0%, 0.088) 41.2%,
    hsla(0, 0%, 0%, 0.113) 47.1%,
    hsla(0, 0%, 0%, 0.137) 52.9%,
    hsla(0, 0%, 0%, 0.162) 58.8%,
    hsla(0, 0%, 0%, 0.185) 64.7%,
    hsla(0, 0%, 0%, 0.206) 71%,
    hsla(0, 0%, 0%, 0.224) 77.5%,
    hsla(0, 0%, 0%, 0.238) 84.5%,
    hsla(0, 0%, 0%, 0.247) 91.9%,
    hsla(0, 0%, 0%, 0.25) 100%
  );
  z-index: 1;
  border-radius: 16px;
`

const Index = ({ data, intl }) => {

  return (
    
    // <Fragment>
    <PageWrapper>

      <FullContentCard>
        <MainLogo src={almaLogoWithBG} alt="The Alma Resort Logo."  />
        {/* <PageTitle>{intl.formatMessage({ id: "title" })}</PageTitle> */}
        <PageSlogan>{intl.formatMessage({ id: "slogan" })}</PageSlogan>
        <FullContentImage fluid={data.resortOverview.childImageSharp.fluid}/>
      </FullContentCard>
  
      <CenteredContainer>
        <H1>Resor<span>t</span></H1>
        <P>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</P>
      </CenteredContainer>
  
      <FullWidthContainer>
        <HorizontalScrollContainer blue>
          <Card>
            <Img fluid={data.almaResort1.childImageSharp.fluid} />
            <P>
              Poop on grasses under the bed bathe private parts with tongue then lick owner's face so i can haz.
            </P>
          </Card>
          <Card>
            <Img fluid={data.almaResort2.childImageSharp.fluid} />
            <P>
              Cream at dripper chicory, carajillo milk acerbic java robusta, that ut, irish cultivar.
            </P>
          </Card>
          <Card>
            <Img fluid={data.almaResort3.childImageSharp.fluid} />
            <P>
              Leverage agile frameworks to provide a robust synopsis for high level overviews.
            </P>
          </Card>
          <Card>
            <Img fluid={data.almaResort4.childImageSharp.fluid} />
            <P>
              The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
            </P>
          </Card>
          <Card>
          <Img fluid={data.almaResort1.childImageSharp.fluid} />
            <P>
              Beef shank ham hock biltong. Beef ribs chuck fatback tail, cupim filet mignon strip steak spare ribs turducken tri-tip short loin.
            </P>
          </Card>
        </HorizontalScrollContainer>
      </FullWidthContainer>

    <CenteredContainer>
      <H1>Room<span>s</span></H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>

    <FullWidthContainer>
      <HorizontalScrollContainer orange>
        <Card>
          <Img fluid={data.almaBathroom1.childImageSharp.fluid} />
          <P>
            Poop on grasses under the bed bathe private parts with tongue then lick owner's face so i can haz.
          </P>
        </Card>
        <Card>
          <Img fluid={data.almaBedroom1.childImageSharp.fluid} />
          <P>
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
          </P>
        </Card>
        <Card>
          <Img fluid={data.almaKitchen1.childImageSharp.fluid} />
          <P>
            Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness.
          </P>
        </Card>
        <Card>
         <Img fluid={data.almaLivingRoom1.childImageSharp.fluid} />
          <P>
            Short ribs bresaola bacon burgdoggen sausage biltong ham. Shankle beef ribs ham ribeye.
          </P>
        </Card>
        <Card>
         <Img fluid={data.almaLivingRoom2.childImageSharp.fluid} />
          <P>
            Short ribs bresaola bacon burgdoggen sausage biltong ham. Shankle beef ribs ham ribeye.
          </P>
        </Card>
      </HorizontalScrollContainer>
    </FullWidthContainer>

    <CenteredContainer>
      <H1>Amenitie<span>s</span></H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>

    <FullWidthContainer>
      <HorizontalScrollContainer blue>
        <Card>
          <Img fluid={data.almaResort1.childImageSharp.fluid} />
          <P>
            Poop on grasses under the bed bathe private parts with tongue then lick owner's face so i can haz.
          </P>
        </Card>
        <Card>
          <Img fluid={data.almaResort2.childImageSharp.fluid} />
          <P>
            Cream at dripper chicory, carajillo milk acerbic java robusta, that ut, irish cultivar.
          </P>
        </Card>
        <Card>
          <Img fluid={data.almaResort3.childImageSharp.fluid} />
          <P>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
          </P>
        </Card>
        <Card>
          <Img fluid={data.almaResort4.childImageSharp.fluid} />
          <P>
            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
          </P>
        </Card>
        <Card>
         <Img fluid={data.almaResort5.childImageSharp.fluid} />
          <P>
            Beef shank ham hock biltong. Beef ribs chuck fatback tail, cupim filet mignon strip steak spare ribs turducken tri-tip short loin.
          </P>
        </Card>
      </HorizontalScrollContainer>
    </FullWidthContainer>

    <CenteredContainer>
      <H1>New<span>s</span></H1>
      <P>All the latest news that's fit to print about the worlds newest and brightest hotspot in the Vietnam travel scene</P>
      <h4>{data.articles.totalCount} Posts</h4>
    </CenteredContainer>
  
    <FullWidthContainer>
      <NewsContainer>
        {data.articles.edges.map(({ node }) => (
          <NewsCard key={node.id} to={node.fields.slug}>
            <NewsContentWrapper>
              <NewsTitle>{node.frontmatter.title}</NewsTitle>
              <NewsSubtitle>{node.frontmatter.subtitle}</NewsSubtitle>
              <NewsDate>{node.frontmatter.date}</NewsDate>
              <NewsImage fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
              <NewsScrim />
            </NewsContentWrapper>
          </NewsCard>
        ))}
      </NewsContainer>

      {/* <News /> */}

    </FullWidthContainer>
  
    <CenteredContainer>
      <H1>About U<span>s</span></H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>
      
    <CenteredContainer>
      <H1>Instagra<span>m</span></H1>
    </CenteredContainer>

    <FullWidthContainer>
      <InstaGrid>
        {data.allInstaNode.edges.map(({ node }) => (
          <InstaPost key={node.id}>
            <InstaSpacer>
              {/* <InstaLikes>❤️ {node.likes}</InstaLikes>
              <InstaComments>💬 {node.comments}</InstaComments> */}
              <InstaScrim />
              {/* <InstaImage src={node.original} /> */}
              <InstaImage fluid={node.localFile.childImageSharp.fluid} />
            </InstaSpacer>
          </InstaPost>
        ))}
      </InstaGrid>

      {/* <Instagram /> */}

    </FullWidthContainer>
  
    </PageWrapper>
    // </Fragment>
  )
}

export const query = graphql`
  query {
    allInstaNode(sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 256) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
    articles: allMdx {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            description
            date(formatString: "MMMM Do, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 3840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    resortOverview: file(relativePath: { eq: "alma-resort-overview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort1: file(relativePath: { eq: "resort/alma-resort-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort2: file(relativePath: { eq: "resort/alma-resort-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort3: file(relativePath: { eq: "resort/alma-resort-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort4: file(relativePath: { eq: "resort/alma-resort-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaResort5: file(relativePath: { eq: "resort/alma-resort-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaBathroom1: file(relativePath: { eq: "rooms/alma-bathroom-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaBedroom1: file(relativePath: { eq: "rooms/alma-bedroom-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaKitchen1: file(relativePath: { eq: "rooms/alma-kitchen-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaLivingRoom1: file(relativePath: { eq: "rooms/alma-living-room-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    almaLivingRoom2: file(relativePath: { eq: "rooms/alma-living-room-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default injectIntl(Index)

// export default Index