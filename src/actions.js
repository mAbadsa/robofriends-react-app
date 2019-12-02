import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchFeld = (text) => ({
    type:' CHANGE_SEARCH_FIELD',
    payLoad: text
})