<script lang="ts">
  import type { ComponentProps } from "base";
  
  const { value }: ComponentProps["text"] = $props();
</script>

<input {value} />
