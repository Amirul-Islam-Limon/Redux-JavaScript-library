const logger = (store) => (next) => (action)=>{
    const currentState = store.getState();
    console.log(currentState);
    next(action);
    console.log("updated State", store.getState());
}

export default logger;