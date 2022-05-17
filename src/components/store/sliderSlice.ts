import { configureStore, combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';


interface InitialState {
    left: number;

}

const initialState: InitialState = {
    left: 0
}

export const SliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        setLeft: (state, action: PayloadAction<string>) => {

            if (action.payload === 'left') {
                if (state.left < 0) {
                    state.left += 100
                } else {
                    state.left = -200

                }

            }

            if (action.payload === 'right') {
                if (state.left > -200) {
                    state.left -= 100
                } else {
                    state.left = 0
                }

            }


        }
    }
}



)



const rootReducer = combineReducers({
    slider: SliderSlice.reducer

})



const store = configureStore({
    reducer: rootReducer
})

export const { setLeft } = SliderSlice.actions

export default store;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;








