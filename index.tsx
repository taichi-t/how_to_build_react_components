import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, StyledButton } from './Button';
import { Box } from './Box';
import { TwoColumnLayout } from './TwoColumnLayout';
import {ToggleElementWrapper} from './ToggleElementWrapper'

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

// const Example2 = () => {
//   return (
//     <TwoColumnLayout>
//       <Box bgColor="blue" />
//       <Box bgColor="red" />
//     </TwoColumnLayout>
//   );
// };

const Example3 = () => {
  const menuItems = ['about', 'home', 'contacts'];
  const toggledElement = (
    <ul
      style={{
        border: '1px solid',
        width: '170px',
      }}
    >
      {menuItems.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );

  return (
    <ToggleElementWrapper
      clickableElement={<Button>Toggle</Button>}
      toggledElement={toggledElement}
    />
  );
};

ReactDOM.render(<Example3 />, document.getElementById('app'));
