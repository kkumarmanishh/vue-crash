<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
    <Hero title="Hello World" subtitle="You are Amazing!!" />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
</template>