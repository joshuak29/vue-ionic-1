<template>
    <IonPage>
        <IonContent>
            <!-- header -->
            <div class="flex flex-row justify-between py-6 px-6 text-xl font-bold">
                <ChevronDownIcon class="h-6 w-6 text-white" />
                <div>Now Playing</div>
                <ListBulletIcon class="h-6 w-6 text-white" />
            </div>

            <!-- Thumbzilla -->
            <div class="flex flex-row justify-center items-center px-8 mb-8">
                <img src="data:image/jpeg;base64,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"
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