export const storage = (() => {
    let store = {}
    return {
        getItem: (key) => {
            return store[key] || JSON.stringify([])
        },
        setItem: (key, value) =>{
            store[key] = value
        },
        clear: () => { store = {}},
        removeItem: (key) => delete store[key]
    }
})()