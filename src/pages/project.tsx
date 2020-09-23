import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ProjectFull from 'components/ProjectFull';


const ProjectPage: React.FC = () => (
  <Layout>
    <SEO title="Project" />
    <ProjectFull/>
  </Layout>
);

export default ProjectPage;
