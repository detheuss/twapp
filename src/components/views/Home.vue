<template>
    <charge-widget :challenges="challenges"></charge-widget>
    <running-widget :total-distance="totalDistance"></running-widget>
    <today-widget :routines="routines"></today-widget>
</template>

<script>
import ChargeWidget from "../widgets/ChargeWidget.vue";
import RunningWidget from "../../components/widgets/RunningWidget.vue";
import TodayWidget from "../../components/widgets/TodayWidget";
import { challenges, totalDistance, routines } from "../../dummyData.js";
export default {
    data() {
        return {
            challenges: challenges,
            totalDistance: totalDistance,
            routines: routines,
        };
    },
    components: {
        ChargeWidget,
        RunningWidget,
        TodayWidget,
    },
};
</script>
