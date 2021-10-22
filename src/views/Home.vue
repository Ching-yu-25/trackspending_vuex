<template>
  <div class="home">
    <div class="container row">
      <aside>
        <div class="pic">
          <img src="@/assets/images/photo.png" alt="" class="img-fluid">
          <div class="user-name">Ching yu</div>
        </div>
        <div class="static">
          <p class="month">10月份</p>
          <p>目前總支出 <span>{{totalCal}}</span>元</p>
        </div>
        <div class="calendar">
          <v-date-picker color="green" :model-config="modelConfig"  v-model="chooseDate" is-expanded></v-date-picker>
        </div>
      </aside>
      <main>
        <list-component :types="typeList" :dates="dateList" @editOpen="lightboxHandler(arguments)" @editCost="editUpdate($event)" @alertOpen="lightboxHandler(arguments)"></list-component>
      </main>
    </div>
    <div class="lightbox-wrapper" v-if="lightboxToggle.outer">
      <add-lightbox :types="typeList" @addClose="lightboxHandler(arguments)" v-if="lightboxToggle.inner=='add'"></add-lightbox>
      <edit-lightbox :edit-types="typeList" :edit-item="editItem" @editClose="lightboxHandler(arguments)" v-else-if="lightboxToggle.inner=='edit'"></edit-lightbox>
      <alert-lightbox v-else @alertClose="lightboxHandler(arguments)"></alert-lightbox>
    </div>
    <div class="addBtn bg-red" @click="lightboxHandler(['open','add'])"> <font-awesome-icon icon="plus" /></div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import listComponent from '@/components/ListComponent.vue'
import addLightbox from '@/components/AddLightbox.vue'
import editLightbox from '@/components/EditLightbox.vue'
import alertLightbox from '@/components/AlertLightbox.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    listComponent,
    addLightbox,
    editLightbox,
    alertLightbox
  },
  data(){
    return{
      chooseDate: new Date(),
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      },
      typeList:[{
            id:'1',
            name:'電信',
            color:'bg-blue',
          },{
            id:'2',
            name:'食物',
            color:'bg-red'
          },{
            id:'3',
            name:'交通',
            color:'bg-yel'
          },{
            id:'4',
            name:'日用品',
            color:'bg-grn',
          },{
            id:'5',
            name:'娛樂',
            color:'bg-pink'
          },{
            id:'6',
            name:'其他',
            color:'bg-gray',
          }
        ],
      // monthList:[
      //   {
      //       id:1,
      //       date:'2021-10-10',
      //       name:'手機費',
      //       type:'1',
      //       text:'',
      //       cost:199,
      //     },{
      //       id:2,
      //       date:'2021-10-14',
      //       name:'午餐',
      //       type:'2',
      //       text:'魷魚羹麵',
      //       cost:55,
      //     },{
      //       id:3,
      //       date:'2021-10-14',
      //       name:'火車',
      //       type:'3',
      //       text:'【自強號】中壢-嘉義',
      //       cost:510,
      //     },{
      //       id:4,
      //       date:'2021-10-21',
      //       name:'晚餐',
      //       type:'2',
      //       text:'豬排套餐',
      //       cost:150,
      //     },{
      //       id:5,
      //       date:'2021-10-22',
      //       name:'專輯',
      //       type:'5',
      //       text:'knights Album',
      //       cost:1000,
      //     }
      // ],
      lightboxToggle:{outer:false,inner:''},
      editItem:{},
    }
  },
  computed:{
    ...mapGetters(['getMonthList']),
    totalCal(){
      let total = this.getMonthList.map(item=>parseInt(item.cost)).reduce((prev,curr)=>prev+curr)
      return total
    },
    dateList(){
      return this.getMonthList.filter(date=>date.date==this.chooseDate)
    },
  },
  methods: {
      lightboxHandler(val){
        if(val[0]=='open'){
          this.lightboxToggle.outer = true;
          this.lightboxToggle.inner = val[1];
        }else{
          this.lightboxToggle.outer = false;
        }
      },
      editUpdate(id){
        const idx = this.getMonthList.findIndex(date=>date.id==id);
        this.editItem = this.getMonthList[idx];
      },
      // delSpending(id){
      //   const idx = this.getMonthList.findIndex(date=>date.id==id);
      //   this.getMonthList.splice(idx,1);
      //   this.lightboxHandler(['close','alert']);
      // }
    },
    created() {
      let yy = new Date().getFullYear();
      let mm = parseInt(new Date().getMonth())+1;
      let dd = new Date().getDate();
      this.chooseDate = `${yy}-${mm}-${dd}`;
    },
}
</script>
<style lang="scss">
.addBtn{
  position:fixed;
  bottom: calc(5% + 1rem + 50px);
  right:5%;
  width:50px;
  height:50px;
  color:$mlgray;
  border-radius: 5rem;
  font-size: 2rem;
  line-height: 50px;
  box-shadow: 0px 0px 5px rgba(0,0,0,.25);
  cursor: pointer;
}
aside{
  width:30%;
  @media screen and (max-width:1199px){
    min-width:200px;
  }
  @media screen and (max-width:767px){
    width:100%;
  }
}
main{
  width: 65%;
  @media screen and (max-width:1199px){
    margin-left: 3%;
    width:calc(100% - 3% - 200px);
  }
  @media screen and (max-width:767px){
    margin-top: 1rem;
    margin-left:0 ;
    width:100%;
  }
}
.pic{
  width: 100%;
  min-width: 200px;
  min-height: 200px;
  border-radius: .5rem;
  background: white;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 5px rgba(0,0,0,.15);
  img{
    position: relative;
  }
  .user-name{
    position: absolute;
    background: $mblack;
    color: white;
    padding: .35rem 1rem;
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    white-space: nowrap;
  }
}
.static{
  max-width:250px;
  margin:1rem auto;
  text-align:left;
  .month{
    font-weight:bold;
    font-size: 1.5rem;
  }
}
.vc-container{
  box-shadow: 0px 0px 5px rgba(0,0,0,.15);
  width: 100%;
  min-width: unset;
  .vc-weeks{
    width: 100%;
    min-width: unset !important;
  }
  .vc-pane{
    width: 100%;
    min-width: unset !important;
  }
}
</style>
