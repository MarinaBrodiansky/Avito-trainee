export interface Product {
  id: number;
  name: string;
  description: string;
  location: string;
  type: string;
  price?: number;
}

export const ItemTypes = {
  REAL_ESTATE: 'Недвижимость',
  AUTO: 'Авто',
  SERVICES: 'Услуги',
};
