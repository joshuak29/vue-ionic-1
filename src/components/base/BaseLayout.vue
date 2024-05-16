<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>{{ title }}</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <slot></slot>
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar } from '@ionic/vue';

defineProps({
    title: {
        type: String,
        default: 'Home'
    }
})
</script>