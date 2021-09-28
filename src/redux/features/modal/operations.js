import actions from "./actions";

const openModal = (id) => (dispatch, getState) => {
    const goods = getState().goods;
    const modals = getState().modal;
    const goodsIds = goods.map(goodsObject => goodsObject.id)
    const activeModal = goodsIds.find(goodsId => goodsId === id)
    dispatch(actions.openModal(activeModal))
}

const closeModal = () => (dispatch) => {
    dispatch(actions.closeModal(null))
}

export default {
    openModal,
    closeModal
}