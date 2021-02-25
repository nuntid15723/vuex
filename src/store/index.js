import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderData: [
      {
        image:
          "https://cf.shopee.co.th/file/10165b8878e0bf4278ce046c860436c4",
        name: "Gaming Keyboard Feeling RGB ",
        text: "",
        price: 1900,
        tag: "#Shop,#Csmju,#MJU",
      },
      {
        image:
          "https://ae01.alicdn.com/kf/HLB1mrcvae3tHKVjSZSgq6x4QFXak/LED-Light-Gaming-Mouse-1600DPI-USB-Charger-X7.jpg",
        name: "LED-Light-Gaming-Mouse ",
        text: "",
        price: 450,
        tag: "#Shop,#Csmju,#MJU",
      },
      {
        image:
          "https://cf.shopee.co.th/file/3c89bfc7b67d54e1f5911c2ca4000376",
        name: "หูฟังเกมมิ่ง Logitech รุ่น G633s ",
        text: "",
        price: 2500,
        tag: "#Shop,#Csmju,#MJU",
      },
      {
        image:
          "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/09/XG32VQR-1.jpg",
        name: "Asus ROG XG32VQR 31.5  144Hz ",
        text: "",
        price: 25000,
        tag: "#Shop,#Csmju,#MJU",
      },
      {
        image:
          "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/TORQUE-BLACKWHITE-Case-1.jpg",
        name: "ANTEC TORQUE Computer Case  ",
        text: "",
        price: 12900,
        tag: "#Shop,#Csmju,#MJU",
      },
      {
        image:
          "https://www.jib.co.th/img_master/product/original/2019061315310834108_1.jpg",
        name: " ASUS ROG STRIX HERO III G531GW-A ",
        text: "",
        price: 32000,
        tag: "#Shop,#Csmju,#MJU",
      },
    ],
    user: [],
    tprice: 0,
  },
  getters: {
    order: state =>{
      return state.orderData;
    },
    UpData: state => value => {
      state.user.push(value);
    },
    orderPush: state => {
      return state.user;
    },
    tpriceSum: state => {
      return state.tprice;
    },
  },
  mutations: {
    sum:state=> {
      state.tprice = 0;
      for (let i = 0; i < state.user.length; i++) {
        state.tprice = state.tprice+ state.user[i].sum;
      } 
    }
  },
  actions: {
  },
  modules: {
  }
})
