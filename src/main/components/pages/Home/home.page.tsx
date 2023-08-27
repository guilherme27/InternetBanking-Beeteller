import { useEffect, useState } from 'react';

import { Account } from '@/common/@types/account';
import { Transation } from '@/common/@types/movement';
import { Offer } from '@/common/@types/offer';
import { CurrencyHelper } from '@/common/helpers';
import { initialState } from '@/common/helpers/state.helper';
import Grid from '@/common/styles/GridLayout/grid-item.layout';
import Beeteller from '@/core/services/beeteller/beeteller.services';
import { CircleButton, Icon, Typography, Image, Avatar } from '@/main/components/atoms';
import { Card } from '@/main/components/molecules';
import { Menu, OfferCard, CardList } from '@/main/components/organisms';

import * as S from './home.styles';

const Home = () => {
  const user = 'João';

  const [offer, setOffer] = useState<Offer>();
  const [account, setAccount] = useState<Account>();
  const [movement, setMovement] = useState<Transation[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (offer && account && movement) {
      setLoading(false);
    }
  }, [offer, account, movement]);

  useEffect(() => {
    const getInfoAccount = async () => {
      try {
        const { data } = await Beeteller().getAccount();
        setAccount(data);
      } catch (e) {
        console.error(e);
      }
    };

    const getMoviments = async () => {
      try {
        const { data } = await Beeteller().getMoviment();
        setMovement(data);
      } catch (e) {
        console.error(e);
      }
    };

    const getOffers = async () => {
      try {
        const { data } = await Beeteller().getOffer();
        setOffer(data.offers[0]);
      } catch (e) {
        console.error(e);
      }
    };

    !account && getInfoAccount();
    !movement && getMoviments();
    !offer && getOffers();
  }, [offer, account, movement]);

  return (
    <S.Wrapper $loading={isLoading}>
      <S.Menu className='ignoreLoading'>
        <S.Brand>
          <Image src='/assets/images/Brand.png' />
        </S.Brand>
        <Menu sections={['Home', 'Extrato', 'Área Pix', 'Cartão de crédito']} />
        <S.MenuOptions>
          <CircleButton>
            <Icon size='lg' color='black' name='b-notification' />
          </CircleButton>
          <CircleButton>
            <Icon size='lg' color='black' name='b-menu' />
          </CircleButton>
          <Avatar src={'https://i.pravatar.cc/300'} />
        </S.MenuOptions>
      </S.Menu>
      <S.PageContent className='ignoreLoading'>
        <Grid container centered>
          <Grid item sm={12}>
            <S.TitleGroup className='ignoreLoading'>
              <S.InlineContainer className='ignoreLoading'>
                <Typography size='sm'>Olá, </Typography>
                <Typography size='lg' bold>
                  {user}
                </Typography>
              </S.InlineContainer>
              <Typography size='sm' color='dark'>
                Seja bem vindo a sua conta digital
              </Typography>
            </S.TitleGroup>
          </Grid>
          <Grid centered gap='1.5rem'>
            <Grid item md={5}>
              <Card title='Conta corrente' hasButton iconName='b-wallet'>
                <S.Content>
                  <S.CardContainer>
                    <Typography color='neutralBase' size='sm'>
                      Saldo disponível
                    </Typography>
                    <S.InlineContainer>
                      <Typography color='light' size='sm'>
                        R$
                      </Typography>
                      <Typography color='light' size='xl'>
                        {CurrencyHelper.formatCurrency(
                          account && !isLoading ? account.currentAccount.balance.toString() : '',
                        )}
                      </Typography>
                    </S.InlineContainer>
                  </S.CardContainer>
                </S.Content>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card title='Investimentos' hasButton iconName='b-graphic-2'>
                <S.Content>
                  <S.CardContainer>
                    <Typography color='neutralBase' size='sm'>
                      Patrimônio
                    </Typography>
                    <S.InlineContainer>
                      <Typography color='light' size='sm'>
                        R$
                      </Typography>
                      <Typography color='light' size='xl'>
                        {CurrencyHelper.formatCurrency(
                          account && !isLoading ? account.investimentAccount.amount.toString() : '',
                        )}
                      </Typography>
                    </S.InlineContainer>
                  </S.CardContainer>
                </S.Content>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card title='Cartão' hasButton hasNote='Fatura aberta' iconName='b-credit-card'>
                <S.Content>
                  <S.CardContainer>
                    <Typography color='neutralBase' size='sm'>
                      Fatura atual
                    </Typography>
                    <S.InlineContainer>
                      <Typography color='light' size='sm'>
                        R$
                      </Typography>
                      <Typography color='light' size='xl'>
                        {CurrencyHelper.formatCurrency(String(!isLoading && account?.creditCard.currentInvoice) || '')}
                      </Typography>
                    </S.InlineContainer>
                  </S.CardContainer>
                </S.Content>
              </Card>
            </Grid>
          </Grid>
          <Grid gap='1.5rem'>
            <Grid item md={9}>
              <S.TitleContent className='ignoreLoading'>
                <Typography size='lg'>Conta digital</Typography>
                <Typography color='dark'>últimas movimentações</Typography>
              </S.TitleContent>
              <Grid>
                <Grid item>
                  <CardList
                    cards={
                      (!isLoading && (movement as Transation[])) || [
                        initialState.moviments,
                        initialState.moviments,
                        initialState.moviments,
                      ]
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3}>
              <S.TitleContent className='ignoreLoading'>
                <Typography size='lg' bold>
                  Ofertas pra você
                </Typography>
              </S.TitleContent>
              <OfferCard
                hasButton='Ver oferta'
                iconName='b-shop'
                src='/assets/images/offer-card-image.jpeg'
                offer={offer as Offer}>
                <Typography>R$</Typography>
                <Typography size='lg' bold>
                  {CurrencyHelper.formatCurrency(!isLoading && offer ? offer.amount.toString() : '')}
                </Typography>
              </OfferCard>
            </Grid>
          </Grid>
        </Grid>
      </S.PageContent>
    </S.Wrapper>
  );
};

export default Home;
