import { ECityActions } from './../actions/city.actions';
import { CityActions } from '../actions/city.actions';
import { initialCityState, ICityState } from '../state/city.state';

export const cityReducers = (
    state = initialCityState,
    action: CityActions
): ICityState => {
    switch (action.type) {
        case ECityActions.GetSearchedCitiesSuccess: {
            return {
                ...state,
                searchedCities: action.payload
            };
        }
        case ECityActions.GetSelectedCityIdSuccess: {
            return {
                ...state,
                selectedCityId: action.payload
            };
        }
        case ECityActions.SetSelectedCityIdSuccess: {
            return {
                ...state,
                selectedCityId: action.payload
            };
        }
        default:
            return state;
    }
};
