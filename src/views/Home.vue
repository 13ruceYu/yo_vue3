<template>
  <div class="home">
    <div class="container mb-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <div class="logo"></div>
            <span>TodoList</span>
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link" href="#" to="/add">待办事项</router-link>
              <router-link class="nav-link" href="#" to="/done">已完成</router-link>
              <router-link class="nav-link" href="#" to="/delete">已删除</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {}
})
</script>

<style lang="scss" scoped>
.home {
  .container {
    nav {
      .navbar-brand {
        .logo {
          background: url('~@/assets/logo.png') no-repeat center center;
          background-size: contain;
          width: 40px;
          height: 40px;
        }
      }
      .navbar-nav {
        .active {
          color: pink;
        }
      }
    }
  }
}
</style>
