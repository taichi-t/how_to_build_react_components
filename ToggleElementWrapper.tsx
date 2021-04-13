import * as React from 'react';

type Props = {
  clickableElement: JSX.Element;
  toggledElement: JSX.Element;
};

const ToggleElementWrapper: React.FC<Props> = ({
  clickableElement,
  toggledElement,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClickButton = React.useCallback(
    () => setIsOpen((isOpen) => !isOpen),
    [setIsOpen]
  );

  const opacityStyle = isOpen ? { opacity: '1' } : { opacity: '0' };

  // clickableElementにonClick propsを追加している
  const clickableElementAddedOnClickProps = React.cloneElement(
    clickableElement,
    { onClick: handleClickButton }
  );

  // toggledElementにスタイルに関するpropsを追加している
  const toggledElementAddedOpacityStyle = React.cloneElement(toggledElement, {
    style: {
      ...toggledElement.props.style,
      ...opacityStyle,
      transition: 'opacity 0.2s',
    },
  });
  return (
    <>
      {clickableElementAddedOnClickProps}
      {toggledElementAddedOpacityStyle}
    </>
  );
};

export {
  ToggleElementWrapper
}