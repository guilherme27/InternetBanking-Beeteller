import { api } from '@/common/configs/api.config';

export default function Beeteller() {
  const getAccount = () => {
    return api().get(`/beeteller/dashboard`);
  };

  const getMoviment = () => {
    return api().get(`/beeteller/movement`);
  };

  const getOffer = () => {
    return api().get(`/beeteller/offers`);
  };

  return { getAccount, getMoviment, getOffer };
}
