<template>
  <div>
    用户名:{{ mainStore.name }}
    <br />
    长度:{{ mainStore.nameLength }}
  </div>
  <hr />
  <button @click="updateName">修改store中的name</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改 store 中的数据
  // mainStore.$patch({
  //   name: '名称被修改了,nameLength也随之改变了'
  // })
  mainStore.insertPost('名称被修改了,nameLength也随之改变了')
}
</script>

<style lang="scss" scoped>
a {
  color: $test-color;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
