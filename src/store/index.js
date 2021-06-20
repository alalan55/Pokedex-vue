import { createStore } from 'vuex'

export default createStore({
    state: {
        pokemons: [],
        next:''
    },
    mutations: {
        ADD_POKE_UNICO(state, poke){
            state.pokemons.unshift(poke)
        },
        GET_POKES(state, pokemons) {
            if(!state.pokemons.find(el => el.id === pokemons.id)){

                state.pokemons.push(pokemons)
            }
        },
        ATUALIZA_NEXT(state, next){
            state.next = next
        }
    },
    actions: {
        async getPokes({dispatch, commit}) {
            let url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=10`
            try {
                let req = await fetch(url)
                let res = await req.json()

                commit('ATUALIZA_NEXT', res.next)

                res.results.forEach(element => {
                   dispatch('getPokesUnico', element.url)
                });

            } catch (error) {
                console.error(error)
                throw error;
            }
        },

        async getPokesUnico(context, payload) {
            try {
                let req = await fetch(payload);
                let res = await req.json()

                context.commit('GET_POKES', res)
            } catch (error) {
                console.error(error)
            }
        },
        async addPokeSearch({commit}, poke) {
          commit("ADD_POKE_UNICO", await poke)
        },
        async loadNext({dispatch, commit}){
            let x = this.state.next
        
            try {
                let req = await fetch(x)
                let res = await req.json()
                commit('ATUALIZA_NEXT', res.next)

                res.results.forEach(element => {
                    dispatch('getPokesUnico', element.url)
                 });
            } catch (error) {
                    console.log(error)
            }
        }
    },
    getters: {
        $pokemons(state) {
            return state.pokemons
        }
    }
})

