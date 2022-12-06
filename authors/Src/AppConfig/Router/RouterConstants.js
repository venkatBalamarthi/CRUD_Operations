import Authors from '../../Screens/Authors';
import Books from '../../Screens/Books';
import {SCREEN_NAMES} from './ScreenNames';

const ROUTER_NAMES = [
  {
    key: 1,
    name: SCREEN_NAMES.AUTHORS,
    component: Authors,
  },
  {
    key: 1,
    name: SCREEN_NAMES.BOOKS,
    component: Books,
  },
];
export default ROUTER_NAMES;
