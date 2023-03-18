<script>
  export let identifier;
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import { url } from "../../stores/backend";

  let beruf = {};

  let loading = true;
  const load = async function () {
    const pb = new PocketBase($url);

    beruf = await pb.collection("beruf").getOne(identifier);
    loading = false;
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>

{#if !loading}
  <span class="username">{beruf.name}</span>
{/if}
