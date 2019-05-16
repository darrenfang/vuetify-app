import Cookies from 'js-cookie'
import * as axios from '../plugins/axios'

const KEY = 'ACCESS_TOKEN'

export default {
  store: function (token) {
    Cookies.set(KEY, token)
    axios.setToken(token)
  },
  recovery: function () {
    let token = Cookies.get(KEY)
    axios.setToken(token)
    return !!token
  },
  remove: function () {
    Cookies.remove(KEY)
    axios.setToken(null)
  }
}
