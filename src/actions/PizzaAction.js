import axios from 'axios';
import { GET_PIZZAS_FAILURE, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from '../constants/pizzaconstants';

export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: GET_PIZZAS_REQUEST });
    try {
        const res = await axios.get('/api/pizzas/get-all-pizzas');
        console.log(res);
        dispatch({
            type: GET_PIZZAS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_PIZZAS_FAILURE,
            payload: err
        })
    }
}