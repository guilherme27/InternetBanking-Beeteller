import * as S from './typography.styles';

export type TypographyProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'base' | 'white' | 'light' | 'success' | 'danger';
};

const Typography = ({
  size = 'md',
  color = 'base',
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <S.Typography size={size} color={color} {...props}>
      {children}
    </S.Typography>
  );
};

export default Typography;
