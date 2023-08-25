const formatCurrency = (value: string) => {
  const newValue = value
    .slice(0, value.length - 3)
    .replace('.', '')
    .concat(value.slice(value.length - 3));
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(newValue)).slice(3);
};

export default { formatCurrency };
