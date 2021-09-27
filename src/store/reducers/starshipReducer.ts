import {StarshipAction, StarshipActionTypes, StarshipState} from "../../types/starship";

const initialState: StarshipState = {
    starships: [],
    selectedStarships: [],
    error: null,
    loading: false,
}

export const starshipReducer = (state = initialState, action: StarshipAction): StarshipState => {
    switch (action.type) {
        case StarshipActionTypes.FETCH_STARSHIPS:
            return {...state, loading: true}
        case StarshipActionTypes.FETCH_STARSHIPS_SUCCESS:
            return {...state, loading: false, starships: action.payload}
        case StarshipActionTypes.FETCH_STARSHIPS_ERROR:
            return {...state, loading: false, error: action.payload}
        case StarshipActionTypes.DESELECT_STARSHIP:
            return {...state, selectedStarships: state.selectedStarships.filter(item => item !== action.payload)}
        case StarshipActionTypes.SELECT_STARSHIP:
            return {...state, selectedStarships: [...state.selectedStarships, action.payload]}
        default:
            return state;
    }
}