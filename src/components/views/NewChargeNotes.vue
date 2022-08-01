<template>
    <widget>
        <form :action="submit">
            <label for="charge-number" class="widget-section__info-text">charge no.</label>
            <input
                id="charge-number"
                type="number"
                class="widget-section"
                :value="chargeStats.chargeNumber"
            />

            <label for="sparrow" class="widget-section__info-text">sparrow</label>
            <input
                id="sparrow"
                type="text"
                class="widget-section"
                :value="chargeStats.sparrowName"
            />

            <label for="charge-notes" class="widget-section__info-text">notes.</label>
            <textarea
                name="charge-notes"
                id="charge-notes"
                cols="30"
                rows="10"
                class="widget-section"
                style="resize: none"
            ></textarea>

            <label for="total-distance" class="widget-section__info-text">running (km)</label>
            <input id="total-distance" type="number" class="widget-section" value="0" />
        </form>
    </widget>
</template>

<script>
export default {
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
label {
    display: block;
    border: none;
}

textarea,
input {
    display: block;
    width: 100%;
    border: 1px solid #dedede;
    padding: 8px;
}
</style>
