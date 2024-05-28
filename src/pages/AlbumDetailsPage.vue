<template>
    <IonPage>
        <IonContent>
            <!-- header -->
            <div class="flex flex-row justify-between py-6 px-6 text-xl font-bold">
                <ChevronLeftIcon class="h-6 w-6 text-white" @click="closePlayer" />
                <div>Album</div>
                <EllipsisVerticalIcon class="h-6 w-6 text-white" @click="toQueue" />
            </div>


            <div class="flex flex-row items-center justify-center gap-4 mb-8">
                <!-- thumbnail -->
                <img class="w-1/2 aspect-square rounded-xl" src="../thumbnail.jpg" alt="thumbnail">

                <!-- details -->
                <div class="flex flex-col items-start justify-between">
                    <span class="font-extrabold text-2xl">Mom Bebe</span>
                    <span class="text-xl font-semibold mb-4">Maitre Gims</span>
                    <span class="font-semibold">2018<span
                            class="font-extralight text-xs text-white/50  mb-8 ml-2">HipHop/Rap</span></span>
                </div>
            </div>

            <div class="flex flex-row justify-between items-center px-4 mb-8">
                <div class="font-semibold flex flex-row gap-4">
                    <span>7 tracks</span>
                    <span>22 minutes</span>
                </div>

                <!-- actions -->
                <div class="flex flex-row items-center gap-2">
                    <PlayCircleIcon class="h-10" />
                    <ArrowsRightLeftIcon class="h-6" />
                </div>
            </div>

            <!-- tracks -->
            <IonList>
                <SongItem v-for="i in 7" :key="i" />
            </IonList>
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonContent, IonCard, IonList } from '@ionic/vue';
import { ChevronLeftIcon, EllipsisVerticalIcon, PlayCircleIcon, ArrowsRightLeftIcon } from '@heroicons/vue/24/solid';

import SongItem from "@/components/SongItem.vue";
</script>

<style></style>