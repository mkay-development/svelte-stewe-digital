<script>
  import { goto } from "$app/navigation";
  import PocketBase from "pocketbase";
  import { url } from "../../stores/backend";

  let email = "";
  let password = "";

  const login = async function () {
    const pb = new PocketBase($url);

    await pb.collection("users").authWithPassword(email, password);
    if (pb.authStore.isValid) {
      goto("/dashboard");
      window.location = "/dashboard";
    }
  };
</script>

<svelte:head>
  <title>Login - Stewe Digital</title>
</svelte:head>

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
        <button
          type="submit"
          class="px-2 py-2 bg-gray-400 mt-3 text-white font-bold">login</button
        >
      </section>
    </form>
  </div>
  <div class="col-span-6 md:col-span-2">
    <h2 class="font-bold text-lg mx-2 mb-3">Demo Login Daten:</h2>
    <section class="card bg-white px-2 py-2 rounded-lg">
      <span class="label font-bold block">Email</span>
      <span class="value block">admin@jmartz.de</span>
      <br />
      <span class="label font-bold block">Password</span>
      <span class="value block">findetnemo</span>
    </section>
  </div>
  <div class="col-span-6 md:col-span-2">Test</div>
</div>
