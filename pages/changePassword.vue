<template>
  <v-container>
    <h1> Change password page</h1>
    <ChangePasswordForm button-text="Change password" :submit-form="changePassword" />
  </v-container>
</template>

<script>
import env from '@/nuxt.config'
import ChangePasswordForm from '@/components/ChangePasswordForm'
export default {
  components: {
    ChangePasswordForm
  },
  methods: {
    async changePassword (userInfo) {
      const userID = this.$auth.user.id
      try {
        const res = await this.$axios.$patch(env.axios.baseURL + 'auth/password/changePassword', {
          password: userInfo.oldPassword,
          newPassword: userInfo.newPassword,
          id: userID
        })
        if (res.success) {
          alert('Changed password successfully!')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
