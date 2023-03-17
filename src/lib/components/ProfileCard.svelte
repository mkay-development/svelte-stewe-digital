<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import { url } from "../../stores/backend";

  export let identifier;

  let item = {};

  const load = async function () {
    const pb = new PocketBase($url);
    const resultList = await pb.collection("stellen").getOne(identifier);
    item = result;
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>
