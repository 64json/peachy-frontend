import * as markerImageMap from '../img/category';
import { faHotel } from '@fortawesome/free-solid-svg-icons/faHotel';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faLandmark } from '@fortawesome/free-solid-svg-icons/faLandmark';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import { faHiking } from '@fortawesome/free-solid-svg-icons/faHiking';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';

export default {
  accomodations: {
    marker: markerImageMap.accomodations,
    color: '#0C9C71',
    icon: faHotel,
    name: 'Accommodations',
  },
  food_and_beverage: {
    marker: markerImageMap.food_and_beverage,
    color: '#C43636',
    icon: faUtensils,
    name: 'Food & Beverage',
  },
  landmarks: {
    marker: markerImageMap.landmarks,
    color: '#2199BF',
    icon: faLandmark,
    name: 'Landmarks',
  },
  shopping: {
    marker: markerImageMap.shopping,
    color: '#C6379E',
    icon: faShoppingBag,
    name: 'Shopping',
  },
  outdoor_activities: {
    marker: markerImageMap.outdoor_activities,
    color: '#DD8D30',
    icon: faHiking,
    name: 'Outdoor Activities',
  },
  others: {
    marker: markerImageMap.others,
    color: '#7310A2',
    icon: faEllipsisH,
    name: 'Others',
  },
};
