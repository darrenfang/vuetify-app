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
    <v-content class="mb-5">
      <nuxt/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-spacer/>
      &copy;&nbsp;<span v-text="copyright"></span>
      <v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    metaInfo: {
      titleTemplate: '%s - ' + process.env.SITE_NAME
    },
    data: () => ({
      fixed: false
    }),
    computed: {
      ...mapGetters({
        copyright: 'site/copyright'
      })
    }
  }
</script>
