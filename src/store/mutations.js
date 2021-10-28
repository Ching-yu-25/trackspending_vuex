export default {
  addCost: (state, cost) => {
    let id = state.monthList.length + 1;
    cost.id = id;
    state.monthList.push(cost)
  },
  updateCost: (state, cost) => {
    const idx = state.monthList.findIndex(item => item.id == cost.id)
    state.monthList.splice(idx, 1, cost)
  },
  removeCost: (state, id) => {
    const idx = state.monthList.findIndex(item => item.id == id)
    state.monthList.splice(idx, 1)
  },

  addItem: (state, item) => {
    let id = state.plans.length + 1;
    item.id = id;
    state.plans.push(item)
  }
}