<template>
  <div>
    <b-nav vertical>
      <b-nav-item
        v-for="category in categories"
        :key="category.alias"
        :to="'/categories/' + category.alias"
        ><div class="mt-4 category text-uppercase">
          {{ category.title }}
        </div></b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoriesMenu",
  data: function() {
    return {
      categories: []
    };
  },
  mounted() {
    axios.get("https://euas.person.ee/categories").then(response => {
      this.categories = response.data;
    });
  }
};
</script>

<style scoped>
a {
  color: var(--mainWhite);
  text-decoration: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
}

a:hover {
  color: var(--mainWhite);
  font-size: 16px;
}

.category {
  background: var(--navBlue);
  padding: 10px;
}
</style>
