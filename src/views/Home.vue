<template>
  <div class="home">
    <div class="container row">
      <aside>
        <div class="pic">
          <img src="@/assets/images/photo.png" alt="" class="img-fluid">
          <div class="user-name">Ching yu</div>
        </div>
        <div class="static">
          <p class="month">{{today.mm}}月份</p>
          <p>目前總支出 <span>{{totalCal}}</span>元</p>
        </div>
        <div class="calendar">
          <!-- <v-date-picker color="green" :model-config="modelConfig"  v-model="chooseDate" is-expanded></v-date-picker> -->
        
        <v-calendar :attributes="attributes" @dayclick="dayClicked" @update:from-page="monthChange($event)" is-expanded> </v-calendar>
        </div>
      </aside>
      <main>
        <list-component :types="getTypeList" :dates="dateList" :colorList="colorList" @editOpen="lightboxHandler(arguments)" @editCost="editUpdate($event)" @alertOpen="lightboxHandler(arguments)"></list-component>
      </main>
    </div>
    <div class="lightbox-wrapper" v-if="lightboxToggle.outer">
      <add-lightbox :types="getTypeList" @addClose="lightboxHandler(arguments)" v-if="lightboxToggle.inner=='add'"></add-lightbox>
      <edit-lightbox :edit-types="getTypeList" :edit-item="editItem" @editClose="lightboxHandler(arguments)" v-else-if="lightboxToggle.inner=='edit'"></edit-lightbox>
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
      today:{yy:'',mm:'',dd:''},
      selectedDay: new Date(),
      // getMonthList:[],
      // modelConfig: {
      //   type: 'string',
      //   mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      // },
      lightboxToggle:{outer:false,inner:''},
      editItem:{},
      colorList:[
        {name:'bg-black',color:'#2e4057'},
        {name:'bg-blue',color:'#358ed6'},
        {name:'bg-red',color:'#ef2d56'},
        {name:'bg-yel',color:'#ffc15e'},
        {name:'bg-grn',color:'#1EA896'},
        {name:'bg-pink',color:'#ec8596'},
        {name:'bg-gray',color:'#77a0a9'}],
        testTxt:'2021-10'
    }
  },
  computed:{
    ...mapGetters(['getAllData']),
    ...mapGetters(['getTypeList']),
    attributes() {
      return this.getAllData.map(t => ({
        key: `cost.${t.id}`,
        dot: { style:{
          backgroundColor: this.colorList[t.type].color,
        }},
        dates: t.date,
        customData: t,
      }));
    },
    totalCal(){
      let total =0;
      if(this.getAllData.length>0){
       total = this.getAllData.map(item=> {
         let mm = item.date.split('-')[1];
         console.log(mm,this.today.mm)
         return (mm==this.today.mm)?parseInt(item.cost):0;
        }).reduce((prev,curr)=>prev+curr)
      }
      return total
    },
    dateList(){
      return this.getAllData.filter(date=>date.date==this.selectedDay)
    },
  },
  methods: {
    dayClicked(day) {
      this.selectedDay = day.id;
    },
    lightboxHandler(val){
      if(val[0]=='open'){
        this.lightboxToggle.outer = true;
        this.lightboxToggle.inner = val[1];
      }else{
        this.lightboxToggle.outer = false;
      }
    },
    editUpdate(id){
      const idx = this.getAllData.findIndex(date=>date.id==id);
      this.editItem = this.getAllData[idx];
    },
    monthChange(el){//待做
      this.today.yy = el.year;
      this.today.mm = el.month<10?'0'+el.month:el.month;
    }
  },
  created() {
    this.today.yy = new Date().getFullYear();
    this.today.mm = parseInt(new Date().getMonth())+1;
    this.today.mm=this.today.mm<10?'0'+this.today.mm:this.today.mm;
    this.today.dd = (new Date().getDate()<10)?'0'+new Date().getDate():new Date().getDate();
    this.selectedDay = `${this.today.yy}-${this.today.mm}-${this.today.dd}`;
    // this.getMonthList = this.$store.getters.getMonthList(`${this.today.yy}-${this.today.mm}`);
  },
}
</script>
<style lang="scss">
.addBtn{
  position:fixed;
  bottom: calc(5% + 1rem + 110px);
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
