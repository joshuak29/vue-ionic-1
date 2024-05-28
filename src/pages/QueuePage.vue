<template>
    <IonPage>
        <IonHeader>
            <!-- header -->
            <div class="flex flex-row justify-between py-6 px-6 text-xl font-bold">
                <ChevronLeftIcon class="h-6 w-6 text-white" @click="backToPlayer" />
                <div>Queue</div>
                <TrashIcon class="h-6 w-6 text-red-300" @click="clearQueue" />
            </div>
        </IonHeader>
        <IonContent>
            <div class="mx-2">
                <IonList>
                    <!-- song item -->
                    <SongItem v-for="i in 20" :key="i"/>
                </IonList>
            </div>
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import { ChevronLeftIcon, TrashIcon } from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';

import SongItem from "@/components/SongItem.vue"

const router = useRouter();

const backToPlayer = () => {
    router.go(-1)
}
</script>

<style></style>