import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB753F38fA03E743eef64b6890F3C6C651BdE9c54'
);

export default instance;
