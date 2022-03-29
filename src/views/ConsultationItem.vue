<template>
  <div id="ConsultationItem">
    <h2>{{ consultation.date }}</h2>
    <p>{{ consultation.patient }}</p>
  </div>
</template>

<script>
export default {
  props: {
    consultation: Object,
  },
};
</script>

<style scoped>

</style>