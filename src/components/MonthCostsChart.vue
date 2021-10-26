<script>
/*vue.chart js*/
import {Bar} from 'vue-chartjs'
// import {mapGetters} from 'vuex'
export default{
  name:'MonthCostsChart',
  extends: Bar,
  props:['chartData'],
  data(){
    return{
      getMonthList:[],
    }
  },
  computed:{
    // ...mapGetters(['getMonthList']),
  },
  methods:{
    updateData(){
      this.renderChart(
        {
        labels:['1','2','3','4','5','6','7','8','9','10','11','12'],
        datasets:[
          {
            label:'各項總計',
            barPercentage: .5,
            barThickness: 20,
            maxBarThickness: 20,
            minBarLength: 2,
            data: this.chartData,
            backgroundColor: '#8ddca4',
          }
        ]
      },{
        responsive:true,
        title:{
          display:true,
          text:'月支出'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      })
    }
  },
  created(){
    this.getMonthList = this.$store.getters.getMonthList('2021-10')
  },
  mounted(){
    this.updateData();
  },
  watch:{
    'chartData'(){
      this.updateData();
    }
  }
}
</script>