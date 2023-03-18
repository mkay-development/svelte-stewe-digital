<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import { url } from "../../stores/backend";

  let items = [];

  onMount(async function () {
    const pb = new PocketBase($url);
    const resultList = await pb.collection("stellen").getList(1, 50, {
      filter: 'user = ""',
    });
    items = resultList.items;
  });
</script>

<h2 class="font-bold text-lg mb-3">Offene Stellen:</h2>
<div class="grid grid-cols-6 gap-3">
  {#each items as item}
    <ProfileCard identifier={item.id} />
  {/each}
</div>
