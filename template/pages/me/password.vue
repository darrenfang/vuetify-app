<template>
  <v-layout row justify-center>
    <v-card width="90%" style="max-width: 600px;" class="mt-4">
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form">
            <v-flex xs12>
              <v-text-field
                name="oldPassword"
                v-model="form.oldPassword"
                :append-icon="visibility ? 'visibility' : 'visibility_off'"
                @click:append="() => (this.visibility = !visibility)"
                :type="visibility ? 'text' : 'password'"
                label="原始密码"
                hint="最少8个字符"
                :error-messages="errors.collect('oldPassword')"
                v-validate="'required'"
                data-vv-name="oldPassword"
                :disabled="updating"
                counter="32">
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                name="newPassword"
                v-model="form.newPassword"
                :append-icon="visibility ? 'visibility' : 'visibility_off'"
                @click:append="() => (this.visibility = !visibility)"
                :type="visibility ? 'text' : 'password'"
                label="新密码"
                hint="最少8个字符"
                :error-messages="errors.collect('newPassword')"
                v-validate="'required|min:8'"
                data-vv-name="newPassword"
                :disabled="updating"
                ref="newPassword"
                counter="32">
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                name="confirmPassword"
                v-model="form.confirmPassword"
                :append-icon="visibility ? 'visibility' : 'visibility_off'"
                @click:append="() => (this.visibility = !visibility)"
                :type="visibility ? 'text' : 'password'"
                label="确认密码"
                hint="最少8个字符"
                :error-messages="errors.collect('confirmPassword')"
                v-validate="'required|min:8|confirmed:newPassword'"
                data-vv-name="confirmPassword"
                data-vv-as="newPassword"
                :disabled="updating"
                counter="32">
              </v-text-field>
            </v-flex>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" :loading="updating" @click="submitHandler"
               style="margin-left: 20px;">
          更新密码
        </v-btn>
        <v-btn @click="clearHandler" :disabled="updating">重置</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    metaInfo: {
      title: '修改密码'
    },
    $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
      visibility: false,
      updating: false,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }),
    methods: {
      submitHandler () {
        this.$validator.validateAll()
          .then(result => {
            if (result) {
              this.showConfirmBox({
                title: '确认更新密码？',
                ok: () => {
                  this.updating = true
                  this.updatePassword(this.form)
                    .finally(() => {
                      this.updating = false
                    })
                }
              })
            }
          })
      },
      clearHandler () {
        this.$validator.reset()
        this.$refs.form.reset()
      },
      ...mapActions({
        showConfirmBox: 'showConfirmBox',
        showMessage: 'showMessage',
        updatePassword: 'me/updatePassword'
      })
    }
  }
</script>
