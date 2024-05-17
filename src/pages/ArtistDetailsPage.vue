<template>
    <IonPage class="p-4">
        <IonContent>
            <div class="flex flex-row items-center px-4">
                <IonAvatar class="w-20 h-auto">
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
            <IonCard class="bg-transparent m-0">
                <IonCardHeader>
                    <IonCardTitle class="text-2xl">9000 <span class="text-lg font-medium pl-4">Monthly
                            Listeners</span></IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat alias dolorum maxime dicta
                    repudiandae atque laudantium? Praesentium officia alias corporis enim ipsa dolor voluptatum eius
                    dicta veritatis asperiores repudiandae consequatur ipsam, quas eos laboriosam natus rerum? Aliquam
                    illo quasi assumenda.
                </IonCardContent>
            </IonCard>

            <!-- disco -->
            <IonCard class="bg-transparent m-0">
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
                                <img  class="h-20" alt="Silhouette of a person's head"
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
                                <img  class="h-20" alt="Silhouette of a person's head"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg" />

                                <div class="flex flex-col ml-4">
                                    <span class="font-bold">Mom Bebe</span>
                                    <span class="text-xs">Maitre Gims ft Koba Lad, Dadju & Ya Levis</span>
                                </div>
                            </IonItem>
                        </IonList>
                    </div>

                </ion-card-content>
            </IonCard>

            <!-- recomended -->
            <IonCard class="bg-transparent">
                <IonList class="flex flex-row flex-nowrap">
                    <IonItem>
                        <IonAvatar class="w-20 h-20">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonItem>

                    <IonItem>
                        <IonAvatar class="w-20 h-auto">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonItem>

                    <IonItem>
                        <IonAvatar class="w-20 h-auto">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonItem>

                    <!-- <IonItem>
                        <IonAvatar class="w-20 h-auto">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonItem>

                    <IonItem>
                        <IonAvatar class="w-20 h-auto">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonItem> -->
                </IonList>
            </IonCard>
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonContent, IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonList, IonItem } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue'
</script>