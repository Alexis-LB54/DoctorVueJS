
<template>
  <div>
        <h5>{{ consultation.doctor_name }}</h5>
        <p>date : {{ consultation.date }}</p>
  </div>
</template>

<script setup>
import { ConsultationStore } from "../stores/consultation";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

const consultation = ref({});
const route = useRoute();
const store = ConsultationStore();

onMounted(() => {
  consultation.value = store.consultations.find( (c) => String(c.id) === route.params.id);
});
</script>