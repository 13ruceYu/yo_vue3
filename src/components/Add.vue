<template>
  <div>
    <div>
      <label for="addTodoInput" class="form-label">添加代办事项</label>
      <input
        v-model="inputValue"
        type="text"
        class="form-control"
        id="addTodoInput"
        @keydown.enter="addItem(inputValue)"
      />
      <div id="emailHelp" class="form-text">回车即可加入待办</div>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex align-items-center justify-content-between"
        v-for="(el, i) in todos"
        :key="'todo-' + i"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            @click.prevent="checkItem(i)"
          />
          <label class="form-check-label" for="flexCheckDefault">
            {{ el }}
          </label>
        </div>
        <div class="operations">
          <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(i)">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup () {
    const inputValue = ref('')

    const addItem = (value: string) => {
      if (value.trim() === '') return
      store.commit('add', value)
      inputValue.value = ''
    }

    const deleteItem = (index: number) => {
      store.commit('delete', index)
    }

    const checkItem = (index: number) => {
      store.commit('check', index)
    }

    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      addItem,
      deleteItem,
      checkItem
    })
  }
})
</script>

<style scoped></style>
