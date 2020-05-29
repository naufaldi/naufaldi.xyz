import React from 'react'
import * as Styled from './styles';
import ContainerLg from 'components/ui/ContainerLg';
import TitleSection from 'components/ui/TitleSection';
import { useStaticQuery, graphql } from 'gatsby';
import Naufaldi from 'assets/images/naufaldixyz.png'
import Deliv from 'assets/images/deliv-beta.png'
import Netflix from 'assets/images/netflix.png'
import Huddle from 'assets/images/huddle.png'
const Project = () => {
  const { markdownRemark } = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: { category: { eq: "project section" } }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`);
  const sectionTitle = markdownRemark.frontmatter;
  return (
    <Styled.Project>
    <ContainerLg >
    <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Grid>
        <Styled.Box>
          <Styled.Porto>
          <Styled.Link href="http://naufaldi.xyz" target="_blank">
            <Styled.Head>
                Personal Website
            </Styled.Head>
          </Styled.Link>
          <Styled.SubHead>GatsbyJS + TailwindCSS</Styled.SubHead>
          <Styled.Img> 
            <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Naufaldi} alt="Naufaldi Website"/>
          </Styled.Img>
          </Styled.Porto>
        </Styled.Box>
        <Styled.Box>
        <Styled.Porto>
          <Styled.Link href="https://react-deliv.netlify.app/" target="_blank" >
            <Styled.Head>
                Deliv Ver. Beta Landingpage
            </Styled.Head>
          </Styled.Link>
          <Styled.SubHead>ReactJS + BulmaCSS</Styled.SubHead>
          <Styled.Img> 
            <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Deliv} alt="Deliv Beta Ver Landingpage"/>
          </Styled.Img>
          </Styled.Porto>
        </Styled.Box>
        <Styled.Box>
        <Styled.Porto>
          <Styled.Link href="http://netflix-cloness.surge.sh/" target="_blank">
            <Styled.Head>
               Netflix Clone Landingpage
            </Styled.Head>
          </Styled.Link>
          <Styled.SubHead>Plain CSS</Styled.SubHead>
          <Styled.Img> 
            <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Netflix} alt="               Netflix Clone Landingpage"/>
          </Styled.Img>
          </Styled.Porto>
        </Styled.Box>
        <Styled.Box>
        <Styled.Porto>
          <Styled.Link href="http://landing-chal.surge.sh/"  target="_blank">
            <Styled.Head>
                Huddle Landingpage
            </Styled.Head>
          </Styled.Link>
          <Styled.SubHead>Plain CSS</Styled.SubHead>
          <Styled.Img> 
            <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Huddle} alt="Huddle Landingpage"/>
          </Styled.Img>
          </Styled.Porto>
        </Styled.Box>
      
      </Styled.Grid>
    </ContainerLg>
    </Styled.Project>
  )
}

export default Project