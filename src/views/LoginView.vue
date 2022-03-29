<template>
  <div>
    <Login @form-submit="FormSubmit" />
  </div>
</template>

<script setup>
import Login from "../components/forms/Login.vue";
import { ref } from "@vue/reactivity";
import fetchLogin from "../plugins/fetch";

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
const FormSubmit = () => {
  fetchLogin(user.value);
};
</script>


<style scoped>
</style>