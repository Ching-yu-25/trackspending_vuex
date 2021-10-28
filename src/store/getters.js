export default {

  getTypeList: (state) => {
    return state.typeList;
  },
  getAllData: (state) => {
    return state.monthList;
  },
  // getMonthList: (state) => (searchdate) => {
  //   return state.monthList.filter(item => item.date.includes(searchdate))
  // },
  getYearList: (state) => (searchdate) => {
    return state.monthList.filter(item => item.date.includes(searchdate))
  },

  getAllPlans: (state) => {
    return state.plans;
  }
}