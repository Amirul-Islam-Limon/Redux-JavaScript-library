import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import logger from './middlewares/Logger';

const store = configureStore({
  reducer: {
      counter:counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    
  })

export default store;