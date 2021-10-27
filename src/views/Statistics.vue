<template>
  <div class="statics">
    <div class="container">
      <h1>支出統計</h1>
      <div class="row">
        <div class="half-box box">
          <p class="sub-title">{{selectDay.yy}}-{{selectDay.mm}}月各項目支出總計</p>
          <item-costs-chart :chartData="datas"></item-costs-chart>
        </div>
        <div class="half-box box">
          <p class="sub-title">{{selectDay.yy}}年各月支出統計</p>
          <month-costs-chart :chartData="monthCosts"></month-costs-chart>
        </div>
      </div>
      <div class="row">
        <div class="full-box box">
          <p class="sub-title">{{selectDay.yy}}年總支出</p>
          <div class="total-list">
            <div class="total-item" v-for="(item,index) in itemsTotal" :key="`item${index}`">
              <span :class="[item.color,'type-tag']">{{item.typename}}</span> {{item.total}}元
            </div>
          </div>
          <div class="year-total">總支出為<span class="alert-text">{{totalCost}}</span>元</div>
        </div>
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
      // getYearList:[],
      datas: [0,0,0,0,0,0],
      monthCosts:[0,0,0,0,0,0,0,0,0,0,0,0],
      totalList:[],
    }
  },
  computed:{
    ...mapGetters(['getAllData']),
    ...mapGetters(['getTypeList']),
    itemsTotal(){
      let yearItems=[];

      this.getTypeList.forEach((type,idx)=>{
          yearItems[idx] = {typename:type.name,color:type.color,total:0}
      })

      this.getAllData.forEach(item=>{
        const idx = parseInt(item.type)-1;
        yearItems[idx].total = yearItems[idx].total + parseInt(item.cost);
      })
      return yearItems;
    },
    totalCost(){
        return this.itemsTotal.map(item=>item.total).reduce((prev,curr)=> prev+curr);
    }
  },
  methods:{
    monthData(){//當月項目總計
      let itemDatas=[0,0,0,0,0,0];
      if(this.getAllData.length!=0){
        this.getAllData.filter(item=>item.date.split('-')[1]==this.selectDay.mm).forEach(date=>{
          let idx = parseInt(date.type)-1;
          itemDatas[idx] = itemDatas[idx]+parseInt(date.cost)
        });
      }
      this.datas=itemDatas
    },
    monthTotal(){//當年各月總計
      if(this.getAllData.length!=0){
        let yearList = this.getAllData.filter(date=>{
          let yy=date.date.split('-')[0];
          return yy== this.selectDay.yy
        })
        yearList.forEach(date=>{
          let mm=parseInt(date.date.split('-')[1]);
          this.monthCosts[mm-1] = parseInt(this.monthCosts[mm-1])+parseInt(date.cost);
        })
      }
    },
  },
  created(){
    this.selectDay.yy = new Date().getFullYear();
    this.selectDay.mm = new Date().getMonth()+1;
    // this.getYearList = this.$store.getters.getYearList(`${this.selectDay.yy}`);
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
  .sub-title{
    background: $mblack;
    color:white;
    padding:.25rem .5rem;
    border-radius: .25rem;
    display: inline-block;
    margin:0 auto .5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
}
.box{
  background: white;
  border-radius: .5rem;
  padding:1rem;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.15);
  margin-bottom: 1rem;
}
.half-box{
  width: 49%;
}
.full-box{
  width:99%;
}
.total-list{
  display:flex;
  flex-wrap: wrap;
  margin:.5rem auto;
  .total-item{
    width:25%;
    margin-bottom: .5rem;
    text-align:left;
  }
}
.year-total{
  padding:.5rem;
  border-top:1px solid $mgray;
}
</style>