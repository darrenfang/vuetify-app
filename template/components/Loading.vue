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

<template lang="html">
  <div v-if="loading">
    <div v-if="error">
      <v-progress-linear
        class="loading-progress"
        :indeterminate="false"
        :color="errorColor"
        :height="height"
        value="100"
      >
      </v-progress-linear>
    </div>
    <div v-else>
      <v-progress-linear
        class="loading-progress"
        :indeterminate="loading"
        :color="color"
        :height="height"
      >
      </v-progress-linear>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      color: '{{loadingColor}}',
      errorColor: '{{loadingErrorColor}}',
      error: false,
      height: {{loadingHeight}}
    }),
    methods: {
      start () {
        this.loading = true
        this.error = false
      },
      finish () {
        this.loading = false
        this.error = false
      },
      fail () {
        this.loading = true
        this.error = true
      }
    }
  }
</script>

<style scoped>
  .loading-progress {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    opacity: 1;
    transition: width 0.1s, opacity 0.4s;
    z-index: 999999;
    margin: 0;
    padding: 0;
  }
</style>
