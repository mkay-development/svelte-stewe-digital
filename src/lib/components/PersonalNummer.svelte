<script>
  export let identifier;
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import { url } from "../../stores/backend";

  let beruf = {};

  const load = async function () {
    const pb = new PocketBase($url);

    beruf = await pb.collection("users").getOne(identifier);
  };

  onMount(() => {
    setTimeout(function () {
      load();
    }, 1000);
  });
</script>

<span class="username">{beruf.nummer}</span>
