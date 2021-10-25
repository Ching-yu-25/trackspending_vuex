<template>
  <div class="list-wrapper">
    <div class="type-row">
      <a :class="['type-btn', 'bg-black',(typeChoose==0)?'active':'']" @click="typeHandler(0)">全部</a>
      <a v-for="type in typeList" :key="type.id" :class="['type-btn',colorList[type.id].name,(typeChoose==type.id)?'active':'']"  @click="typeHandler(type.id)">{{type.name}}</a>
    </div>
    <hr>
    <div v-if="dayList.length>0&&typeDateList.length">
      <ul class="list">
      <li v-for="item in typeDateList" :key="'listitem'+item.id" class="list-item">
          <div class="top-row">
            <div class="date">{{item.date}}</div>
            <div class="btns">
              <button class="btn bg-red" @click="$emit('editOpen','open','edit');$emit('editCost',item.id)"><font-awesome-icon icon="pencil-alt" /></button>
              <button class="btn bg-yel" @click="$emit('alertOpen','open','alert');showAlert(item.id)"><font-awesome-icon icon="trash-alt" /></button>
            </div>
          </div>
          <div class="bottom-row text-start">
            <div>
              <div class="name"><span :class="['type-tag',colorList[parseInt(item.type)].name]">{{typeFilter(item.type)}}</span>{{item.name}}</div>
              <div class="text">{{item.text}}</div>
            </div>
            <div class="money">${{item.cost}}</div>
          </div>
      </li>
    </ul>
    </div>
    <div v-else-if="dayList.length>0&&!typeDateList.length">
      <p>無此項支出</p>
    </div>
    <div v-else>
      <p>今日無支出</p>
    </div>
  </div>
</template>
<script>
  export default{
    name:'ListComponent',
    props:{
      types:{type:Array},
      dates:{type:Array},
      colorList:{type:Array}
    },
    data(){
      return{
        typeList:this.types,
        dayList:this.dates,
        typeChoose:0,
      }
    },
    methods:{
      showAlert(idx){
        let delItem = {id:idx,msg:'確定要刪除?'}
        this.$nextTick(function(){
          this.$bus.$emit('alert:message',delItem);
        })
      },
      typeHandler(typeid){
        this.typeChoose=typeid;
      },
      typeFilter(id){
        let nowType = this.typeList.filter(type=>type.id==id)
        return nowType[0].name
      },
    },
    computed:{
      typeDateList(){
        if(this.typeChoose!=0){
          return this.dayList.filter(date=>date.type==this.typeChoose)
        }else{
          return this.dayList;
        }
      },
    },
    watch:{
      dates:{
        handler:function(newVal){
          this.dayList = newVal
        },
        deep:true,
      }
    }
  }
</script>
<style lang="scss" >
.list-wrapper{
  background: white;
  border-radius: .5rem;
  padding:1rem;
  min-height: 90vh;
  box-shadow: 0px 0px 5px rgba(0,0,0,.15);
}
.type-tag{
  display:inline-block;
  margin-right: .5rem;
  padding:.15rem .35rem;
  font-size:.8rem;
  border-radius: .35rem;
  color:white;
}
.list-item{
  border-bottom:1px solid $mlgray;
  .date{
    line-height: 1.5;
  }
  .name{
    font-weight: bold;
    color: $mblack;
  }
  .text{
    color:$mgray;
    font-size: .8rem;
    margin-top: .5rem;
  }
}
</style>