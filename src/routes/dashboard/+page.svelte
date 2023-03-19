<script>
  import { onMount } from "svelte";
  import UserCard from "$lib/components/UserCard.svelte";
  export let data;

  let {items} = data;
</script>

<h2 class="font-bold text-lg mb-3">Unser Team:</h2>
<div class="grid grid-cols-6 gap-3">
  {#each items as item}
    <UserCard identifier={item.id} />
  {/each}
</div>

<svelte:head>
  <title>Dashboard - Stewe Digital</title>
</svelte:head>
