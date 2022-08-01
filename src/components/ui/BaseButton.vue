<template>
    <div class="base-btn" type="button">
        {{ cta }}
    </div>
</template>

<script>
export default {
    props: {
        cta: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.base-btn {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding-top: 8px;
    padding-left: 16px;
    padding-bottom: 8px;
    padding-right: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
    width: 100%;

    text-transform: uppercase;
    color: white;
    background-color: #6495ed;
}
</style>
