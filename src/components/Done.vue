<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex align-items-center justify-content-between"
        v-for="(el, i) in todos"
        :key="'todo-' + i"
      >
        <div class="form-check">
          <label class="form-check-label" for="flexCheckDefault">
            {{ el }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    return reactive({
      todos: computed(() => store.state.dones)
    })
  }
})
</script>

<style scoped></style>
