import Vue from 'vue'
import Vuex from 'vuex'
import Categories from './modules/Categories.store'
import Books from './modules/Books.store'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Categories,
        Books
    }
})

export default store