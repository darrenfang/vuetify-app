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

import me from '../api/me'
import * as types from './mutation-types'

export const state = () => ({
  account: {}
})

export const mutations = {
  [types.ME.DETAIL] (state, response) {
    state.account = response
  },
  [types.ME.CLEAR_DETAIL] (state) {
    state.account = {}
  },
  [types.ME.UPDATE_PASSWORD] (state, response) {
  }
}

export const actions = {
  getDetail ({commit}) {
    commit(types.ME.CLEAR_DETAIL)

    return me.getDetail()
      .then(response => {
        commit(types.ME.DETAIL, response)
      })
      .catch(function () {
      })
  },
  updatePassword ({dispatch}, payload) {
    return me.updatePassword(payload)
      .then(() => {
        dispatch('login/logout', null, {root: true})
      })
      .catch(function () {
      })
  }
}

export const getters = {
  account: state => state.account
}
