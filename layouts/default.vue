<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-icon
        v-if="$auth.loggedIn"
        large
        @click="addTask"
      >
        mdi-plus
      </v-icon>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              {{ $auth.user.email }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="handleChangePassword"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text @click="handleLogout">
          Logout
        </v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">
          Login
        </v-btn>
        <v-btn text to="/register">
          Register
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Change password'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    async handleLogout () {
      await this.$auth.logout()
      this.$router.push('/login')
    },
    handleChangePassword () {
      this.$router.push('/changePassword')
    },
    addTask () {
      this.$router.push('/addTask')
    }
  }
}
</script>
