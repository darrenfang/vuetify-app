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

import * as types from './mutation-types'

const DEFAULT_CONFIRM = {
  visible: false,
  title: '',
  text: '',
  ok: () => {
  },
  cancel: () => {
  },
  danger: true
}

const DEFAULT_MESSAGE = {
  visible: false,
  text: '',
  error: false,
  timeout: 10
}

export const state = () => ({
  message: Object.assign({}, DEFAULT_MESSAGE),
  confirm: Object.assign({}, DEFAULT_CONFIRM)
})

export const mutations = {
  [types.COMMON.SHOW_MESSAGE] (state, payload) {
    Object.assign(state.message, payload)
    state.message.visible = true
  },
  [types.COMMON.SHOW_CONFIRM_BOX] (state, payload) {
    Object.assign(state.confirm, payload)
    state.confirm.visible = true
  },
  [types.COMMON.CLEAR_MESSAGE] (state) {
    Object.assign(state.message, DEFAULT_MESSAGE)
  },
  [types.COMMON.CLOSE_CONFIRM_BOX] (state) {
    Object.assign(state.confirm, DEFAULT_CONFIRM)
  }
}

export const actions = {
  showMessage ({commit, dispatch}, payload) {
    dispatch('clearMessage')
    commit(types.COMMON.SHOW_MESSAGE, payload)
  },
  clearMessage ({commit}) {
    commit(types.COMMON.CLEAR_MESSAGE)
    global.$nuxt.$loading.finish()
  },
  showConfirmBox ({commit}, payload) {
    commit(types.COMMON.SHOW_CONFIRM_BOX, payload)
  },
  closeConfirmBox ({commit}) {
    commit(types.COMMON.CLOSE_CONFIRM_BOX)
  },
  confirmOk ({state, dispatch}) {
    if (state && state.confirm && state.confirm.ok) {
      state.confirm.ok()
    }

    dispatch('closeConfirmBox')
  },
  confirmCancel ({state, dispatch}) {
    if (state && state.confirm && state.confirm.cancel) {
      state.confirm.cancel()
    }

    dispatch('closeConfirmBox')
  }
}

export const getters = {
  message: state => state.message,
  confirm: state => state.confirm
}
