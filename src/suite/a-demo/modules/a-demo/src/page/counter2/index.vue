<template>
  <template></template>
</template>

<script setup lang="ts">
import { useControllerPage } from 'zova';
import { ControllerPageCounter2 } from './controller.js';
import { RenderPageCounter2 } from './render.jsx';
useControllerPage(ControllerPageCounter2, RenderPageCounter2);
</script>
