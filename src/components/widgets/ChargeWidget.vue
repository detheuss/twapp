<template>
    <widget>
        <widget-title :title="`Charge ${chargeStats.chargeNumber}`" />
        <div class="widget-section">
            <span>
                <img
                    :src="require('../../assets/sparrow-icon.svg')"
                    alt="Sparrow"
                    class="sparrow-icon"
                />
                {{ chargeStats.sparrowName }}
            </span>
            <div class="widget-section__info-text">
                <span> view charge notes </span>
            </div>
        </div>
        <widget-title title="challenges" />
        <div class="widget-section" v-for="(challenge, index) in challenges" :key="index">
            <div class="challenge">
                <span>{{ challenge.name }}</span>
                <div class="widget-section__info-text">
                    <span
                        class="challenge-status"
                        :class="{
                            'challenge-status--is-active': !challenge.isFailed,
                            'challenge-status--is-failed': challenge.isFailed,
                        }"
                    >
                        {{ challenge.isFailed ? "failed" : "ongoing" }}
                    </span>
                </div>
                <div class="widget-section__info-text">
                    <span v-if="challenge.isFailed"> tap to view details </span>
                    <span v-else> tap to check in </span>
                </div>
            </div>
        </div>
    </widget>
</template>

<script>
export default {
    props: {
        challenges: {
            type: Array,
            required: true,
        },
    },
    computed: {
        chargeStats() {
            let chargeStats = {};
            let chargeNumber = null;

            // twaStartDate is May 1st - written as 2022, 4, 2
            // Months are numbered 0-11 in javascript!
            let twaStartDate = new Date(2022, 4, 2);
            let weekDiff = (new Date() - twaStartDate) / (7 * 24 * 60 * 60 * 1000);
            chargeNumber = Math.ceil(weekDiff);
            if (Number.isInteger(weekDiff)) chargeNumber++;

            let sparrowName = chargeNumber % 2 == 0 ? "Jakub" : "Rado";

            chargeStats.chargeNumber = chargeNumber;
            chargeStats.sparrowName = sparrowName;

            return chargeStats;
        },
    },
};
</script>

<style scoped>
@import "../_shared/_styles.css";


.challenge {
}
.challenge-status {
    border-radius: 12px;
    padding-top: 4px;
    padding-left: 8px;
    padding-bottom: 4px;
    padding-right: 8px;
}
.challenge-status--is-active {
    border: 1px solid lime;
}
.challenge-status--is-failed {
    border: 1px solid tomato;
}
.sparrow-icon {
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-right: 8px;
}
</style>
