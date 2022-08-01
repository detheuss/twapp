<template>
    <widget>
        <widget-title title="today"></widget-title>
        <base-button
            cta="check-in"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >
        </base-button>
        <div
            class="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Check-in</h5>
                <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body small">
                <widget>
                    <widget-title :title="this.days[currentDate.getDay() - 1]"></widget-title>
                    <div>
                        {{ currentDate.getDay() }} / {{ currentDate.getMonth() + 1 }} /
                        {{ currentDate.getFullYear() }}
                    </div>

                    <div v-for="(routine, index) in routines" :key="index">
                        <base-button :cta="routine.name"> </base-button>
                    </div>
                </widget>
            </div>
        </div>
    </widget>
</template>

<script>
export default {
    computed: {
        currentDate() {
            let today = new Date();
            return today;
        },
    },
    props: {
        routines: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            days: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
        };
    },
};
</script>

<style scoped>
.offcanvas.offcanvas-bottom {
    height: fit-content !important;
}
</style>
