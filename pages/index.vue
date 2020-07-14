<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div v-for="(task, i) in taskList" :key="i" class="mb-2">
      <v-card
        v-if="task.userId === $auth.user.id"
        class="mx-auto"
        width="400"
        outlined
      >
        <v-card-title>
          {{ task.title }}
        </v-card-title>
        <v-card-text>
          {{ task.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn text color="red" @click="deleteTask(task.id, i)">
            Delete
          </v-btn>
          <v-btn text color="primary" @click="editTask(task.id)">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
import axios from 'axios'
import env from '@/nuxt.config'
export default {
  components: {
  },
  async asyncData () {
    try {
      const res = await axios.get(env.axios.baseURL + 'task/getAll')
      // eslint-disable-next-line no-console
      const data = res.data
      return {
        taskList: data
      }
    } catch (e) {
      alert(e.message)
    }
  },
  created () {
    this.$nextTick(() => {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
      }
    })
  },
  methods: {
    async deleteTask (taskId, i) {
      if (!confirm('Are you sure you want to delete task?')) { return }
      const res = await axios.delete(env.axios.baseURL + 'task/delete/' + taskId)
      // eslint-disable-next-line no-console
      console.log(res.success)
      if (res.status === 200) {
        this.taskList.splice(i, 1)
        this.alert = true
      }
    },
    editTask (taskId) {
      this.$router.push('/addTask?mode=edit&id=' + taskId)
    },
    hideAlert () {
      window.setInterval(() => {
        this.alert = false
        // eslint-disable-next-line no-console
        console.log('hide alert after 3 seconds')
      }, 3000)
    }
  }
}
</script>
