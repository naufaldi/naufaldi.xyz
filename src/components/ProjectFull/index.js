import React from 'react'
import * as Styled from './styles';
import ContainerLg from 'components/ui/ContainerLg';
import TitleSection from 'components/ui/TitleSection';
import { useStaticQuery, graphql } from 'gatsby';
import Naufaldi from 'assets/images/naufaldixyz.png'
import Deliv from 'assets/images/deliv-beta.png'
import Netflix from 'assets/images/netflix.png'
import Huddle from 'assets/images/huddle.png'
import BelajarKorea from 'assets/images/belajarkorea.png'
import Bolder from 'assets/images/bolder.png'
import Edmuku from 'assets/images/edmuku.png'
import Ksaja from 'assets/images/ksaja.png'
import RumahPekerja from 'assets/images/rumahpekerja.png'
import Shihan from 'assets/images/shihan.png'
import KerjaMantul from 'assets/images/kerja-mantul.png'

const ProjectFull = () => {
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
         
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="http://naufaldi.xyz" target="_blank">
                <Styled.Head>
                  Personal Website
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>GatsbyJS  +  TailwindCSS</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Naufaldi} alt="Naufaldi Website" />
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
              <Styled.SubHead>ReactJS  +  BulmaCSS</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Deliv} alt="Deliv Beta Ver Landingpage" />
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
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Netflix} alt=" Netflix Clone Landingpage" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="http://landing-chal.surge.sh/" target="_blank">
                <Styled.Head>
                  Huddle Landingpage
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>Plain CSS</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Huddle} alt="Huddle Landingpage" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
         
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="https://landing-page-belajar-korea.vercel.app/" target="_blank">
                <Styled.Head>
                 Rumah Pekerja Indonesia Landingpage
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>Boostrap 3 + Next.js + React Hooks</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={RumahPekerja} alt="Rumah Pekerja Indonesia Landingpage" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="https://ksaja-nextjs-msfjvrftg.now.sh/" target="_blank">
                <Styled.Head>
                 KSaja Web News
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>Boostrap 3 + Next.js + Redux</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Ksaja} alt="Ksaja Web News" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
          <Styled.Box>
            <Styled.Porto>
              <Styled.Link href="https://shinhan-bank-mbqnm1yup.now.sh/home.html" target="_blank">
                <Styled.Head>
                 Shihan Course Manajemen
            </Styled.Head>
              </Styled.Link>
              <Styled.SubHead>TailwindCSS + AlpineJS</Styled.SubHead>
              <Styled.Img>
                <img className="transition duration-300 ease-in-out transform hover:-translate-y-6 shadow-lg" src={Shihan} alt="Shihan Course Manajemen" />
              </Styled.Img>
            </Styled.Porto>
          </Styled.Box>
         
        </Styled.Grid>
      </ContainerLg>
    </Styled.Project>
  )
}

export default ProjectFull