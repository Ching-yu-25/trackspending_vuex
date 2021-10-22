//這邊接遠端
export default {
  async creatCost({
    commit
  }, cost) {
    commit('addCost', cost)
  },
  async editCost({
    commit
  }, cost) {
    commit('updateCost', cost)
  },
  async delCost({
    commit
  }, id) {
    commit('removeCost', id)
  }
}