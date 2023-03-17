<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import UserCard from "$lib/components/UserCard.svelte";
  import { url } from "../../stores/backend";

  let items = [];

  onMount(async function () {
    const pb = new PocketBase($url);
    const resultList = await pb.collection("users").getList(0,50);
    items = resultList.items;
  });
</script>

<div class="grid grid-cols-6 gap-3">
  {#each items as item}
    <UserCard identifier={item.id} />
  {/each}
</div>
