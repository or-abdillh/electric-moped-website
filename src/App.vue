<template>
    <Navbar />

    <!-- main section -->
    <main class="xl:px-12 xl:py-2">
        <!-- Copy Writers -->
        <CopyWriters />

        <!-- Jumbotron -->
        <Jumbotron />
    </main>
</template>

<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import CopyWriters from "@components/CopyWriters.vue";
import Jumbotron from "@components/Jumbotron.vue";
</script>
