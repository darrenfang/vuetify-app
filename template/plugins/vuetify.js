import Vue from 'vue'
import Vuetify, {
  VBtn,
  VCard,
  VCardActions,
  VCardTitle,
  VDialog,
  VLayout,
  VProgressLinear,
  VSnackbar,
  VSpacer,
  VTextField
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VTextField,
    VProgressLinear,
    VSnackbar,
    VLayout,
    VDialog,
    VCard,
    VCardTitle,
    VCardActions,
    VSpacer,
    VBtn
  }
})
