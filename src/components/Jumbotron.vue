<style scoped>
/* remove ruler at scrollbar element */
.no__ruler::-webkit-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
</style>

<template>
    <main
        class="grid grid-cols-6 animate__animated animate__slow 2s animate__slideInUp"
    >
        <!-- shadow corner top -->
        <div
            class="col-start-5 col-span-1 p-8 bg-primary dark:bg-accent rounded-br-3xl translate-x-4 z-10"
        ></div>

        <!-- corner top -->
        <div
            class="col-span-1 p-8 bg-gray-smoke rounded-tl-3xl rounded-tr-3xl relative"
        >
            <div
                class="absolute top-0 left-4 w-5 h-10 bottom-0 bg-primary dark:bg-accent z-10"
            >
                <div class="w-5 h-10 bg-gray-smoke rounded-tl-3xl"></div>
            </div>
        </div>
        <!-- outer left -->
        <section class="col-span-1">
            <!-- half -->
            <div
                class="w-full h-64 bg-gray-smoke rounded-tl-3xl rounded-bl-3xl"
            ></div>

            <!-- line -->
            <div class="w-full flex justify-end">
                <span class="w-6/12 block bg-gray-smoke h-5"></span>
            </div>

            <!-- copywriter -->
            <div
                class="w-full xl:p-10 bg-primary dark:bg-accent rounded-tr-3xl relative -translate-y-5"
            >
                <h1
                    class="animate__animated animate__slow animate__delay-1s animate__slideInLeft xl:text-6xl mb-3 dark:text-primary"
                >
                    C45
                </h1>
                <p
                    class="animate__animated animate__slow animate__delay-1s animate__slideInLeft text-gray-600 dark:text-gray-300 mb-8"
                >
                    Classic Model
                </p>

                <p
                    class="animate__animated animate__slow animate__delay-1s animate__slideInLeft text-accent dark:text-primary xl:text-lg"
                >
                    Officially the UK's No.1 selling moped.
                    <span class="underline">This 50cc</span> Panther moped is
                    agile and ready to strike
                </p>
            </div>
        </section>

        <!-- inner center  -->
        <section
            class="col-span-5 relative bg-gray-smoke rounded-br-3xl rounded-bl-3xl"
        >
            <!-- scooter  -->
            <img
                src="/images/scooter.png"
                alt="scooter"
                class="animate__animated animate__slow animate__slideInUp animate__delay-1s w-11/12 absolute bottom-0 -left-32 z-20"
            />

            <!-- slide -->
            <section class="absolute right-12 bottom-32">
                <div
                    class="w-80 animate__animated animate__slow animate__slideInUp animate__delay-1s bg-white dark:bg-accent rounded-2xl px-3 py-4 flex items-center justify-evenly gap-3"
                >
                    <div
                        class="bg-gradient-to-b from-gray-50 dark:from-gray-700 to-gray-200 dark:to-gray-900 rounded-2xl w-4/12"
                    >
                        <img src="/images/black-vespa.png" alt="scooter" />
                    </div>
                    <div class="w-7/12">
                        <p
                            class="font-medium text-accent dark:text-primary mb-1"
                        >
                            D5BQDT
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">
                            Panther Moped
                        </p>
                    </div>
                </div>
            </section>
        </section>
    </main>
</template>
