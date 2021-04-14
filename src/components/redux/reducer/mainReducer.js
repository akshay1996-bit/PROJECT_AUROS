import { combineReducers } from 'redux';
import cartReducer from '../reducer/cartReducer';


const mainReducer = combineReducers({
    shop: cartReducer
});

export default mainReducer;