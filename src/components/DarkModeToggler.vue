<style scoped>
/* animation for swipe toggler from left to right */
@keyframes animate__to__right {
    0% {
        left: 3%;
    }
    100% {
        left: 60%;
    }
}

/* animation for swipe toggler from right to left */
@keyframes animate__to__left {
    0% {
        left: 60%;
    }
    100% {
        left: 3%;
    }
}

/* class for apply animate to right */
.animate__to__right {
    animation: animate__to__right 0.3s forwards;
}

/* class for apply animate to left */
.animate__to__left {
    animation: animate__to__left 0.3s forwards;
}
</style>
<template>
    <button
        type="button"
        @click="toggleDarkMode"
        class="flex relative items-center rounded-full dark:bg-primary bg-accent px-1"
    >
        <!-- indicator -->
        <span
            :class="{
                animate__to__right: isDarkMode,
                animate__to__left: !isDarkMode,
            }"
            class="w-8 h-8 absolute dark:bg-accent bg-primary rounded-full"
        ></span>

        <!-- light -->
        <span
            type="button"
            class="w-10 h-10 grid place-items-center rounded-full p-2"
        >
            <SunIcon class="w-6 text-primary dark:text-accent" />
        </span>

        <!-- dark -->
        <span
            type="button"
            class="w-10 h-10 grid place-items-center rounded-full p-2"
        >
            <MoonIcon class="w-6 dark:text-accent text-primary" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

// refs
const isDarkMode = ref<boolean>(false);

// getters
const getDarkMode = computed<boolean>(() => {
    // parse local storage
    const darkMode = localStorage.getItem("darkMode");

    // if not exist, set loca storage to false
    if (!darkMode) {
        localStorage.setItem("darkMode", "false");
        return false;
    }

    // return dark mode
    return JSON.parse(darkMode) as boolean;
});

// action: togle dark mode
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    // set local storage
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode.value));

    // set dark mode
    isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
    // if dark mode is true, set dark mode
    if (getDarkMode.value) {
        isDarkMode.value = true;

        document.documentElement.classList.add("dark");
    }
});
</script>
