<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  export let identifier;
  import BerufName from "./BerufName.svelte";
  import { url } from "../../stores/backend";

  let user = {};
let loading = true;

  const load = async function () {
    const pb = new PocketBase($url);
    const resultList = await pb.collection("users").getOne(identifier);
    user = resultList;
    loading = false;
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>

{#if !loading}
  <div class="col-span-6 md:col-span-2 bg-white py-5 rounded-lg">
    <img
      src="{$url}/api/files/_pb_users_auth_/{user.id}/{user.avatar}?thumb=100x100"
      alt=""
      class="rounded-full mx-auto"
    />
    <h2 class="text-center mt-3 mb-3 font-bold">{user.name}</h2>
    <section class="text-center">
      {#if user.job}
        <BerufName label="Beruf" identifier={user.job} />
      {/if}
    </section>
  </div>
{/if}
