import S_Button from './S_Button';

interface ButtonProps {
  vod?: string;
}

const Button = (options: ButtonProps) => {
  return <S_Button size='xl'> That is just a test</S_Button>;
};

export default Button;
