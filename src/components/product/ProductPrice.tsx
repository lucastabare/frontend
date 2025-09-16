import Price from '../ui/Price';

export default function ProductPrice({ price, currency, freeShipping }:{
  price:number; currency:string; freeShipping:boolean;
}) {
  return <Price price={price} currency={currency} freeShipping={freeShipping} />;
}
