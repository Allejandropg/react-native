import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8D2iV0WSgOtBh2AvnR5HDssdEiJgDJgkYf3XBeTyoGEhkMr5uf4ESfjozCZKJmxx29Pks8Xyg7b2UnavxSJC-i1jy2fUUl4A0qpAM8_5TEjMDRfIYizklmcuZ8CLXXYx'
   }
});