<script setup lang="ts">
import { greet } from "@feeble/shared-utils";

const message = greet("Vue");
</script>

<template>
  <h1>{{ message }}</h1>
</template>
