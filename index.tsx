import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, StyledButton } from './Button';

const Main = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <Button onClick={handleClick}>count + 1</Button>
      <StyledButton onClick={handleClick}>count + 1</StyledButton>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('app'));
