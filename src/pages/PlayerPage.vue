<template>
    <IonPage>
        <IonContent>
            <!-- header -->
            <div class="flex flex-row justify-between py-6 px-6 text-xl font-bold">
                <ChevronDownIcon class="h-6 w-6 text-white" />
                <div>Now Playing</div>
                <ListBulletIcon class="h-6 w-6 text-white" />
            </div>

            <!-- Thumbnail -->
            <div class="flex flex-row justify-center items-center px-8 mb-8">
                <img src="../thumbnail.jpg"
                    alt="" class="rounded-2xl h-full w-full aspect-square">
            </div>

            <!-- Actions -->
            <div class="flex flex-row justify-between items-center px-8">
                <ArrowsRightLeftIcon class=" h-6" />
                <div class="flex flex-col justify-center items-center">
                    <span class="font-bold text-xl">J'me Tire</span>
                    <span>Gims</span>
                </div>
                <ArrowPathRoundedSquareIcon class="h-6" />
            </div>

            <!-- slider -->
            <div class="px-8 my-4">
                <IonRange aria-label="Music"></IonRange>
            </div>

            <!-- Press Play -->
            <div class="flex flex-row justify-center py-2 px-6 text-xl font-bold items-center gap-1">
                <BackwardIcon class=" h-10" />
                <div @click="pause = !pause">
                    <PauseCircleIcon class="h-20" v-if="pause" />
                    <PlayCircleIcon class="h-20" v-else />
                </div>

                <ForwardIcon class=" h-10" />
            </div>
        </IonContent>


    </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonContent, IonRange } from '@ionic/vue';
import { ChevronDownIcon, ListBulletIcon, PlayCircleIcon, PauseCircleIcon, ForwardIcon, BackwardIcon, ArrowsRightLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";

const pause = ref(false);

</script>