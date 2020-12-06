<template>
    <div class="main-container">
        <div class="left-container">
            <Sidebar />
        </div>
        <div class="right-container">
            <MainContent />
        </div>   
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import MainContent from '@/components/Content/MainContent.vue'

export default {
  components: {
    Sidebar, MainContent
  },
  methods: {
        ...mapActions([
            'getBooksFromApi', 'getCategoriesFromApi'
        ]),

    },
    computed: {
        ...mapGetters([
            'categoriesIds'
        ]),

        
    },
    async mounted() {

        await this.getCategoriesFromApi()

        this.getBooksFromApi({
            categories: this.categoriesIds,
            page: 1
            })
     
    }
}
</script>


<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
.main-container{
    display: flex;
    margin: auto 0;
    height: 100%;
}
.left-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 0.5px solid rgb(216, 211, 211);
}
.right-container {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
