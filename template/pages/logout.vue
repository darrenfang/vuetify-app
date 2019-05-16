<template>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    metaInfo: {
      title: '注销'
    },
    mounted () {
      this.logout()
    },
    methods: {
      ...mapActions({
        logout: 'login/logout'
      })
    }
  }
</script>
