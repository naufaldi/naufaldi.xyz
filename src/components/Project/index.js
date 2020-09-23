import React from 'react'
import * as Styled from './styles';
import ContainerLg from 'components/ui/ContainerLg';
import TitleSection from 'components/ui/TitleSection';
import { useStaticQuery, graphql } from 'gatsby';
import BelajarKorea from 'assets/images/belajarkorea.png'
import Bolder from 'assets/images/bolder.png'
import Edmuku from 'assets/images/edmuku.png'
import KerjaMantul from 'assets/images/kerja-mantul.png'
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
              <Styled.Link href="https://bolder-aigv4y45k.vercel.app/" target="_blank">
                <Styled.Head>
                  Bolder Landingpage
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>TailwindCSS + Next.js</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Bolder} alt="Bolder Landingpage" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="https://edmuku-frontend.vercel.app/" target="_blank">
                <Styled.Head>
                  Edmuku Education Management
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>TailwindCSS + AlpineJS</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Edmuku} alt="Edmuku Education Management" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="https://kerja-mantul.now.sh/" target="_blank">
                <Styled.Head>
                  Kerja Mantul Education Management
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>TailwindCSS + AlpineJS</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={KerjaMantul} alt="Kerja Mantul Education Management" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="https://landing-page-belajar-korea.vercel.app/" target="_blank">
                <Styled.Head>
                  BelajarKorea.id Landingpage
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>Boostrap 3</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={BelajarKorea} alt="BelajarKorea.id Landingpage" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>

        </Styled.Grid>
      </ContainerLg>
    </Styled.Project>
  )
}

export default Project