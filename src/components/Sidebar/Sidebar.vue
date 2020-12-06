<template>
    <div>
        <div class="header-logo">
            <h1>&#9816;Books</h1>
        </div>
        <CategoriesList />
    </div>
</template>

<script>
import CategoriesList from '@/components/Sidebar/CategoriesList.vue'

export default {
  components: {
    CategoriesList
  }
}
</script>

<style>

.header-logo {
    height: 70px;
    display: flex;
    align-items: center;
    min-width: 210px;
    padding-left: 20px;
    cursor: pointer;
}
</style>
