<script>
  import { goto } from "$app/navigation";
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import { change } from "../../stores/user";
  import { url } from "../../stores/backend";

  const action = async function () {
    const pb = new PocketBase($url);
    if (pb.authStore.isValid) {
      pb.authStore.clear();
      change();
      goto("/");
      window.location = "/";
    }
  };

  onMount(() => {
    action();
  });
</script>
