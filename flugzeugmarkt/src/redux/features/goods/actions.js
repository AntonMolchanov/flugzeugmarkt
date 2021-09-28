import types from "./types";

const getGoods = (data) => ({
    type: types.GOT_GOODS,
    payload: data
})

export default {
    getGoods
}