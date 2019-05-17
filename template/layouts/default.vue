<!--
  - MIT License
  -
  - Copyright (c) 2018 Darren Fang
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -
  -->

<template>
  <v-app dark>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      fixed
      app>

      <v-list>
        <v-list-tile to="/home" active-class="success--text" exact>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>首页</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          v-for="(nav, i) in navs"
          :prepend-icon="nav.icon"
          no-action
          :key="i"
          active-class="success--text"
        >
          <template v-slot:activator>
            <v-list-tile active-class="success--text" exact>
              <v-list-tile-content>
                <v-list-tile-title v-text="nav.text">}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="(item, i) in nav.items"
            :key="i"
            :to="item.to"
            active-class="success--text"
            exact
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="name" @click="$router.push('/home')" style="cursor: pointer;"/>
      <v-spacer/>
      <div class="mr-3" v-if="account && account.username">
        欢迎您，<span v-text="account.username"></span>
      </div>
      <v-menu bottom offset-y>
        <v-btn
          icon
          dark
          slot="activator"
          class="purple"
        >
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in menus"
            exact
            active-class="success--text"
          >
            <v-list-tile-action>
              <v-icon v-text="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content class="mb-5">
      <nuxt/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <v-spacer/>
      &copy;&nbsp;<span v-text="copyright"></span>
      <v-spacer/>
    </v-footer>

    <v-message :value="message.visible"
               :color="messageColor"
               :text="message.text"
               :timeout="{{messageTimeout}}"
               @close="clearMessage"
               closeText="关闭">
    </v-message>
    <v-confirm-box :display="confirm.visible"
                   :danger="confirm.danger"
                   :title="confirm.title"
                   :text="confirm.text"
                   :ok="confirmOk"
                   :cancel="confirmCancel"
                   cancelText="取消"
                   okText="确定">
    </v-confirm-box>
  </v-app>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    metaInfo: {
      titleTemplate: '%s - ' + process.env.SITE_NAME
    },
    data: () => ({
      fixed: false,
      clipped: false,
      drawer: false
    }),
    computed: {
      ...mapGetters({
        name: 'site/name',
        copyright: 'site/copyright',
        menus: 'site/menus',
        navs: 'site/navs',
        account: 'me/account',
        message: 'message',
        confirm: 'confirm'
      }),
      messageColor: function () {
        return this.message.error ? 'error' : 'info'
      }
    },
    methods: {
      ...mapActions({
        clearMessage: 'clearMessage',
        closeConfirmBox: 'closeConfirmBox',
        confirmOk: 'confirmOk',
        confirmCancel: 'confirmCancel'
      })
    }
  }
</script>
