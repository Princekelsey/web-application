<template>
  <button v-if="cart" class="btnCart">
    <slot>Button</slot>
  </button>
  <button v-else class="btnGeneral">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    cart: Boolean
  }
};
</script>

<style scoped>
.btnCart {
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  border-color: var(--mainRed);
  color: var(--mainRed);
}

.btnCart:hover {
  background: var(--mainRed);
  color: var(--mainWhite);
}

.btnCart:focus {
  outline: none;
}

.btnGeneral {
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  border-color: var(--lightBlue);
  color: var(--lightBlue);
}

.btnGeneral:hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}

.btnGeneral:focus {
  outline: none;
}
</style>>
