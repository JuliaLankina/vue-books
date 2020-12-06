import axios from 'axios'

export default {
    state: {
        categories: [],
        selectedCategories: []
    },
    actions:{
        getCategoriesFromApi({commit}) {
            return axios.post(`https://webdev.modumlab.com/api/book/categories`).then((response) => {
                commit('setCategories', response.data.data.list)  
            })
        },
        addSelectedCategory({commit}, selectedCategoryId) {
            commit('addSelectedCategory', selectedCategoryId)
        },
        removeSelectedCategory({commit}, selectedCategoryId) {
            commit('removeSelectedCategory', selectedCategoryId)
        },
        removeAllSelected({commit}) {
            commit('removeAllSelected')
        }


    },
    mutations:{
        setCategories(state, categories) {
            state.categories = categories
        },
        addSelectedCategory(state, selectedCategoryId) {
            if (state.selectedCategories.indexOf(selectedCategoryId) === -1) {
                state.selectedCategories.push(selectedCategoryId)
            }    
        },
        removeSelectedCategory(state, selectedCategoryId) {
            var index = state.selectedCategories.findIndex(element => element == selectedCategoryId);
            state.selectedCategories.splice(index, 1);
        },
        removeAllSelected(state) {
            state.selectedCategories = []
        }
    },
    getters: {
        categories(state) {
            return state.categories;
        },
        categoriesIds(state) {
            return [...new Set(state.categories.map(category => category.id))]
        },
        selectedCategories(state) {
            return state.selectedCategories;
        },
    }
}