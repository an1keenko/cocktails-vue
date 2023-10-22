<script setup>
import { Back } from '@element-plus/icons-vue'
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img" />
    <div class="main">
      <div class="btns">
        <el-button type="primary" :icon="Back" circle class="back" @click="backFunc" />
        <el-button class="button">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.root
  display: flex
  min-height: 100vh
  background-color: $background

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  position: relative
  width: 50%
  padding: 32px 40px

.button
  position: absolute
  top: 32px
  right: 40px
  font-size: 16px
  font-family: 'Raleway', 'Arial', sans-serif
  background-color: $accent
  border-color: $accent
  color: $text

  &:hover,
  &:active
    background-color: darken($accent, 20%)
    border-color: darken($accent, 20%)

.btns
  display: flex
  justify-content: space-between
  align-items: center

.back
  background-color: transparent
  border-color: $text

  &:hover
    color: $accent
    border-color: $accent
</style>
