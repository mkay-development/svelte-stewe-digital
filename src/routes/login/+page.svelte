<script>
  import { goto } from "$app/navigation";
  import PocketBase from "pocketbase";
  import { url } from "../../stores/backend";
  import { change } from "../../stores/user";

  let email = "";
  let password = "";

  const login = async function () {
    const pb = new PocketBase($url);

    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    if (pb.authStore.isValid) {
      goto("/dashboard");
      change();
      window.location = "/dashboard";
    }
  };
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <form on:submit|preventDefault={login}>
      <div class="form-control">
        <label for="email" class="px-2 py-2 block text-sm font-bold bg-gray-400"
          >Email</label
        >
        <input
          type="text"
          id="email"
          placeholder="mail@jmartz.de"
          bind:value={email}
          class="w-full px-2 py-2 bg-white"
        />
      </div>
      <div class="form-contro mt-3">
        <label
          for="password"
          class="px-2 py-2 block text-sm font-bold bg-gray-400">Passwort</label
        >
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="password123"
          class="w-full px-2 py-2 bg-white"
        />
      </div>
      <section class="actions text-right">
        <button type="submit">login</button>
      </section>
    </form>
  </div>
  <div class="col-span-6 md:col-span-2">Test</div>
  <div class="col-span-6 md:col-span-2">Test</div>
</div>
