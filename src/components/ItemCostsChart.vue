<script>
/*vue.chart js*/
import {Pie} from 'vue-chartjs'
export default{
  name:'itemCostsChart',
  extends:Pie,
  props:['chartData'],
  methods:{
    updateData(){
      this.renderChart(
        {
        labels:['電信','食物','交通','日用品','娛樂','其他'],
        datasets:[
          {
            label:'各項總計',
            barPercentage: .5,
            barThickness: 20,
            maxBarThickness: 20,
            minBarLength: 2,
            data: this.chartData,
            backgroundColor: ['#358ed6','#ef2d56','#ffc15e','#1EA896','#ec8596','#77a0a9'],
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