import * as React from 'react';
import styled from '@emotion/styled';

type Props = {} & JSX.IntrinsicElements['button'];

//good
const Button: React.FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

//with styled-component or emotion
const StyledButton = styled('button')``;

// 例えばページ内でスタイルをあわせるためにButtonコンポーネントを作ったとしましょう。
// Buttonコンポーネントがクリックされたときに関数を呼び出したいとき、どうやって関数をpropsに渡しますか? 多くのひとがonClick propsに渡そうするでしょう。
// もしclick propsに渡す必要があったら驚くでしょう。 なぜならば標準DOM要素<button>の場合はonClickに渡せばよいから。
// 標準DOM要素と同じようなことをしたい場合ときは、標準DOM要素のprops名に合わせましょう。
// クリックしたときに関数を実行 -> onClick
// フォームの送信時に関数を実行 -> onSubmit
// link先のurl -> href (toが使われる場合も多い)

export { Button, StyledButton };
