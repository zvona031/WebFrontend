<template>
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
      :disabled="!valid"
      @click="submitForm(taskInfo)"
    >
      {{ buttonText }} task
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
      default: 'Create'
    }
  },
  data () {
    return {
      valid: false,
      taskInfo: {
        title: '',
        description: ''
      },
      ...validations
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
