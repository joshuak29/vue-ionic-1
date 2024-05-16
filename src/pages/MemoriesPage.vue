<template>
    <IonPage class="p-4">
        <IonContent>
            <div class="flex flex-row items-center">
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
            <ion-card class="bg-transparent">
                <ion-card-header>
                    <ion-card-title class="text-2xl">9000 <span
                            class="text-lg font-medium pl-4">Monthly Listeners</span></ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat alias dolorum maxime dicta
                    repudiandae atque laudantium? Praesentium officia alias corporis enim ipsa dolor voluptatum eius
                    dicta veritatis asperiores repudiandae consequatur ipsam, quas eos laboriosam natus rerum? Aliquam
                    illo quasi assumenda.
                </ion-card-content>
            </ion-card>

            <!-- disco -->
            <ion-card class="bg-transparent">
                <ion-card-header>
                    <ion-card-title class="text-2xl">Discography</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <IonList>
                        <IonItem></IonItem>
                        <IonItem></IonItem>
                        <IonItem></IonItem>
                        <IonItem></IonItem>
                    </IonList>
                </ion-card-content>
            </ion-card>
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonContent, IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonList, IonItem } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue'
</script>