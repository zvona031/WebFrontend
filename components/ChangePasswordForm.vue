<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.oldPassword"
      label="Old password"
      :type="showOldPassword ? 'text' : 'password'"
      :append-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('old password')]"
      @click:append="showOldPassword = !showOldPassword"
    />

    <v-text-field
      v-model="userInfo.newPassword"
      label="New password"
      :type="showNewPassword ? 'text' : 'password'"
      :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'),minLenght('password', 6)]"
      @click:append="showNewPassword = !showNewPassword"
    />

    <v-text-field
      v-model="userInfo.repeatNewPassword"
      label="Repeat new password"
      :type="showRepeatPassword ? 'text' : 'password'"
      :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'),minLenght('password', 6),passwordMatch(userInfo.newPassword,userInfo.repeatNewPassword)]"
      @click:append="showRepeatPassword = !showRepeatPassword"
    />

    <v-btn :disabled="!valid" @click="submitForm(userInfo)">
      {{ buttonText }}
    </v-btn>
  </v-form>
</template>
<script>
import validations from '@/utils/validations'

export default {
  props: {
    submitForm: {
      type: Function,
      default: () => {}
    },
    buttonText: {
      type: String,
      default: 'Change password'
    }
  },
  data () {
    return {
      valid: false,
      showOldPassword: false,
      showNewPassword: false,
      showRepeatPassword: false,
      userInfo: {
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: ''
      },
      ...validations
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
