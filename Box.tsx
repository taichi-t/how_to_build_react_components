import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  bgColor: string;
} & JSX.IntrinsicElements['div'];

const Box: React.FC<Props> = ({...props}) => <StyledBox {...props} />;

const StyledBox = styled('div')<{ bgColor: string }>(
  {
    width: '100%',
    height: "100%"
  },
  (props) => ({ backgroundColor: props.bgColor })
);

export { Box };
