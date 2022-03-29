<template>
  <div>
    <div class="Consultation">
      <h1>Mes Consultations</h1>
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
import fetchConsultation from "../plugins/fetch"
import { useUserStore } from "../stores/token";
import { fetchConsults } from "../plugins/fetch";

const consultationsStore = ConsultationStore();
const userStore = useUserStore();


onMounted(() => {
  fetchConsultation(userStore.token).then((consultDatas) => {
    consultationsStore.consultations = consultDatas["hydra:member"];
  });
});

</script>

<style scoped>
</style>
