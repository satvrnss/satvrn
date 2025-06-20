<script setup lang="ts">
import { useData } from 'vitepress'
import { inject, ref, onMounted } from 'vue'
import VPIconMoon from 'vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue'
import VPIconSun from 'vitepress/dist/client/theme-default/components/icons/VPIconSun.vue'

const { isDark } = useData()

const toggleAppearance = inject('toggle-appearance', () => {
  isDark.value = !isDark.value
})

const supportsViewTransition = ref(false)

onMounted(() => {
  supportsViewTransition.value =
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
})
</script>

<template>
  <button
    type="button"
    role="switch"
    title="VPSwitchAppearance"
    class="VPSwitchAppearance"
    :aria-checked="isDark"
    :data-view-transition="supportsViewTransition"
    @click="toggleAppearance"
  >
    <ClientOnly>
      <Transition name="fade" mode="out-in">
        <div v-if="!isDark" class="sun text-xl i-ph-sun-duotone" />
        <div v-else class="moon text-xl i-ph-moon-duotone" />
      </Transition>
    </ClientOnly>
  </button>
</template>

<style lang="scss" scoped>
/* your styles */
</style>
