import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: [React.ReactElement, React.ReactElement];
};

const TwoColumnLayout: React.FC<Props> = ({ children }) => (
  <Container>
    {children[0]}
    {children[1]}
  </Container>
);

const Container = styled('div')`
  display: flex;
  height: 100%;
  & :first-of-type {
    flex: 1 1 10%;
  }
  & :last-of-type {
    flex: 1 1 70%;
  }
`;

export { TwoColumnLayout };
