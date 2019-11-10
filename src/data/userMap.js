import userJason from '../img/user/jason.jpg';
import userJake from '../img/user/jake.jpg';
import userJoowon from '../img/user/joowon.jpg';
import userJakelee from '../img/user/jakelee.jpg';
import userVarisa from '../img/user/varisa.jpg';
import userWenghei from '../img/user/wenghei.jpg';
import interestMap from './interestMap';
import cityMap from './cityMap';

export default {
  jason: { // traveller === demoer
    name: 'Jason Park',
    picture: userJason,
    location: 'Singapore, Singapore',
    occupation: 'Software Engineer',
    hobby: 'Table Tennis',
    interests: [
      interestMap.basketball,
      interestMap.meditation,
      interestMap.travelling,
    ],
    completedCities: [
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
    ],
    upcomingCities: [
      cityMap.seoul,
    ],
  },
  varisa: {
    name: 'Varisa Gumpangkum',
    picture: userVarisa,
    location: 'Seongnam, South Korea',
    occupation: 'Student',
    hobby: 'Caligraphy',
    interests: [
      interestMap.camping,
      interestMap.photography,
      interestMap.skateboarding,
    ],
    completedCities: [
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
    ],
    upcomingCities: [
      cityMap.arc2_istanbul,
    ],
  },
  joowon: {
    name: 'Joowon Ryu',
    picture: userJoowon,
    location: 'Seoul, South Korea',
    occupation: 'Investment Banker',
    hobby: 'Fishing',
    interests: [
      interestMap.travelling,
      interestMap.photography,
      interestMap.camping,
    ],
    completedCities: [
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
    ],
    upcomingCities: [
      cityMap.arc2_istanbul,
    ],
  },
  jakelee: {
    name: 'Jake Lee',
    picture: userJakelee,
    location: 'Daejeon, South Korea',
    occupation: 'Model',
    hobby: 'Coffee Making',
    interests: [
      interestMap.travelling,
      interestMap.meditation,
      interestMap.nature,
    ],
    completedCities: [
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
    ],
    upcomingCities: [
      cityMap.arc2_istanbul,
    ],
  },
  jake: {
    name: 'Jake Wilkerson',
    picture: userJake,
    location: 'Seoul, South Korea',
    occupation: 'Hackathon Organizer',
    hobby: 'Learning Languages',
    interests: [
      interestMap.travelling,
      interestMap.photography,
      interestMap.camping,
    ],
    completedCities: [
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
    ],
    upcomingCities: [
      cityMap.arc2_istanbul,
    ],
  },
  wenghei: { // planner
    name: 'Kong Weng Hei',
    picture: userWenghei,
    location: 'Seoul, South Korea',
    occupation: 'Biochemistry Researcher',
    hobby: 'Watching Black Pink MV',
    interests: [
      interestMap.art,
      interestMap.skateboarding,
      interestMap.camping,
    ],
    completedCities: [
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
      cityMap.arc2_istanbul,
      cityMap.arc_istanbul,
      cityMap.mem_istanbul,
    ],
    upcomingCities: [
      cityMap.arc2_istanbul,
    ],
  },
};
