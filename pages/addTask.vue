<template>
  <v-container>
    <v-form v-model="valid">
      <v-text-field
        v-model="taskInfo.title"
        label="Task title"
        :rules="[required('task title')]"
      />

      <v-textarea
        v-model="taskInfo.description"
        no-resize="true"
        outlined="true"
        label="Description"
        :rules="[required('description')]"
      />
      <v-btn
        v-if="mode === 'edit'"
        :disabled="!valid"
        @click="editTask"
      >
        Edit task
      </v-btn>
      <v-btn
        v-if="mode != 'edit'"
        :disabled="!valid"
        @click="createTask"
      >
        Create task
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import env from '@/nuxt.config'
import validations from '@/utils/validations'
export default {
  components: {
  },
  data () {
    return {
      mode: '',
      taskId: '',
      valid: false,
      taskInfo: {
        title: '',
        description: ''
      },
      ...validations
    }
  },
  mounted () {
    this.mode = this.$route.query.mode
    this.taskId = this.$route.query.id
    if (this.mode === 'edit') {
      this.getTask()
    }
  },
  methods: {
    async createTask () {
      try {
        const res = await this.$axios.$post(env.axios.baseURL + 'task/create', {
          title: this.taskInfo.title,
          description: this.taskInfo.description,
          userId: this.$auth.user.id
        })
        if (res.success) {
          alert('Task created successfully')
          this.$router.push('/')
        }
      } catch (e) {
        alert(e.message)
      }
    },
    async editTask () {
      try {
        const res = await this.$axios.$patch(env.axios.baseURL + 'task/update/' + this.taskId, {
          title: this.taskInfo.title,
          description: this.taskInfo.description
        })
        if (res.success) {
          alert('Task edited successfully')
          this.$router.push('/')
        }
      } catch (e) {
        alert(e.message)
      }
    },
    async getTask () {
      try {
        const task = await this.$axios.$get(env.axios.baseURL + 'task/get/' + this.taskId)
        if (task.success) {
          // eslint-disable-next-line no-console
          console.log('Success')
          this.taskInfo.title = task.title
          this.taskInfo.description = task.description
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
