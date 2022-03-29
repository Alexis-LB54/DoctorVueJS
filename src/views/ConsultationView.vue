<template>
  <div>
    <div class="Consultation">
      <h1>Mes Consultation</h1>
    </div>
    <div
      v-for="consultation in consultations"
      :key="consultation.id"
      id="OneConsultation"
    >
      <ConsultationItem :consultation="consultation" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import ConsultationItem from "./ConsultationItem.vue";
import { ConsultationStore } from "../stores/consultation";

const consultations = ref([]);

async function fetchConsultation() {
  let response = await fetch(
    "https://apidoctor.quidam.re/api/consultations",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  )
    .then((r) => r.json())
    .catch();
  console.log(response);
  if (response instanceof Object) {
    console.log(response["hydra:member"]);
    consultations.value = response["hydra:member"];
    console.log("coucou");
  }
}

onMounted(() => {
  fetchConsultation();
});

</script>

<style scoped>
</style>
