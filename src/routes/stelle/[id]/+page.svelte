<script>
  import { page } from "$app/stores";
  import { url } from "./../../../stores/backend.js";
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import BerufName from "$lib/components/BerufName.svelte";

  let item = {};

  const load = async function () {
    const pb = new PocketBase($url);
    item = await pb.collection("stellen").getOne($page.params.id);
  };

  onMount(() => {
    load();
  });
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <section class="dates text-center block font-bold mb-3">
      {new Date(item.start).toLocaleDateString()} - {new Date(
        item.end
      ).toLocaleDateString()}
    </section>
    <img
      src="https://via.placeholder.com/480x320.png?text=Stewe+Digital"
      alt=""
    /> <section class="beruf block text-center font-bold mt-3"><BerufName identifier={item.beruf} /></section>
  </div>
  <div class="col-span-6 md:col-span-4">{@html item.desc}</div>
</div>
