<script lang="ts">
  export let identifier;
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import { url } from "../../stores/backend";
  export let label : string;

  let beruf = {};
  let loading = true;

  const load = async function () {
    const pb = new PocketBase($url);
    beruf = await pb.collection("users").getOne(identifier);

    loading = false;
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>

{#if !loading}
<span class="label font-bold">{label}:</span>
  <span class="username">{beruf.nummer}</span>
{/if}
