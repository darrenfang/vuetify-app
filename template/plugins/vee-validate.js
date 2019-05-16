import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import messages from '../config/messages'

const mobileValidator = {
  getMessage (field, args) {
    return 'The ' + field + ' value is not valid. '
  },
  validate: (value, args) => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
}
Validator.extend('mobile', mobileValidator)

Vue.use(VeeValidate, {
  events: 'input|change|blur|keyup'
})
VeeValidate.Validator.localize('zh-CN', messages.dictionary)
