<script>
import { ref, watch } from '@vue/composition-api';
import { useState } from '@u3u/vue-hooks';

export default {
  setup() {
    const firstName = ref('');
    const { loading } = useState('user', { loading: state => state.loading});
     watch(loading, (newVal, oldVal) => {
      if (!newVal && oldVal) {
        // once this is triggered, the v-model is no longer bound
        firstName.value = 'Some Value';
      }
    });
    return {
      firstName,
    };
  },
};
</script>

<template>
  <div>
      <v-text-field v-model="firstName" type="text" />
      <!-- Works before the watcher finishes, then gets stuck on 'Some Value' -->
      {{ firstName }}
  </div>
</template>