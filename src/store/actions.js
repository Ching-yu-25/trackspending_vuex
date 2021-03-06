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
  },

  async addPlanItem({
    commit
  }, item) {
    commit('addItem', item)
  },

  async editPlanItem({
    commit
  }, item) {
    commit('editItem', item)
  },

  async delPlanItem({
    commit
  }, idx) {
    commit('delItem', idx)
  }
}