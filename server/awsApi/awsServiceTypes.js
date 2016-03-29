import { get } from './awsRequest';

module.exports = {
  getServiceTypes() {
    return new Promise((resolve, reject) => {
      get('app-orders/orderTypes', resolve, reject);
    });
  },
};
