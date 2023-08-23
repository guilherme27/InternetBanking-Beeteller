import * as S from './button.styles';

type ButtonProps = {
  grow?: boolean;
  title: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ grow, title, ...props }: ButtonProps) => {
  const ButtonComponent = grow ? S.GrowButton : S.Button;

  return (
    <ButtonComponent {...props}>
      <span>{title}</span>
      {grow && <i className='b-arrow-right' />}
    </ButtonComponent>
  );
};

export default Button;
