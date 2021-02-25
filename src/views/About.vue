<template>
  <div>
      <b-table
      sticky-header
      :items="orderPush"
      :fields="fields"
      head-variant="light"
      outlined
    >
    </b-table>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-h="end">
        <b-col cols="auto">
          <p>ราคารวม = {{ tpriceSum }}</p>
        </b-col>
        <b-col cols="auto">
          <b-button variant="info" href="/">ลบทั้งหมด</b-button>
        </b-col>
        <b-col cols="auto">
          <b-button variant="success" @click="$bvModalshow('bv-modal-example')"
            >Payment</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="bv-mdal-example" hide-footer>
      <template #modal-title> <strong>Congratulations</strong> </template>
      <div class="d-block text-center">
        <p class="lead">Payment</p>
      </div>
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row align-h="center">
          <b-button
            class="col-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
          >
            Close
          </b-button>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
export default {
  props: {
    orderData: Array,
    tprice: Number,
  },
  data() {
    return {
      fields: ["name", "price", "num", "sum"],
    };
  },
  computed: {
    ...mapGetters(["orderPush","tpriceSum"]),
  },
};
</script>
<style>
</style>
