<template>
    <navbar />
    <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    name: "App",
    components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Saira&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
html,
body {
    font-family: "Saira", sans-serif !important;
}

a {
    text-decoration: none !important;
    color: black !important;
}
</style>
