import axios from 'axios'

export default {
    state: {
        books: []
    },
    actions:{
        getBooksFromApi({commit}, payload) {
            return axios.post(`https://webdev.modumlab.com/api/book/list`, {
                categories: payload.categories,
                page: payload.page
                
            }).then((response) => {
                if (payload.isConcatBooks) {
                    commit('setBooksPagination', response.data.data.list)
                } else {
                    commit('setBooks', response.data.data.list) 
                }
            })
        },
    },
    mutations:{
        setBooks(state, books) {
            state.books = books
        },
        setBooksPagination(state, books) {
            state.books = state.books.concat(books)
        }
    },
    getters: {
        books(state) {
            return state.books;
        }
    }
}