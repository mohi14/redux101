import { configureStore } from "@reduxjs/toolkit";
import couterSlice from "../features/couter/couterSlice";



export const store = configureStore({
    reducer:{
        couter: couterSlice
    },
   
})






// export const store = configureStore({
//     reducer: {
//       auth: authReducer,
//       inspection: inspectionReducer,
//       [apiSlice.reducerPath]: apiSlice.reducer,
//     },
//     devTools: process.env.NODE_ENV !== "production",
//     middleware: (getDefaultMiddlewares) =>
//       getDefaultMiddlewares().concat(apiSlice.middleware),
//   });


/*** 

1) First create store
2) Wrap the main app with the created store by the Provider
3) create slice for specific feature
4) use useSelector hook in a component to get the state value
5) use dispatch fuction to apply the function of the slice or modifiying the state value.

***/