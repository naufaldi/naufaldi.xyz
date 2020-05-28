import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const ContainerLg = ({ section, children }) => <Styled.Container section={section}>{children}</Styled.Container>;

ContainerLg.propTypes = {
  section: PropTypes.bool,
  children: PropTypes.any.isRequired
};
export default ContainerLg;
