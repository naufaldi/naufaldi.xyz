import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/naufaldi" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        &middot;	
        <Styled.Link
          href="https://twitter.com/f2aldi"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        &middot;	
        <Styled.Link href="https://id.quora.com/profile/Naufaldi-Rafif-Satriya" rel="noreferrer noopener" target="_blank">
          Quora
        </Styled.Link>
        &middot;	
        <Styled.Link href="https://karyakarsa.com/naufaldisatriya" rel="noreferrer noopener" target="_blank">
          Karyakarsa
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
