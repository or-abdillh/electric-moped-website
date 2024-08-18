<template>
    <section class="grid grid-cols-3 gap-6">
        <!-- left -->
        <section class="col-span-2">
            <div class="flex gap-4 items-center">
                <h1
                    ref="firstTyped"
                    class="xl:text-[6rem] font-semibold text-accent dark:text-primary inline-flex items-center xl:gap-6"
                ></h1>
                <div v-show="isShowDecoration" class="flex">
                    <!-- saturn -->
                    <div
                        class="h-[50px] w-[80px] -rotate-[55deg] bg-white rounded-[100%] grid place-items-center"
                    >
                        <img
                            src="/images/saturn.png"
                            alt="pngegg"
                            class="w-10 rotate-[24deg]"
                        />
                    </div>

                    <!-- lighting -->
                    <div
                        class="h-[50px] w-[80px] -rotate-[55deg] bg-accent rounded-[100%] grid place-items-center -translate-x-3"
                    >
                        <BoltIcon class="w-10 text-yellow-600 rotate-45" />
                    </div>
                </div>
            </div>
            <h1
                ref="secondTyped"
                class="xl:text-[6rem] font-semibold text-accent dark:text-primary"
            ></h1>
        </section>

        <!-- right -->
        <section
            class="col-span-1 flex justify-end items-end xl:pb-12 animate__animated animate__slow animate__slideInRight"
        >
            <div>
                <!-- peoples -->
                <div class="mb-3 flex">
                    <span
                        class="block w-12 h-12 rounded-full bg-center bg-cover bg-no-repeat bg-[url('/images/samuel-raita-RiDxDgHg7pw-unsplash.jpg')]"
                    ></span>
                    <span
                        class="block w-12 h-12 rounded-full bg-center bg-cover bg-no-repeat bg-[url('/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg')] -translate-x-4"
                    ></span>
                    <span
                        class="block w-12 h-12 rounded-full bg-center bg-cover bg-no-repeat bg-[url('/images/unsplash.jpg')] -translate-x-8"
                    ></span>
                    <span
                        class="w-12 h-12 rounded-full bg-gray-100 bg-opacity-10 backdrop-blur grid place-items-center -translate-x-12"
                    >
                        <PlusIcon class="w-8 text-accent dark:text-primary" />
                    </span>
                </div>
                <p class="text-accent dark:text-primary xl:text-lg">
                    10k+ positive reviews we
                    <br />
                    achieved
                    <span class="inline-flex items-center gap-1">
                        <template v-for="star in 4" :key="star">
                            <StarIcon class="w-5 text-yellow-600 mt-1" />
                        </template>
                    </span>
                </p>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { StarIcon, PlusIcon, BoltIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted } from "vue";
import Typed from "typed.js";

// refs
const firstTyped = ref<HTMLParagraphElement>();
const secondTyped = ref<HTMLParagraphElement>();
const isShowDecoration = ref<boolean>(false);

// mounted
onMounted(() => {
    if (firstTyped.value && secondTyped.value) {
        new Typed(firstTyped.value, {
            strings: [
                `Super fast
                `,
            ],
            typeSpeed: 100,
            startDelay: 100,
            showCursor: false,
            onComplete() {
                // show decoration
                isShowDecoration.value = true;

                new Typed(secondTyped.value, {
                    strings: [`electric Moped`],
                    typeSpeed: 50,
                    showCursor: false,
                });
            },
        });
    }
});
</script>
