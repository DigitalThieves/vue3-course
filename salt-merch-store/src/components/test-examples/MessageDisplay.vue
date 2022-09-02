<template>
  <div>
    <p
      v-if="error"
      data-testid="message-error"
    >
      {{ error }}
    </p>
    <p
      v-else
      data-testid="message"
    >
      {{ message.text }}
    </p>
  </div>
</template>

<script>
import client from '@/services/api-client.js'

export default {
  data() {
    return {
      message: {},
      error: null
    }
  },

  async created() {
    try {
      this.message = await client.getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  }
}
</script>