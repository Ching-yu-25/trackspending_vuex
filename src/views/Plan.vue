<template>
  <div class="plan">
    <div class="container row">
      <aside>
        <div class="pic">
          <img src="@/assets/images/photo.png" alt="" class="img-fluid" />
          <div class="user-name">Ching yu</div>
        </div>
        <div class="plan-edit-area">
          <div class="plan-toggle btn"></div>
          <div class="row">
            <label class="type-tag bg-black">日期 </label>
            <date-picker valueType="format" v-model="newPlan.date"></date-picker>
          </div>
          <div class="row">
            <label class="type-tag bg-black">收入</label>
            <input type="text" v-model.number="newPlan.income"/>
          </div>
          <div class="row">
            <label class="type-tag bg-gray">定存</label>
            <input type="text" v-model.number="newPlan.list[0]"/>
          </div>
          <div class="row">
            <label class="type-tag bg-gray">股票/基金</label>
            <input type="text"  v-model.number="newPlan.list[1]" />
          </div>
          <div class="row">
            <label class="type-tag bg-gray">保險</label>
            <input type="text" v-model.number="newPlan.list[2]" />
          </div>
          <div class="row">
            <label class="type-tag bg-gray">學習費</label>
            <input type="text" v-model.number="newPlan.list[3]" />
          </div>
          <div class="row">
            <label class="type-tag bg-gray">剩下生活費</label>
            <input type="text" :value="remain" disabled />
          </div>
          <div class="row btn-row">
            <div class="btn bg-yel" @click="clearAll()">取消</div>
            <div class="btn bg-red" @click="creatItem()">新增</div>
          </div>
        </div>
      </aside>
      <main>
        <plan-list></plan-list>
      </main>
    </div>
  </div>
</template>
<script>
import PlanList from "@/components/PlanList.vue"

import DatePicker from "vue2-datepicker"
import "vue2-datepicker/index.css"
import {mapActions} from 'vuex'

export default {
  name: "Plan",
  components: {
    PlanList,
    DatePicker,
  },
  data(){
    return{
      newPlan:{
        id:'',
        date:'',
        income:0,
        list:[],
      }
    }
  },
  computed:{
    remain(){
      let totalCost = this.newPlan.list.reduce((prev,curr)=>{
        return prev+curr},0)
      return this.newPlan.income - totalCost
    },
  },
  methods:{
    ...mapActions(['addPlanItem']),
    clearAll(){
      this.newPlan={
        id:'',
        date:'',
        income:0,
        list:[],
      }
    },
    creatItem(){
      this.addPlanItem(this.newPlan)
      this.clearAll();
    },
    objWrapper(idx,name,val){
      console.log(idx,name,val)
    }
  },
  watch:{
    clearAll:{
      deep:true
    }
  }
}
</script>
<style lang="scss">
.plan-edit-area {
  background: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
  > .row {
    margin-bottom: 0.5rem;
    .type-tag {
      min-width: 80px;
    }
    > input {
      width: calc(100% - 80px);
    }
  }
  .btn-row{
    margin-top:.5rem;
    .btn{
      width:50%;
    }
  }
  .btn{

  }
}
</style>
