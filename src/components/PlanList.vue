<template>
  <div class="list-wrapper">
    <h1>收入分配紀錄</h1>
    <div class="list-inner">
      <div class="list-scroll">
        <div class="list-item">
          <div class="date-income"><span class="date">2021/10</span><span class="income">月收入 $30000</span></div>
          <div class="plan-type-list">
            <div class="plan-type-item">
              <span class="type-tag bg-blue">定存</span><span>10000</span>
            </div>
            <div class="plan-type-item">
              <span class="type-tag bg-red">股票/基金</span><span>3000</span>
            </div>
            <div class="plan-type-item">
              <span class="type-tag bg-yel">保險</span><span>3000</span>
            </div>
            <div class="plan-type-item">
              <span class="type-tag bg-grn">學習費</span><span>3000</span>
            </div>
            <div class="plan-type-item">
              <span class="type-tag bg-gray">剩下生活費</span><span>10000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:"PlanList",
}
</script>
<style lang="scss">
.list-inner{
  margin-top: .5rem;
  .list-scroll{
    overflow-y: scroll;
  }
}
.date-income{
  background: $mblack;
  color: white;
  border-radius: .5rem;
  padding:.5rem;
  display: flex;
  justify-content: space-between;
  .date{
    position: relative;
    padding-left:1rem;
    &::before{
      content:'';
      position: absolute;
      width: .35rem;
      height: 1.5rem;
      background: white;
      left: 0rem;
    }
  }
  .income{
    line-height: 1.5;
  }
}
.plan-type-list{
  display: flex;
  flex-wrap:wrap;
  justify-content: flex-start;
  border-bottom: 1px dashed $mblack;
  .plan-type-item{
    border:1px solid $mlgray;
    padding:.25rem;
    border-radius: .5rem;
    width: calc(94% / 3);
    margin: .5rem 1%;
    text-align:left;
    
  }
}
</style>