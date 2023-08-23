import { CircleButton, Button, MenuItem, Icon, Typography } from '../../atoms';
import * as S from './home.styles';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Content>
        {/* <Typography>Atoms!</Typography> */}
        <Icon name='b-credit-card' size='xl' />
      </S.Content>
      <S.Content>
        <CircleButton type='icon' fileName='b-notification' />
        <CircleButton type='image' />
      </S.Content>
      <S.Content>
        <Button title='Ver oferta' />
        <Button title='Ver oferta' grow />
      </S.Content>
      <S.Content>
        <MenuItem title='Home' selected />
        <MenuItem title='Extrato' />
        <MenuItem title='Área Pix' />
        <MenuItem title='Cartão de crédito' />
      </S.Content>
    </S.Wrapper>
  );
};

export default Home;
