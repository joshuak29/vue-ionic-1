<template>
    <IonPage>
        <IonContent>
            <!-- header -->
            <div class="flex flex-row justify-between py-6 px-6 text-xl font-bold">
                <ChevronDownIcon class="h-6 w-6 text-white" @click="closePlayer" />
                <div>Now Playing</div>
                <ListBulletIcon class="h-6 w-6 text-white" @click="toQueue" />
            </div>

            <!-- Thumbnail -->
            <div class="flex flex-row justify-center items-center px-8 mb-8">
                <img src="../thumbnail.jpg" alt="" class="rounded-2xl h-full w-full aspect-square">
            </div>

            <!-- Actions -->
            <div class="flex flex-row justify-between items-center px-12">
                <HeartIcon class=" h-6" />
                <div class="flex flex-col justify-center items-center">
                    <span class="font-bold text-xl">J'me Tire</span>
                    <span>Gims</span>
                </div>
                <ShareIcon class=" h-6" />
            </div>

            <!-- slider -->
            <div class="px-8 my-4">
                <IonRange aria-label="Music"></IonRange>
            </div>

            <!-- Press Play -->
            <div class="flex flex-row justify-between items-center gap-1 py-2 px-6 mb-12 text-xl font-bold">
                <ArrowsRightLeftIcon class=" h-6 pr-12" />
                <BackwardIcon class=" h-10" />
                <div @click="pause = !pause">
                    <PauseCircleIcon class="h-20" v-if="pause" />
                    <PlayCircleIcon class="h-20" v-else />
                </div>

                <ForwardIcon class=" h-10" />
                <ArrowPathRoundedSquareIcon class="h-6 pl-12" />
            </div>

            <!-- details -->
            <!-- <div class="flex flex-col text-sm mb-8 mx-4">
                <div><span class="font-semibold text-lg">Released:</span> 14 May 2020</div>
                <div><span class="font-semibold text-lg">Artists:</span> Maitre Gims, Ya Levis, Koba Lad, MHD</div>
                <div><span class="font-semibold text-lg">Plays:</span> 23099</div>
            </div> -->
        </IonContent>


    </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonContent, IonRange } from '@ionic/vue';
import { ChevronDownIcon, ListBulletIcon, PlayCircleIcon, PauseCircleIcon, ForwardIcon, BackwardIcon, ArrowsRightLeftIcon, ArrowPathRoundedSquareIcon, HeartIcon, ShareIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const closePlayer = () => {
    router.go(-1);
}

const toQueue = () => {
    router.push({ name: "Queue" })
}

const pause = ref(false);

</script>