<template>
  <v-container>
    <UserAuthForm button-text="Login" :submit-form="loginUser" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm
  },
  methods: {
    async loginUser (userInfo) {
      try {
        const response = await this.$auth.loginWith('local', {
          data: userInfo
        })
        if (response.data.success) {
          this.$router.push('/')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
