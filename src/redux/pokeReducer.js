const initalState = {
    pokemon: {}
}

const GET_POKEMON = 'GET_POKEMON';

export function myPokemon() {
    const rand = Math.ceil(Math.random() * 151);
    const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);

    return {
        type: GET_POKEMON,
        payload: pokemon
    }
}

export default function (state = initalState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POKEMON + '_PENDING':
            return state;
        case GET_POKEMON + '_FULFILLED':
            return { ...state, pokemon: payload };
        default:
            return state;
    }
}