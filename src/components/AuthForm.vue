<template>
  <div class="auth-form">
    <h1 v-if="isAuth">Iniciar Sesión</h1>
    <h1 v-else>Registrarse</h1>
    <form @submit.prevent="submitForm">
      <input v-model="user.email" type="email" placeholder="Email" required />
      <input v-model="user.password" type="password" placeholder="Contraseña" required />
      <input v-if="!isAuth" v-model="user.confirmPassword" type="password" placeholder="Confirmar contraseña" required />
      <button type="submit">{{ isAuth ? "Iniciar Sesión" : "Registrarse" }}</button>
    </form>
    <p>
      <span>{{ isAuth ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? " }}</span>
      <RouterLink :to="isAuth ? '/signup' : '/login'">{{ isAuth ? "Registrarse" : "Iniciar Sesión" }}</RouterLink>
    </p>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "AuthForm",
  props: {
    isAuth: Boolean,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.user);
    },
  },
};
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 380px;
  max-height: 350px;
  margin: auto;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  outline: none;
}

button {
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #00FF9C;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #15B392;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.98);
}

p {
  font-size: 0.9rem;
  color: #555;
}

p span {
  color: #000;
}

RouterLink {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

RouterLink:hover {
  color: #0056b3;
}
</style>

