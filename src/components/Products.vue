<style scoped>
    ol ol {
        margin-left: 20px;
    }

    p {
        margin: 20px 0;
        font-weight: bold;
        font-size: 16px;
    }
    .big {
      font-size: 1.5em;
    }

    div:not(.main) {
        background: rgb(0, 0, 0);
        float: left;
        margin: 10px;
    }

    button {
        background-color: #3bad40;
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
    }

    button:hover {
        color: #000;
        background: #f2ff00 !important;
    }
</style>

<template>
  <div class="main">

    <div v-for="(product, index) in data.products">
      <img v-bind:src="'/static/products/' + product.image" v-bind:alt="product.name">
      <p class="big">{{ product.name }}</p>
      <p v-for="attribute in data.attributes">
        {{ attribute.name }}:

        <template v-if="attribute.type==='singleValue'">
          {{ data.attributesIdValue[attribute.id].split('|')[product.attributes[attribute.id]-1] }}
        </template>
        <template v-else v-for="value in product.attributes[attribute.id].split('|')">
          {{ data.attributesIdValue[attribute.id].split('|')[value-1] }},
        </template>
      </p>

      <p class="big" v-if="product.price.type==='simple'">
        Cena: {{ product.price.value.toFixed(2) }} PLN
      </p>
      <p class="big" v-else>
        <span class="green">Cena promocyjna: {{ product.price.value.toFixed(2) }} PLN</span>
      </p>

      <button class="red" v-on:click="addToBasket(product)">Dodaj do koszyka</button>
      <button class="blue" v-on:click="addToWishlist(product)">Dodaj do wishlisty</button>
      <button class="grey" v-on:click="remove(index)">usuń</button>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data: function () {
          return {
            data: '',
          };
        },

    // this function get data from firebase
    created: function () {
          firebase.database().ref('/').once('value', (ret) => {
              this.data = ret.val();
            });
        },

    methods: {
          remove: function (index) {
                this.data.products.splice(index, 1);
              },

          addToWishlist: function (el) {
                let index = this.$wishlist.findIndex(arrayElement => el.name === arrayElement.name);
                if (index === -1) {
                  this.$wishlist.push(el);
                }
              },

          addToBasket: function (el) {
                let index = this.$basket.findIndex(arrayElement => el.name === arrayElement.name);
                if (index === -1) {
                  el.orderCount = 1;
                  this.$basket.push(el);
                } else {
                  this.$basket[index].orderCount++;
                }
              }
        }
  };
</script>
