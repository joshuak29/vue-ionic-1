<template>
    <IonPage class="pt-4 no-scrollbar">
        <IonContent class="">
            <div class="flex flex-row items-center px-4 mb-8">
                <IonAvatar class="w-28 h-auto ">
                    <img alt="Silhouette of a person's head" src="../thumbnail.jpg" />
                </IonAvatar>


                <!-- name & genre -->
                <div class="flex-grow px-10">
                    <span class="font-bold">Maitre Gims</span><br>
                    <span class="font-thin text-sm">Rap,HipHop</span>
                </div>
            </div>

            <!-- about -->
            <div class="bg-transparent m-0">
                <IonCardHeader>
                    <IonCardTitle class="text-2xl">9000 <span class="text-sm text-black/50 font-medium">Monthly
                            Listeners</span></IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat alias dolorum maxime dicta
                    repudiandae atque laudantium? Praesentium officia alias corporis enim ipsa dolor voluptatum eius
                    dicta veritatis asperiores repudiandae consequatur ipsam, quas eos laboriosam natus rerum? Aliquam
                    illo quasi assumenda.
                </IonCardContent>
            </div>

            <!-- disco -->
            <div class="bg-transparent m-0">
                <IonCardHeader>
                    <IonCardTitle class="text-2xl text-center">Discography</IonCardTitle>
                </IonCardHeader>

                <ion-card-content>
                    <!-- albums -->
                    <div class="mb-6">
                        <div class="font-semibold flex flex-row flex-nowrap items-end justify-between">
                            <span>Albums</span> <span class="text-xs font-extrabold text-blue-800">See all</span>
                        </div>
                        <IonList>
                            <!-- album item -->
                            <AlbumItem v-for="i in 3" :key="i"/>
                        </IonList>
                    </div>

                    <!-- songs -->
                    <div>
                        <div class="font-semibold flex flex-row flex-nowrap items-end justify-between">
                            <span>Songs</span> <span class="text-xs font-extrabold text-blue-800">See all</span>
                        </div>
                        <IonList>
                            <!-- song item -->
                            <SongItem v-for="item in 3" :key="item"/>
                        </IonList>
                    </div>

                </ion-card-content>
            </div>

            <!-- recomended -->
            <div class="bg-transparent mt-8">
                <IonCardHeader>
                    <IonCardTitle class="text-lg">Recommended for you</IonCardTitle>
                </IonCardHeader>
                <div class="scroll flex flex-row flex-nowrap gap-4 overflow-x-auto overflow-y-hidden no-scrollbar text-center mx-4"
                    :scrollable="true">
                    <div v-for="i in 10" :key="i" class="flex flex-col gap-2">
                        <IonAvatar class="w-24 h-auto">
                            <img alt="Silhouette of a person's head" src="../thumbnail.jpg" />
                        </IonAvatar>
                        <span class="font-bold">MHD</span>
                    </div>
                </div>
            </div>
        </IonContent>
        <IonFooter>
            <PlayerFooterComponent />
        </IonFooter>
    </IonPage>
</template>

<script setup>
import { IonPage, IonContent, IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonList, IonItem, IonFooter } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue'

import PlayerFooterComponent from '@/pages/PlayerFooterComponent.vue'
import SongItem from '@/components/SongItem.vue'
import AlbumItem from '@/components/AlbumItem.vue'
const thumbnail = "../thumbnail.jpg"

</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

img {
    @apply aspect-square
}

IonAvatar {
    @apply shadow-md shadow-white
}
</style>
