<template>
    <div>
        <SelectedCategories />
        <BooksList />
    </div>
</template>

<script>
import SelectedCategories from '@/components/Content/SelectedCategories.vue'
import BooksList from '@/components/Content/BooksList.vue'

export default {
  components: {
    SelectedCategories, BooksList
  }
}
</script>

<style>

</style>
