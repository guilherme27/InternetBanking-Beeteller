import { Icon } from '..';

import * as S from './button.styles';

type ButtonProps = {
  isExpandable?: boolean;
  isExpand?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ isExpandable = false, isExpand = false, children, ...props }: ButtonProps) => {
  return (
    <S.Button $expand={isExpand} $isExpandable={isExpandable} {...props}>
      {children}
      {isExpandable && <Icon name='b-arrow-right' />}
    </S.Button>
  );
};

export default Button;
