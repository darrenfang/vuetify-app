/*
 * MIT License
 *
 * Copyright (c) 2018 Darren Fang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import axios from 'axios'
import * as url from '../api/url'

const NETWORK_ERROR_CODE = 'Network Error'
const NETWORK_ERROR_MESSAGE = '网络错误。'

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

const startLoading = function () {
  global.$nuxt.$nextTick(() => {
    if (global.$nuxt.$loading) {
      global.$nuxt.$loading.start()
    }
  })
}

const finishLoading = function () {
  global.$nuxt.$nextTick(() => {
    if (global.$nuxt.$loading) {
      global.$nuxt.$loading.finish()
    }
  })
}

const errorLoading = function () {
  global.$nuxt.$nextTick(() => {
    if (global.$nuxt.$loading) {
      global.$nuxt.$loading.fail()
    }
  })
}

export default ({app, store}) => {
  axios.defaults.baseURL = url.API_BASE

  axios.interceptors.request.use(function (config) {
    startLoading()

    return config;
  }, function (error) {
    errorLoading()

    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    if (response.data.message) {
      store.dispatch('showMessage', {text: response.data.message, error: false}, {root: true})
    }

    finishLoading()
    return response
  }, function (error) {
    errorLoading()

    if (error.response.status === 401) {
      app.router.push('/login')
    }

    let message = '请求错误'
    if (error.message === NETWORK_ERROR_CODE) {
      message = NETWORK_ERROR_MESSAGE
    } else if (error.response.data && error.response.data.error_description) {
      message = error.response.data.error_description
    }
    store.dispatch('showMessage', {text: message, error: true}, {root: true})
    return Promise.reject(error)
  })
}
