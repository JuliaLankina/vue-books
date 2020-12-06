<template> 
    <div>       
        <div class="categories" v-for="category in categories" :key="category.id"> 
            <div class="category" @click="addSelectedCategory(category.id)">
                <p>{{category.name}}</p>
            </div>
        </div>
    </div>         
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'categories', 'selectedCategories'
        ])
    },
    methods: {
        ...mapActions([
            'addSelectedCategory'
        ])
    }
}
</script>

<style>
h1, p {
    margin: 0;
}
.categories {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white; 
    flex-basis: 20%;
    min-width:  200px;   
}    
.category {
    display: flex;
    align-items: center;
    margin: 5px 0 5px;
    cursor: pointer;
    padding: 5px 2px;
}
.category:hover {
    background-color:  rgb(189, 189, 189);
}
.category p {
    margin: 3px;
}
</style>
