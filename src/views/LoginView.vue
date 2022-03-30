<template>
  <!-- <div>
    <Login @form-submit="FormSubmit" />
  </div> -->
  
    <div>
    <form @submit.prevent="FormSubmit">

      <label for="username">username</label>
      <input type="text" v-model="user.username" id="username"/>

      <label for="password">password</label>
      <input type="password" v-model="user.password" id="password"/>

      <input type="submit" value="Se connecter" />
    </form>
  </div>
</template>

<script setup>
// import Login from "../components/forms/Login.vue";
import { ref } from "@vue/reactivity";
import fetchLogin from "../plugins/fetch";
import { useUserStore } from "../stores/token"

// async function FormSubmit(user) {
//   let datas = {
//     username: user.username,
//     password: user.password,
//   };

//   console.log(datas);

//   let response = await fetch("https://apidoctor.quidam.re/api/login_check", {
//     method: "POST",
//     body: JSON.stringify(datas),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.setItem("token", "token")}`,
//     },
//   })
//     .then((r) => r.json())
//     .catch();

//   if (response.token && response.refresh_token) {
//     localStorage.setItem("token", response.token);
//     localStorage.setItem("refresh_token", response.refresh_token);

//     console.log(response);
//   }
// }

const user = ref({
  username: "",
  password: "",
});
const tokenStore = useUserStore();

const FormSubmit = () => {
  fetchLogin(user.value).then((response) => tokenStore.token = response.token);
  fetchLogin(user.value).then((response) => tokenStore.refresh_token = response.refresh_token);
};
</script>


<style scoped>
</style>