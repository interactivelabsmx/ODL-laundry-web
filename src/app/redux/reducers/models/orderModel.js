
export const ORDER_FIELDS = [
  {
    order: {
      idOrderType: 1,
      idClient: 1,
      idAddressPickup: 1,
      idAddressDeliver: 1,
      price: 100,
      comments: 'some stuff',
    },
    services: [
      {
        idServiceType: 1,
        price: 100,
        comments: 'eche una camiza negra porque el amor esta de luto!!',
        specs: [
          {
            idSpec: 1,
          },
          {
            idSpec: 2,
          },
        ],
      },
    ],
  },
];
