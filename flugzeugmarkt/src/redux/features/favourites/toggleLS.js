const toggleDataInLocalStorage = (id) => {
    console.log("toggleDataInLocalStorage")
    const rawDataFromLocalStorage = localStorage.getItem('favourites');
    let dataFromLocalStorage = JSON.parse(rawDataFromLocalStorage);
    if (!dataFromLocalStorage) {
        localStorage.setItem('favourites', JSON.stringify([id]))
        return
    }

    const idIsInArray = dataFromLocalStorage.find(item => item === id)
    if (idIsInArray) {
        dataFromLocalStorage = dataFromLocalStorage.filter(item => item !== id)
        localStorage.setItem('favourites', JSON.stringify(dataFromLocalStorage))
        return;
    }
    dataFromLocalStorage.push(id)
    localStorage.setItem('favourites', JSON.stringify(dataFromLocalStorage))
}

export {toggleDataInLocalStorage}