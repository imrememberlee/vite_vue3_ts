import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '超级管理员'
  }),
  getters: {
    nameLength: (state) => state.name.length
  },
  actions: {
    async insertPost(val: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = val
    }
  }
})
