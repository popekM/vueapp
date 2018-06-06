<style scoped>
    ol ol {
        margin-left: 20px;
    }

    p {
        margin: 20px 0;
        font-weight: bold;
        font-size: 16px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #888;
    }

    tr:hover {
        background-color: #444;
    }
</style>

<template>
<div class="main">
<table>
  <thead>
    <tr>
      <th>Nazwa:</th>
      <th>Ilosc ( szt. )</th>
      <th>Cena jednostkowa</th>
      <th>Cena</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in $basket">
      <td>{{ product.name }}</td>
      <td>{{ product.orderCount}}</td>
      <td>{{ product.price.value.toFixed(2) }} PLN</td>
      <td>{{ (product.price.value * product.orderCount).toFixed(2) }} PLN</td>
    </tr>
  </tbody>
  <tfoot>
   <tr>
     <td>Całkowita suma:</td>
     <td>&nbsp;</td>
     <td>&nbsp;</td>
     <td>{{ totalSum() }} PLN</td>
   </tr>
 </tfoot>
</table>
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

  methods: {
          totalSum: function () {
              let total = 0;
              for (let i = 0; i < this.$basket.length; i++) {
                total += this.$basket[i].price.value * this.$basket[i].orderCount;
              }

              return total.toFixed(2);
            }
        }
};
</script>
