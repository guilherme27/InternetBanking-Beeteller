import * as S from './typography.styles';

export type TypographyProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'base' | 'white' | 'dark' | 'success' | 'danger' | 'light' | 'neutralBase';
  bold?: boolean;
};

const Typography = ({
  size = 'md',
  color = 'base',
  bold = false,
  children,
}: TypographyProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <S.Typography size={size} color={color} $bold={bold}>
      {children}
    </S.Typography>
  );
};

export default Typography;
