<template>
  <div>
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="Success">
        <b-navbar-nav>
          <router-link to="/">CsShop</router-link>
        </b-navbar-nav>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-nav class="ml-auto">
          <router-link to="/about">
            <b-button variant="outline-info" @click="sum">
              <b-icon icon="basket" aria-hidden="ture"></b-icon>
            </b-button>
          </router-link>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import { mapGetters} from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["orderPush"]),
    ...mapMutations(["sum"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
