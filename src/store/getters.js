export default {
  // getMonthList: (state) => {
  //   return state.monthList;
  // },
  getTypeList: (state) => {
    return state.typeList;
  },
  getMonthList: (state) => (searchdate) => {
    return state.monthList.filter(item => item.date.includes(searchdate))
  },
  getYearList: (state) => (searchdate) => {
    return state.monthList.filter(item => item.date.includes(searchdate))
  }
}