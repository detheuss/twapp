<template>
    <div class="top-bar">
        <button
            class="btn side-menu-toggle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#side-menu"
            aria-controls="side-menu"
        >
            <i class="bi bi-list"></i>
        </button>
        <div>
            <router-link to="/">
                <h1>Twapp</h1>
            </router-link>
        </div>
    </div>

    <div class="offcanvas offcanvas-start" id="side-menu" aria-labelledby="side-menu-label">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="side-menu-label">Twapp</h5>
            <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>
        </div>
        <div class="offcanvas-body">
            <router-link to="/">
                <div class="side-menu-item" data-bs-toggle="offcanvas">Home</div>
            </router-link>
            <router-link to="/charge-notes">
                <div class="side-menu-item" data-bs-toggle="offcanvas">Charge notes</div>
            </router-link>
            <div class="side-menu-item">Challenges</div>
            <div class="side-menu-item">Check-in history</div>
        </div>
    </div>
</template>

<style scoped>
button.side-menu-toggle {
    color: black;
    font-size: 30px;
    border: none;
}
div.side-menu-item {
    padding: 20px;
}

.top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px;
}

.top-bar div {
    flex: 1;
}
</style>
