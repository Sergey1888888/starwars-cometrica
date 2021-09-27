import {IStarship, StarshipAction, StarshipActionTypes} from "../../types/starship";
import {Dispatch} from "redux";
import axios from "axios";
import {IFilm} from "../../types/film";

export const fetchStarships = () => {
    return async (dispatch: Dispatch<StarshipAction>) => {
        try {
            const starships: IStarship[] = [];
            dispatch({type: StarshipActionTypes.FETCH_STARSHIPS})
            const responseFilm = await axios.get<IFilm>('https://swapi.dev/api/films/2/');
            for (const starshipUrl of responseFilm.data.starships) {
                let responseStarship = await axios.get<IStarship>(`${starshipUrl}`);
                starships.push(responseStarship.data);
            }
            dispatch({type: StarshipActionTypes.FETCH_STARSHIPS_SUCCESS, payload: starships});
        } catch (e) {
            dispatch({type: StarshipActionTypes.FETCH_STARSHIPS_ERROR, payload: 'Loading starships error!'});
        }
    }
}

export const selectStarship = (starship: IStarship): StarshipAction => {
    return {type: StarshipActionTypes.SELECT_STARSHIP, payload: starship}
}

export const deselectStarship = (starship: IStarship): StarshipAction => {
    return {type: StarshipActionTypes.DESELECT_STARSHIP, payload: starship}
}