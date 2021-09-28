//Для всех асинхронных операций
import actions from "./actions";

const getData = () => (dispatch) => {
    fetch("./goods.json")
        .then(response => response.json())
        .then(data => dispatch(actions.getGoods(data)))
}


export default {
    getData
}