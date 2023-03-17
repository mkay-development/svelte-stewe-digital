<script>
  import { onMount } from "svelte";
  import QRCode from "qrcode";
  import PocketBase from "pocketbase";
  import BerufName from "../../../lib/components/BerufName.svelte";
  import PersonalNummer from "../../../lib/components/PersonalNummer.svelte";
  import { url } from "../../../stores/backend";

  let user = {};
  let image = "";

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
  };

  onMount(() => {
    load();
  });
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <h2 class="font-bold text-lg text-center mb-3">{user.name}</h2>
    <img
      src="https://avatars.githubusercontent.com/u/20771653?v=4"
      alt=""
      class="rounded-full w-48 mx-auto"
    />
    <p class="text-sm text-center mt-3">
      <span class="font-bold">Personalnummer:</span>
      <PersonalNummer identifier={user.id} /> <br />
      <span class="font-bold">Beruf:</span>
      <BerufName identifier={user.job} />
    </p>
    <img src={image} alt="" class="mx-auto mt-5" />
  </div>
  <div class="col-span-6 md:col-span-4 md:text-left mt-3">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
      maxime doloremque error debitis ducimus voluptate deserunt assumenda ipsam
      iure sequi amet ea.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
      maxime doloremque error debitis ducimus voluptate deserunt assumenda ipsam
      iure sequi amet ea.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
      maxime doloremque error debitis ducimus voluptate deserunt assumenda ipsam
      iure sequi amet ea.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
      maxime doloremque error debitis ducimus voluptate deserunt assumenda ipsam
      iure sequi amet ea.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
      maxime doloremque error debitis ducimus voluptate deserunt assumenda ipsam
      iure sequi amet ea.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
      perspiciatis repudiandae, ullam, quod quia, mollitia officia sapiente
      maxime doloremque error debitis ducimus voluptate deserunt assumenda ipsam
      iure sequi amet ea.
    </p>
  </div>
</div>
