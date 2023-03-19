<script>
  import PocketBase from "pocketbase";
  import UserCard from "$lib/components/UserCard.svelte";
  import { onMount } from "svelte";
  import { url } from "../../stores/backend";

  let items = [];

  onMount(async () => {
    const pb = new PocketBase($url);
    const result = await pb.collection("users").getList(1, 50);
    items = result.items;
  });
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
