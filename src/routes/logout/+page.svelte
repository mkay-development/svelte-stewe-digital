<script>
  import { goto } from "$app/navigation";
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import { url } from "../../stores/backend";

  const action = async function () {
    const pb = new PocketBase($url);
    if (pb.authStore.isValid) {
      pb.authStore.clear();
      goto("/");
      window.location = "/";
    }
  };

  onMount(() => {
    action();
  });
</script>

<svelte:head>
  <title>Logout - Stewe Digital</title>
</svelte:head>