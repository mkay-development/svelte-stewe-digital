<script>
  import { onMount } from "svelte";
  import QRCode from "qrcode";
  import PocketBase from "pocketbase";
  import BerufName from "../../../lib/components/BerufName.svelte";
  import PersonalNummer from "../../../lib/components/PersonalNummer.svelte";
  import { url } from "../../../stores/backend";
  import ProfileCard from "$lib/components/ProfileCard.svelte";

  let user = {};
  let image = "";
  let stellen = [];
  let loading = true;

  const load = async function () {
    const pb = new PocketBase($url);

    user = await pb.collection("users").getOne(pb.authStore.model.id);
    QRCode.toDataURL("I am " + user.name)
      .then((url) => {
        image = url;
      })
      .catch((err) => {
        console.error(err);
      });

    const response = await pb
      .collection("stellen")
      .getList(1, 50, { filter: 'user = "' + pb.authStore.model.id + '"' });
    stellen = response.items;

    loading = false;
  };

  onMount(() => {
    setTimeout(() => {
      load();
    }, 1000);
  });
</script>

<svelte:head>
  <title>Benutzer - Stewe Digital</title>
</svelte:head>

{#if !loading}
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-6 md:col-span-2">
      <h2 class="font-bold text-lg text-center mb-3">{user.name}</h2>
      {#if user.avatar}
        <img
          src="{$url}/api/files/{user.collectionId}/{user.id}/{user.avatar}"
          alt=""
          class="rounded-full w-48 mx-auto"
        />
      {/if}
      <p class="text-sm text-center mt-3">
        <PersonalNummer label="Personalnummer" identifier={user.id} /> <br />
        <BerufName label="Beruf" identifier={user.job} />
      </p>
      <img src={image} alt="" class="mx-auto mt-5" />
    </div>
    <div class="col-span-6 md:col-span-4 md:text-left mt-3">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
        maxime doloremque error debitis ducimus voluptate deserunt assumenda
        ipsam iure sequi amet ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
        maxime doloremque error debitis ducimus voluptate deserunt assumenda
        ipsam iure sequi amet ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
        maxime doloremque error debitis ducimus voluptate deserunt assumenda
        ipsam iure sequi amet ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
        maxime doloremque error debitis ducimus voluptate deserunt assumenda
        ipsam iure sequi amet ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
        maxime doloremque error debitis ducimus voluptate deserunt assumenda
        ipsam iure sequi amet ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
        maxime doloremque error debitis ducimus voluptate deserunt assumenda
        ipsam iure sequi amet ea.
      </p>
    </div>
    <div class="col-span-6">
      <h2 class="font-bold text-lg mb-3">Bisherige Stellen</h2>
    </div>
    {#each stellen as stelle}
      <div class="col-span-6 md:col-span-2">
        <ProfileCard identifier={stelle.id} />
      </div>
    {/each}
  </div>
{/if}
