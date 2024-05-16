<template>
    <BaseLayout :title="title">
        This is the description of Memory {{ title }}
    </BaseLayout>>
</template>

<script setup>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, useIonRouter } from '@ionic/vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import BaseLayout from '@/components/base/BaseLayout.vue'

const router = useRouter();
const route = useRoute();

const id = ref();
id.value = route.params.id;

const title = 'Memory ' + id.value;
</script>