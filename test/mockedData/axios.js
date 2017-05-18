import mockData from './axiosData.json';

const mockCall = {
  get() {
    return Promise.resolve(mockData);
  }
};

export default mockCall;