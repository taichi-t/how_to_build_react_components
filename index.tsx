import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Button, StyledButton } from './Button';
import { Box } from './Box';
import { TwoColumnLayout } from './TwoColumnLayout';

// const Example1 = () => {
//   const [count, setCount] = React.useState(0);
//   const handleClick = React.useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <p>count: {count}</p>
//       <Button onClick={handleClick}>count + 1</Button>
//       <StyledButton onClick={handleClick}>count + 1</StyledButton>
//     </div>
//   );
// };

const Example2 = () => {
  return (
    <TwoColumnLayout>
      <Box bgColor="blue" />
      <Box bgColor="red" />
    </TwoColumnLayout>
  );
};

ReactDOM.render(<Example2 />, document.getElementById('app'));
