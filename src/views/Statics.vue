<template>
  <div class="statics">
    <div class="container">
      <h1>支出統計</h1>
      <div class="row">
        <p>各項目統計</p>
        <div></div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script >
/*vue.chart js*/
import {Bar} from 'vue-chartjs'
import {mapGetters} from 'vuex'
export default{
  name:"Statics",
  extends: Bar,
  props:['chartdata','options','Homedata'],
  computed:{
    ...mapGetters(['getMonthList']),
  },
  created(){
    
  },
  mounted(){
    // this.renderChart(this.chartdata,this.option)
    
  },
}
</script>
