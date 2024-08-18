<template>
    <nav class="sticky top-0 left-0 right-0 bg-primary dark:bg-accent z-50">
        <!-- container -->
        <main
            class="flex justify-between items-center xl:gap-12 xl:px-12 xl:py-8"
        >
            <!-- left -->
            <section
                class="animate__animated animate__slow animate__slideInLeft flex items-center xl:gap-20"
            >
                <!-- icon: search bar -->
                <div
                    class="h-12 w-12 rounded-full bg-accent dark:bg-primary grid place-items-center"
                >
                    <MagnifyingGlassIcon
                        class="w-6 text-primary dark:text-accent"
                    />
                </div>

                <!-- link  -->
                <div class="flex justify-between items-center xl:gap-12">
                    <template v-for="link in links" :key="link">
                        <a
                            class="xl:text-lg font-medium text-accent dark:text-primary hover:text-gray-600 duration-200"
                            href="/"
                            >{{ link }}</a
                        >
                    </template>
                </div>
            </section>

            <!-- center -->
            <section
                class="animate__animated animate__slow 2s animate__slideInDown"
            >
                <p
                    class="text-accent dark:text-primary xl:text-3xl font-semibold"
                >
                    Skot.
                </p>
            </section>

            <!-- right -->
            <section
                class="flex items-center xl:gap-6 animate__animated animate__slow 2s animate__slideInRight"
            >
                <!-- dark mode -->
                <DarkModeToggler />

                <div class="flex gap-2 items-center">
                    <!-- contact us -->
                    <div
                        class="px-4 text-accent py-2 rounded-full xl:text-lg bg-white font-medium"
                    >
                        Contact Us
                    </div>

                    <!-- icon: phone arrow down left -->
                    <div
                        class="h-12 w-12 rounded-full bg-white grid place-items-center"
                    >
                        <PhoneArrowDownLeftIcon class="w-6 text-accent" />
                    </div>
                </div>

                <!-- cart -->
                <div
                    class="flex items-center justify-between xl:ps-5 pe-2 gap-3 text-accent py-2 rounded-full xl:text-lg bg-white font-medium"
                >
                    Cart

                    <!-- icon: shopping bag -->
                    <div
                        class="h-12 w-12 rounded-full bg-accent grid place-items-center"
                    >
                        <ShoppingBagIcon class="w-6 text-primary" />
                    </div>
                </div>
            </section>
        </main>
    </nav>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import {
    PhoneArrowDownLeftIcon,
    ShoppingBagIcon,
} from "@heroicons/vue/24/outline";
import DarkModeToggler from "@components/DarkModeToggler.vue";

// dummies
const links: string[] = ["About", "Collections", "Services", "Options"];
</script>
