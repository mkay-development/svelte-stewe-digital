<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import { url } from "../../stores/backend";
  import { goto } from "$app/navigation";

  export let identifier;

  let item = {};
  let loading = true;

  const load = async function () {
    const pb = new PocketBase($url);
    const result = await pb.collection("stellen").getOne(identifier);
    item = result;
    loading = false;
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>

{#if !loading}
  <section class="col-span-6 md:col-span-2 card bg-white px-2 py-2 rounded-lg">
    <img
      src="https://via.placeholder.com/480x320.png?text=Stewe+Digital"
      alt=""
    />
    <h2 class="font-bold mt-2">{item.name}</h2>
    <br />
    <p class="text-sm">
      {item.short_desc} <br /><br />
      <span class="font-bold">Start:</span>
      {new Date(item.start).toLocaleDateString()}<br />
      <span class="font-bold">Ende:</span>
      {new Date(item.end).toLocaleDateString()}<br />
    </p>
    <section class="actions text-right mt-5">
      <button
        class="bg-gray-400 px-2 py-2"
        on:click={function () {
          goto("/stelle/" + item.id);
        }}>mehr</button
      >
    </section>
  </section>
{/if}
