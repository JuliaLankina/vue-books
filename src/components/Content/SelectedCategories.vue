<template>
    <div class="header-categories" >
        <div class="header-categories-item" v-for="selected in selectedCategories" :key="selected">
            <p>
                {{getCategoriesNameById(selected)}} <strong @click="removeSelectedCategory(selected)">&times;</strong>
            </p>    
        </div>
        <a class='big-btn' @click="removeAllSelected" v-if="selectedCategories.length">Убрать все</a>
    </div>               
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'selectedCategories', 'categories'
        ])
    },
    methods: {
        
        getCategoriesNameById(categoryId) {
            const nameCategory = this.categories.find(element => element.id === categoryId)
            return nameCategory.name 
        },
        ...mapActions([
            'removeSelectedCategory', 'removeAllSelected'
        ]),

    }
}
</script>

<style scoped>
h1, p {
    margin: 0;
}
.header-categories {
    height: 30px;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
}
.header-categories-item {
    margin-right: 1%;
}
.header-categories p {
    position: relative;
    border: 0.5px solid  rgb(216, 211, 211);
    padding: 5px 25px 5px 5px;
    font-size: 14px;
    border-radius: 10px;
}
.header-categories p:hover {
    color:  rgb(255, 255, 255);
    background-color: rgb(189, 189, 189);
}
.header-categories p strong {
    position: absolute;
    margin-left: 8px; 
    top: 3px;
    font-size: 18px;
    cursor: pointer;
}
.big-btn {
    font-size: 14px;
    cursor: pointer; 
    padding: 4px;
    border: .5px solid  rgb(216, 211, 211); 
    border-radius: 5px; 
}
.big-btn:hover {
    color: white;
    background-color: rgb(189, 189, 189);
}
</style>