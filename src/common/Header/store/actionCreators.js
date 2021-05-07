import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    value: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=>{
            const {success, data} = res.data
            if(success) {
                dispatch(changeList(data))
            }
        }).catch((e)=>{
            console.error('error',e);
        })
    }
}

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER,
    value: true
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE,
    value: false
})
export const changePage = (page) => ({
    type: constants.CHNAGE_PAGE,
    value: page
})