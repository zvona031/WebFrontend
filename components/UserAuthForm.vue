<template>
  <v-form v-model="valid">
<v-text-field
      v-if="hasName == 'true'"
      v-model="userInfo.first_name"
      label="First name"
      :rules="[required('first name')]"
    />

    <v-text-field
      v-if="hasName == 'true'"
      v-model="userInfo.last_name"
      label="Last name"
      :rules="[required('last name')]"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'),emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'),minLenght('password', 6)]"
      @click:append="showPassword = !showPassword"
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
      default: 'Login'
    },
    hasName: {
      type: String,
      default: 'false'
    }
  },
  data () {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      ...validations
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
