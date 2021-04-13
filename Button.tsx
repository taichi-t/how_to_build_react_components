type Props = {} & JSX.IntrinsicElements['button'];

//good
const Button: React.FC<Props> = (props) => {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
};

//with styled component or emotion


