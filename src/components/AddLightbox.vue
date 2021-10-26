<template>
  <div class="lightbox" id="add-listbox">
    <button class="btn-close" @click="$emit('addClose','close','add')"><font-awesome-icon icon="times" /></button>
    <div class="lightbox-header">新增紀錄</div>
    <div class="row required-item">
      <label for="">日期:</label>
      <date-picker v-model="newItem.date" valueType="format"></date-picker>
    </div>
    <div class="row required-item type-row">
      <div v-for="item in typeList" :key="`addtype${item.id}`">
        <label :for="`type${item.id}`" :class="['type-btn', item.color,(newItem.type==item.id)?'active':'']">
          {{item.name}}
          <input type="radio" name="type" :id="`type${item.id}`" :value="item.id" v-model="newItem.type" required>
        </label>
      </div>
    </div>
    <div class="row required-item">
      <label for="">項目名稱:</label>
      <input type="text" v-model="newItem.name" required>
    </div>
    <div class="row required-item">
      <label for="">金額:</label>
      <input type="number" v-model="newItem.cost" required>
    </div>
    <div class="row">
      <label for="">備註:</label>
      <textarea v-model="newItem.text"></textarea>
    </div>
    <div class="row">
      <div class="alert-text">{{errMsg}}</div>
    </div>
    <div class="btn-row">
      <button class="btn bg-red" @click="addNewItem()">新增</button>
      <button class="btn bg-yel" @click="$emit('addClose','close','add')">取消</button>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {mapActions} from 'vuex'
export default{
    name:'AddLightbox',
    components:{DatePicker},
    props:{types:{type:Array}},
    data(){
      return{
        // time1: null,
        typeList:this.types,
        newItem:{
          id:'',
          date:'',
          name:'',
          type:'',
          text:'',
          cost:''
        },
        errMsg:''
      }
    },
    methods: {
      ...mapActions(['creatCost']),
      addNewItem(){
        this.errMsg ='';
        if(!this.newItem.date||!this.newItem.name||!this.newItem.type||!this.newItem.cost) { 
          this.errMsg = '請確認必填欄位是否已填寫!';
          return false;
        }
        // this.$emit('insertNewCost',this.newItem);
        console.log(this.newItem)
        this.creatCost(this.newItem);
        this.newItem={
          id:'',
          date:'',
          name:'',
          type:'',
          text:'',
          cost:''
        }
       this.$emit('addClose','close','add');
      }
    },
  }
</script>
<style lang="scss">
.mx-datepicker{
  width: 90%;
  }
</style>