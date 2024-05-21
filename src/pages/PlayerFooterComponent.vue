<template>
        <div class="flex flex-row p-2 bg-neutral-900 items-center gap-4 px-4">
            <!-- thumbnail -->
            <div>
                <img src="../thumbnail.jpg" alt="MHD" class="h-16 rounded-lg">
            </div>

            <!-- name and artists -->
            <div class="flex flex-col items-start justify-center grow">
                <span class="text-xl font-bold">Tu Maimes</span>
                <span class="text-s font-extralight">Dadju ft Koba Lad</span>
            </div>

            <!-- actions -->
            <BackwardIcon class="h-8" />
            <PauseIcon class="h-8" />
            <ForwardIcon class="h-8" />
        </div>
</template>

<style scoped>
img {
    @apply aspect-square
}
</style>

<script setup>
import { IonPage } from '@ionic/vue';
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from '@heroicons/vue/24/solid';
</script>