import * as S from './avatar.styles';

type AvatarProps = {
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Avatar = ({ src, ...props }: AvatarProps) => {
  return (
    <S.Avatar {...props}>
      <img src={src} />
    </S.Avatar>
  );
};

export default Avatar;
