import types from "./types";

const openModal = (id) => ({
    type: types.OPENED_MODAL,
    payload: id
})

const closeModal = () => ({
    type: types.CLOSED_MODAL,
    payload: null
})

export default {
    openModal,
    closeModal
}