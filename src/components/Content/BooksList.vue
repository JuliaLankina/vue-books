<template> 
    <div class="main-content" v-if="books.length">
        <div class="content-item" v-for="book in books" :key="book.id">
            <div class="item-img">
                <img :src="book.image" alt="">
            </div>
            <div class="item-category">
                {{getCategoriesNameById(book.category_id)}}
            </div>  
            <div class="item-info">
                <div class="info-name">
                    {{book.name}}
                </div>
                <div class="info-author">
                   {{book.author}}
                </div>
                <div class="info-year">
                    {{book.year}} г.
                </div>
                
                <div class="info-description">
                   {{book.description}}
                </div>
            </div>
        </div>                       
        <div class="add-btn" v-if='books.length >= countBooksPerPage'>
            <button @click="downloadBooksYet">Загрузить еще &#10137;</button>
        </div>
    </div>
    <h3 v-else>Книг нет</h3>              
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            page: 1,
            countBooksPerPage: 10
        }
    },
    computed: {
        ...mapGetters([
            'books', 'categories', 'selectedCategories', 'categoriesIds'
        ]),   
    },
    methods: {
        ...mapActions([
            'getBooksFromApi'
        ]),
        getCategoriesNameById(categoryId) {
            const foundCategory = this.categories.find(element => element.id === categoryId)
            return foundCategory.name 
        },
        downloadBooksYet() {
            this.page += 1

            this.getBooksFromApi({
                categories: this.selectedCategories.length ? this.selectedCategories : this.categoriesIds,
                page: this.page,
                isConcatBooks: true
            }) 
        },
    },
    watch:{
        selectedCategories: function(newItem) {
            this.page = 1
            if (newItem && newItem.length) {
                this.getBooksFromApi({
                    categories: this.selectedCategories,
                    page: this.page
                })
            } else {
                this.getBooksFromApi({
                    categories: this.categoriesIds,
                    page: this.page
                })
            }
        }
    }
    
}
</script>

<style scoped>
button:focus {
    outline: none;
}
.main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 10px 0 0 10px;
}
.content-item {
    position: relative;
    flex-basis: 10%;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    margin-right: 2%;
}
.item-img img {
    width: 270px;
    height: 370px;
    border-radius: 20px;
    object-fit: cover;
}
.item-info {
    font-size: 12px;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(transparent, rgb(0, 0, 0) 70%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    opacity: 0;
}
.item-info:hover {
    opacity: 100;
    cursor: pointer;
}
.info-year, .info-name, .info-author, .info-description {
    padding: 7px; 
}
.info-description {
    white-space: nowrap; 
    overflow: hidden;   
    text-overflow: ellipsis; 
    padding-bottom: 15px;
}

.item-category {
    z-index: 10;
    position: absolute;
    top: 10px;
    left: -10px;
    background: #508ae6;
    padding: 5px;
    border-radius: 5px;
    color: white;
}
.info-name {
    font-size: 14px;
    font-weight: bold;
}
.add-btn {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
.add-btn button {
    border: none;
    background-color: rgb(94, 94, 94);
    color: white;
    padding: 10px;
    cursor: pointer; 
    border-radius: 10px;       
}
.add-btn button:hover {
    background-color:  rgb(223, 223, 223);
    color: rgb(94, 94, 94);
}
</style>