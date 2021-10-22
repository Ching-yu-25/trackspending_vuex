<template>
  <div class="lightbox" id="edit-listbox">
    <button class="btn-close" @click="$emit('editClose','close','edit')"><font-awesome-icon icon="times" /></button>
    <div class="lightbox-header">編輯紀錄</div>
    <div class="row">
      <label for="">日期:</label>
      <date-picker v-model="updateItem.date" valueType="format"></date-picker>
    </div>
    <div class="row">
      <div v-for="item in typeList" :key="`edittype${item.id}`">
        <label :for="`type${item.id}`" :class="['type-btn', item.color]">
          {{item.name}}
          <input type="radio" name="type" :id="`type${item.id}`" :value="item.id" v-model="updateItem.type" required>
        </label>
      </div>
      
    </div>
    <div class="row">
      <label for="">項目名稱:</label>
      <input type="text" v-model="updateItem.name" required>
    </div>
    <div class="row">
      <label for="">金額:</label>
      <input type="number" v-model="updateItem.cost" required>
    </div>
    <div class="row">
      <label for="">備註:</label>
      <textarea v-model="updateItem.text"></textarea>
    </div>
    <div class="btn-row">
      <button class="btn bg-red" @click="editSpending()">更新</button>
      <button class="btn bg-yel" @click="$emit('editClose','close','edit')">取消</button>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {mapActions} from 'vuex';
export default{
    name:'EditLightbox',
    components:{DatePicker},
    props:{editTypes:{type:Array},
      editItem:{type:Object},
    },
    data(){
      return{
        typeList:this.editTypes,
        updateItem:this.editItem,
      }
    },
    methods:{
      ...mapActions(['editCost']),
      editSpending(){
        if(!this.updateItem.date||!this.updateItem.name||!this.updateItem.type||!this.updateItem.cost) return;
        // this.$emit('updateCost',this.updateItem);
        this.editCost(this.updateItem);
        this.updateItem={
          id:'',
          date:'',
          name:'',
          type:'',
          text:'',
          cost:''
        },
        this.$emit('editClose','close','edit');
      }
    }
  }
</script>
<style lang="scss">
</style>