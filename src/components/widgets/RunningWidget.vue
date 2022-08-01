<template>
    <widget>
        <widget-title title="running"></widget-title>
        <div class="widget-section">
            <div class="widget-section__info-text">
                ran {{ ranDistance }} / {{ totalDistance }} km
            </div>
            <div class="progress">
                <div
                    class="progress-bar"
                    :class="
                        leftDistancePercentage == 100
                            ? 'bg-success'
                            : 'running-progress-bar--pending'
                    "
                    role="progressbar"
                    :style="{ width: `${leftDistancePercentage}%` }"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
            <div class="widget-section__info-text">tap to log running</div>
        </div>
    </widget>
</template>

<script>
export default {
    props: {
        totalDistance: {
            type: Number,
            requireD: true,
        },
    },
    data() {
        return {
            ranDistance: 11,
        };
    },

    computed: {
        leftDistancePercentage() {
            if (!this.totalDistance) return 0;
            // avoid division by zero
            if (!this.ranDistance) return this.totalDistance;
            else return (this.ranDistance / this.totalDistance) * 100;
        },
    },
};
</script>

<style scoped>
.running-progress-bar--pending {
    background-color: #6495ed;
}
.running-progress-bar--full {
    background-color: #088f8f;
}
</style>
