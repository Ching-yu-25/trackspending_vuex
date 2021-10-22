<template>
  <div class="lightbox" id="alert">
    <button class="btn-close" @click="$emit('alertClose','close','alert')"><font-awesome-icon icon="times" /></button>
    <div class="lightbox-header">警告</div>
    <div class="row">
      <div class="col-12">{{msg}}</div>
    </div>
    <div class="btn-row">
      <button class="btn bg-red" @click="delHandler()">確定</button>
      <button class="btn bg-yel" @click="$emit('alertClose','close','alert')">取消</button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default{
  name:"AlertLightbox",
  data(){
    return{
      msg:'',
      delId:'',
    }
  },
  created(){
    this.$bus.$on("alert:message",delInfo=>{
      this.showAlert(delInfo)
    });
  },
  methods:{
    ...mapActions(['delCost']),
    showAlert(delInfo){
      this.msg=delInfo.msg
      this.delId=delInfo.id 
    },
    delHandler(){
      this.delCost(this.delId);
      this.$emit('alertClose','close','alert');
    }
  },
  beforeDestroy() {
    this.$bus.$off('alert:message')
  }
}
</script>
<style lang="scss">
</style>