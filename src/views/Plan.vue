<template>
  <div class="plan">
    <div class="container row">
      <aside>
        <div class="pic">
          <img src="@/assets/images/photo.png" alt="" class="img-fluid">
          <div class="user-name">Ching yu</div>
        </div>
        <div class="plan-edit-area">
          <div class="plan-toggle btn"></div>
          <div class="row">
            <label class="type-tag bg-black">日期
            </label>
            <date-picker valueType="format"></date-picker>
          </div>
          <div class="row">
            <label class="type-tag bg-blue">定存</label>
            <input type="text">
          </div>
          <div class="row">
            <label class="type-tag bg-red">股票/基金</label>
            <input type="text">
          </div>
          <div class="row">
            <label class="type-tag bg-yel">保險</label>
            <input type="text">
          </div>
          <div class="row">
            <label class="type-tag bg-grn">學習費</label>
            <input type="text">
          </div>
          <div class="row">
            <label class="type-tag bg-gray">剩下生活費</label>
            <input type="text" disabled>
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
import PlanList from '@/components/PlanList.vue'

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default{
  name:"Plan",
  components:{
    PlanList,
    DatePicker
  }
}
</script>
<style lang="scss">
.plan-edit-area{
  background: white;
  border-radius: .5rem;
  padding: .5rem;
  margin-top: 1rem;
  >.row{
    margin-bottom: .5rem;
    .type-tag{
      min-width: 80px;
    }
    input{
      width: calc(100% - 80px);
    }
  }
}
</style>