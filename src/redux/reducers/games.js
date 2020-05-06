import { GET_GAMES, RATE_GAMES} from '../actions/actions-types'

const defaultState = []

export default function games(state = defaultState, { type, payload }) {

    switch (type) {

        case GET_GAMES: {
            return state.concat(payload)
        
        }

        case RATE_GAMES: {
            return state.filter(g => g.id !== payload.id).concat(payload)
            
        }


        default:
            return state;

    }
}
