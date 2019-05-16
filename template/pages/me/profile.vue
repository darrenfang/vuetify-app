<template>
  <v-layout row justify-center>
    <v-card width="90%" style="max-width: 600px;" class="mt-4">
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-static-text-field
                :value="username"
                label="用户名"
                progress-color="purple">
              </v-static-text-field>
            </v-flex>
            <v-flex xs12>
              <v-static-text-field
                :value="mobile"
                label="手机号码"
                progress-color="purple">
              </v-static-text-field>
            </v-flex>
            <v-flex xs12>
              <v-static-text-field
                :value="lastLoginTime"
                label="最后登录时间"
                progress-color="purple">
              </v-static-text-field>
            </v-flex>
            <v-flex xs12>
              <v-static-text-field
                :value="lastPasswordUpdateTime"
                label="密码最后修改时间"
                progress-color="purple">
              </v-static-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    metaInfo: {
      title: '个人信息'
    },
    mounted () {
      this.getDetail()
    },
    computed: {
      ...mapGetters({
        account: 'me/account'
      }),
      username () {
        return this.loading ? '' : this.account.username
      },
      mobile () {
        return this.loading ? '' : this.account.mobile
      },
      lastLoginTime () {
        return this.loading ? ''
          : this.account['last_login_time'] ? this.account['last_login_time'] : '未登录'
      },
      lastPasswordUpdateTime () {
        return this.loading ? ''
          : this.account['last_password_update_time'] ? this.account['last_password_update_time'] : '未修改密码'
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      ...mapActions({
        getDetail: 'me/getDetail'
      })
    }
  }
</script>
