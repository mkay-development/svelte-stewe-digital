<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import { url } from "../../stores/backend";

  export let identifier;

  let item = {};

  const load = async function () {
    const pb = new PocketBase($url);
    const result = await pb.collection("stellen").getOne(identifier);
    item = result;
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>

<section class="col-span-6 md:col-span-2 card bg-white px-2 py-2 rounded-lg">
  <img
    src="https://via.placeholder.com/480x320.png?text=Stewe+Digital"
    alt=""
  />
  <h2 class="font-bold mt-2">{item.name}</h2><br />
  <p class="text-sm">
    {item.desc} <br /><br />
    <span class="font-bold">Start:</span>
    {new Date(item.start).toLocaleDateString()}<br />
    <span class="font-bold">Ende:</span> {new Date(item.end).toLocaleDateString()}<br />
  </p>
</section>
