<template>
    <IonPage class="py-4 no-scrollbar">
        <IonContent class="">
            <div class="flex flex-row items-center px-4 mb-8">
                <IonAvatar class="w-28 h-auto">
                    <img alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg" />
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
                    <div class="mb-6">
                        <div class="font-semibold flex flex-row flex-nowrap items-end justify-between">
                            <span>Albums</span> <span class="text-xs font-extrabold text-blue-800">See all</span>
                        </div>
                        <IonList>
                            <IonItem class="flex flex-row h-fit my-4" v-for="i in 3" :key="i">
                                <img class="h-24" alt="Silhouette of a person's head"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg" />

                                <div class="flex flex-col ml-4">
                                    <span class="font-bold">Mom Bebe</span>
                                    <span class="text-xs">2003</span>
                                </div>
                            </IonItem>
                        </IonList>
                    </div>

                    <div>
                        <div class="font-extrabold flex flex-row flex-nowrap items-end justify-between">
                            <span>Songs</span> <span class="text-xs font-extrabold text-blue-800">See all</span>
                        </div>
                        <IonList>

                            <IonItem class="flex flex-row justify-start h-fit my-4" v-for="i in 3" :key="i">
                                <img class="h-24" alt="Silhouette of a person's head"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg" />

                                <div class="flex flex-col ml-4">
                                    <span class="font-bold">Mom Bebe</span>
                                    <span class="text-xs">Maitre Gims ft Koba Lad, Dadju & Ya Levis</span>
                                </div>
                            </IonItem>
                        </IonList>
                    </div>

                </ion-card-content>
            </div>

            <!-- recomended -->
            <div class="bg-transparent mt-8">
                <IonCardHeader>
                    <IonCardTitle class="text-lg">Recommended for you</IonCardTitle>
                </IonCardHeader>
                <div class="scroll flex flex-row flex-nowrap gap-4 overflow-x-auto overflow-y-hidden no-scrollbar text-center mx-4" :scrollable="true">
                    <div v-for="i in 10" :key="i" class="flex flex-col gap-2">
                        <IonAvatar class="w-24 h-auto">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <span class="font-bold">MHD</span>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

</style>

<script setup>
import { IonPage, IonContent, IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonList, IonItem } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue'
</script>