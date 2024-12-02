<template>
  <div class="auth-container">
    <AuthForm :isAuth="true" @submit="login" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AuthForm from "../components/AuthForm.vue";

export default {
  components: {
    AuthForm,
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login(user) {
      try {
        await this.loginUser(user);
        this.$router.push("/");
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
      }
    },
  },
};
</script>


