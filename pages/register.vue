<template>
  <v-container>
    <UserAuthForm button-text="Register" :submit-form="registerUser" has-name="true" />
  </v-container>
</template>

<script>
import env from '@/nuxt.config'
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm
  },
  methods: {
    async registerUser (userInfo) {
      try {
        const res = await this.$axios.$post(env.axios.baseURL + 'auth/register', {
          first_name: userInfo.first_name,
          last_name: userInfo.last_name,
          email: userInfo.email,
          password: userInfo.password
        })
        if (res.success) {
          this.$router.push('/login')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
