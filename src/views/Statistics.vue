<template>
  <div class="statics">
    <div class="container">
      <h1>支出統計</h1>
      <div class="row">
        <div class="left">
          <p>{{selectDay.yy}}-{{selectDay.mm}}月各項目支出總計</p>
          <item-costs-chart :chartData="datas"></item-costs-chart>
        </div>
        <div class="right">
          <p>{{selectDay.yy}}各月支出統計</p>
          <month-costs-chart :chartData="monthCosts"></month-costs-chart>
        </div>
      </div>
      <div class="row">
        
      </div>
    </div>
  </div>
</template>

<script >
import itemCostsChart from '@/components/ItemCostsChart.vue'
import monthCostsChart from '@/components/MonthCostsChart.vue'

import {mapGetters} from 'vuex'
export default{
  name:"Statistics",
  components:{itemCostsChart,monthCostsChart},
  data(){
    return{
      selectDay:{yy:'',mm:''},
      datas: [0,0,0,0,0,0],
      monthCosts:[0,0,0,0,0,0,0,0,0,0,0,0],
    }
  },
  computed:{
    ...mapGetters(['getMonthList']),
  },
  methods:{
    monthData(){
      let monthdata=[0,0,0,0,0,0];
      if(this.getMonthList.length!=0){
        this.getMonthList.forEach(date=>{
          let idx = parseInt(date.type)-1;
          monthdata[idx] = monthdata[idx]+date.cost
        });
      }
      this.datas=monthdata
    },
    monthTotal(){
      if(this.getMonthList.length!=0){
        let yearList = this.getMonthList.filter(date=>{
          let yy=date.date.split('-')[0];
          return yy== this.selectDay.yy
        })
        yearList.forEach(date=>{
          let mm=parseInt(date.date.split('-')[1]);
          this.monthCosts[mm-1] = parseInt(this.monthCosts[mm-1])+parseInt(date.cost);
        })
      }
    }
  },
  created(){
    this.selectDay.yy = new Date().getFullYear();
    this.selectDay.mm = new Date().getMonth()+1;
    this.monthData();
    this.monthTotal();
  },
}
</script>
<style lang="scss">
.statics{
  h1{
    margin-bottom: 1.5rem;
  }
}
.left,.right{
  background: white;
  border-radius: .5rem;
  width: 49%;
  padding:1rem;
}
</style>