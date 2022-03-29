import { defineStore } from "pinia";

export const ConsultationStore = defineStore ({
    id: "consultation",
    state:() => ({
        consultation: {},
        consultations: {},
    })
})