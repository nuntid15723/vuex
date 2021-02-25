<template>
  <div class="hello">
    <b-card 
    img-top tag="article" 
    style="height: 40rem" 
    class="mb-4">
      <b-card-text>{{ name }} </b-card-text>
      <b-card-img :src="image"></b-card-img>
      <b-card-text>ราคา : {{ price }} บาท</b-card-text>
      <b-card-text>{{ tag }} </b-card-text>
      <label for="demo-sb">{{ textt }}</label>
      <b-form-spinbutton
        id="sb-small"
        size="sm"
        v-model="tmp"
        class="b-2"
      ></b-form-spinbutton>
      <div>
        <b-button class="mt-3" @click="addToCart" variant="outline-dark">{{
          textbutton
        }}</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    price: Number,
    text: String,
    tag: String,
  },
  data() {
    return {
      modalShow: false,
      tmp: 1,
      textbutton: "หยิบใส่ตะกร้า",
      textt: "จำนวน",
    };
  },
  methods: {
    addToCart() {
      alert("ใส่ตะกร้า");
      this.$emit("updateOrder", {
        name: this.name,
        price: this.price,
        num: this.tmp,
        sum: this.price * this.tmp,
      });
      this.$bvModal.Show("bv-modal-example");
    },
  },
};
</script>
