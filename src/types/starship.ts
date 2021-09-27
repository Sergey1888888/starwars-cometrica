export interface StarshipState {
    starships: IStarship[];
    selectedStarships: IStarship[];
    loading: boolean;
    error: null | string;
}

export interface ICompared {
    name: string;
    result: string | number;
}

export interface IStarship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
}

export enum StarshipActionTypes {
    FETCH_STARSHIPS = "FETCH_STARSHIPS",
    FETCH_STARSHIPS_SUCCESS = "FETCH_STARSHIPS_SUCCESS",
    FETCH_STARSHIPS_ERROR = "FETCH_STARSHIPS_ERROR",
    DESELECT_STARSHIP = "DESELECT_STARSHIP",
    SELECT_STARSHIP = "SELECT_STARSHIP",
}

interface FetchStarshipsAction {
    type: StarshipActionTypes.FETCH_STARSHIPS;
}

interface FetchStarshipsSuccessAction {
    type: StarshipActionTypes.FETCH_STARSHIPS_SUCCESS;
    payload: IStarship[];
}

interface FetchStarshipsErrorAction {
    type: StarshipActionTypes.FETCH_STARSHIPS_ERROR;
    payload: string;
}

interface DeselectStarshipAction {
    type: StarshipActionTypes.DESELECT_STARSHIP;
    payload: IStarship;
}

interface SelectStarshipAction {
    type: StarshipActionTypes.SELECT_STARSHIP;
    payload: IStarship;
}

export type StarshipAction =
    FetchStarshipsAction
    | FetchStarshipsSuccessAction
    | FetchStarshipsErrorAction
    | DeselectStarshipAction
    | SelectStarshipAction;