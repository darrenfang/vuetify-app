<template>
  <v-container fill-height dark class="mt-5">
    <v-layout>
      <v-flex>
        <h3 class="display-3">欢迎使用<span v-text="name"></span></h3>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">请先登录系统！</div>
        <v-btn color="success" class="mx-0" to="/login">
          登录
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    layout: 'login',
    metaInfo: {
      title: '欢迎使用'
    },
    computed: {
      ...mapGetters({
        name: 'site/name'
      })
    }
  }
</script>
