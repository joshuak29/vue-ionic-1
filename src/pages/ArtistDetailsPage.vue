<template>
    <IonPage class="p-4">
        <IonContent>
            <div class="flex flex-row items-center px-4">
                <IonAvatar class="w-24 h-auto">
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
                        <div class="font-semibold flex flex-row flex-nowrap items-end justify-between"><span>Albums</span>  <span class="text-xs font-extrabold text-blue-800">See all</span></div>
                        <IonList>
                            <IonItem></IonItem>
                            <IonItem></IonItem>
                            <IonItem></IonItem>
                            <IonItem></IonItem>
                        </IonList>
                    </div>

                    <div>
                        <div class="font-extrabold flex flex-row flex-nowrap items-end justify-between"><span>Songs</span>  <span class="text-xs font-extrabold text-blue-800">See all</span></div>
                        <IonList>
                            <IonItem></IonItem>
                            <IonItem></IonItem>
                            <IonItem></IonItem>
                            <IonItem></IonItem>
                        </IonList>
                    </div>

                </ion-card-content>
            </IonCard>

            <!-- recomended -->
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonContent, IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonList, IonItem } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue'
</script>