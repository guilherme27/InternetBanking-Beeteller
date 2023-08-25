import * as S from './image.styles';

const Image = ({ src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <S.Image src={src} {...props} />;
};

export default Image;
