import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
  color: #e64398;
  cursor: pointer;
  text-decoration: none;
`;

const Link = ({ url, title }) => (
  <InnerLink href={url} target='_blank' rel='noopener noreferrer'>
    {title}
  </InnerLink>
);

export default Link;
