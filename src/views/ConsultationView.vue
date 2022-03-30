<template>
    <div v-for="consult in consultationsStore.consultations" :key="consult['@id']">
        <h5>{{ consult.doctor_name }}</h5>
        <p>date : {{ consult.date }}</p>
        <router-link
          :to="{ name: 'ShowConsult', params: { id: consult.id } }"
        >
          <button class="btn btn-primary">Voir LA consultation</button>
        </router-link>
      </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ConsultationStore } from "../stores/consultation";
import fetchConsultation from "../plugins/fetch";
import { useUserStore } from "../stores/token";
import { fetchConsults } from "../plugins/fetch";

const consultationsStore = ConsultationStore();
const userStore = useUserStore();

onMounted(() => {
  console.log("coucou");
  fetchConsults(userStore.token).then((consultDatas) => {
    consultationsStore.consultations = consultDatas["hydra:member"];
  });
});
</script>

<style scoped>
</style>
