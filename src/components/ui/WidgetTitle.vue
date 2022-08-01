<template>
    <div class="divider-wrapper">
        <div class="divider-line" />
        <div class="divider-heading">{{ title }}</div>
        <div class="divider-line" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.divider-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    padding-top: 8px;
}

.divider-wrapper div {
    flex: 0.33;
}

.divider-line {
    border-top: 1px solid #dedede;
}

.divider-heading {
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding-left: 16px;
    padding-right: 16px;
}
</style>
