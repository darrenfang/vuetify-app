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

import * as url from '../api/url'
import * as types from './mutation-types'
import querystring from 'querystring'
import token from '../utils/token'
import login from '../api/login'

export const state = () => ({
  authenticated: false
})

export const mutations = {
  [types.LOGIN.CALLBACK] (state, accessToken) {
    token.store(accessToken)
    state.authenticated = true
  },
  [types.LOGIN.LOGOUT] (state) {
    token.remove()
    state.authenticated = false
  },
  [types.LOGIN.RECOVERY] (state, payload) {
    state.authenticated = payload.authenticated
  }
}

export const actions = {
  callback ({commit, dispatch}, hash) {
    if (hash && hash.indexOf('#') === 0) {
      hash = hash.substring(1)
    }

    if (hash.indexOf('error') !== -1) {
      this.$router.push(url.LOGIN.INDEX_PAGE, function () {
        dispatch('showMessage', {text: '授权失败。', error: true}, {root: true})
      })
      return
    }

    let json = querystring.parse(hash)
    let accessToken = json['access_token']

    if (!accessToken) {
      this.$router.push(url.LOGIN.INDEX_PAGE, function () {
        dispatch('showMessage', {text: '授权失败：授权码为空。', error: true}, {root: true})
      })
      return
    }

    commit(types.LOGIN.CALLBACK, accessToken)
    dispatch('me/getDetail', null, {root: true})

    this.$router.push(url.LOGIN.SUCCESS_PAGE)
  },
  logout ({commit}) {
    login.logout()
      .then(() => {
        commit(types.LOGIN.LOGOUT)
      })
      .finally(() => {
        this.$router.push(url.LOGIN.INDEX_PAGE)
      })
  },
  recovery ({commit}, payload) {
    commit(types.LOGIN.RECOVERY, payload)
  }
}

export const getters = {
  authenticated: state => state.authenticated
}
