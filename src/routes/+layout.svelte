<script>
  import { page } from "$app/stores";
  import "../tailwind.css";
  import Fa from "svelte-fa";
  import {
    faRightFromBracket,
    faList,
    faUser,
    faTimes,
    faCopyright,
    faAddressCard,
    faClipboard,
    faBars,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faFacebook,
    faYoutube,
    faInstagram,
    faMastodon,
  } from "@fortawesome/free-brands-svg-icons";

  import { init, isLoggedIn } from "../stores/user";
  import { onMount } from "svelte";
  import NavigationContent from "$lib/components/NavigationContent.svelte";
  import { toggle, open } from "../stores/navigation";

  onMount(() => {
    init();
  });

  $: $page: open.set(false);
</script>

<section class="bg-[#1154A6]">
  <header class="mx-auto max-w-5xl mb-2 flex justify-between px-2 py-5">
    <h1 class="text-xl font-bold text-white"><a href="/">Stewe.digital</a></h1>
    <nav class="mobile md:hidden">
      {#if $open}
        <button on:click={toggle}>
          <Fa icon={faTimes} class="mt-2 text-white" size="1.5x" /></button
        >
      {:else}
        <button on:click={toggle}>
          <Fa icon={faBars} class="mt-2 text-white" size="1.5x" /></button
        >
      {/if}
    </nav>
    <nav class="desktop hidden md:block">
      <ul class="flex space-x-5 text-white">
        {#if !$isLoggedIn}
          <li>
            <a href="/login" title="Login"><Fa icon={faUser} size="1.5x" /></a>
          </li>
        {/if}

        {#if $isLoggedIn}
          <li>
            <a href="/stellen" title="Stellen"
              ><Fa icon={faClipboard} size="1.5x" /></a
            >
          </li>
          <li>
            <a href="/dashboard" title="Dashboard"
              ><Fa icon={faList} size="1.5x" /></a
            >
          </li>
          <li>
            <a href="/user/profile" title="Profile"
              ><Fa icon={faAddressCard} size="1.5x" /></a
            >
          </li>
          <li>
            <a href="/logout" title="Logout"
              ><Fa icon={faRightFromBracket} size="1.5x" /></a
            >
          </li>
        {/if}
      </ul>
    </nav>
  </header>
</section>

<NavigationContent />

<main class="mx-auto max-w-5xl my-2 px-2 py-2 min-h-screen"><slot /></main>

<section class="bg-[#1154A6] relative bottom-0 left-0 right-0 md:py-12">
  <footer class="mx-auto max-w-5xl mt-2 px-2 py-5 text-white">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <h5 class="font-bold text-lg">Karriere:</h5>
        <ul class="list list-disc space-y-2">
          <li class="list-item ml-3">Webentwickler</li>
          <li class="list-item ml-3">Wordpress Entwickler</li>
        </ul>

        <h5 class="font-bold text-lg mt-5">Projekte:</h5>
        <ul class="list list-disc space-y-2">
          <li class="list-item ml-3">Stewe Gruppe Webseite</li>
          <li class="list-item ml-3">Stewe Digital Webseite</li>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-2 mb-9 md:mb-0">
        <h5 class="font-bold text-lg">Firma:</h5>
        <ul class="list list-disc space-y-2">
          <li class="list item ml-3">
            <a
              href="https://www.stewe.de"
              target="_blank"
              rel="noopener noreferrer">Webseite der Stewe Gruppe</a
            >
          </li>
          <li class="list item ml-3">
            <a
              href="https://www.stewe.de/gebaeudedienste"
              target="_blank"
              rel="noopener noreferrer">Gebäudedienste</a
            >
          </li>
          <li class="list item ml-3">
            <a
              href="https://www.stewe.de/personalservice"
              target="_blank"
              rel="noopener noreferrer">Personaldienste</a
            >
          </li>
          <li class="list item ml-3">
            <a
              href="https://www.stewe.de/bewerber"
              target="_blank"
              rel="noopener noreferrer">Jobbörse</a
            >
          </li>
          <li class="list item ml-3">
            <a
              href="https://www.stewe.de/stewe-gruppe"
              target="_blank"
              rel="noopener noreferrer">Geschichte der Stewe Gruppe</a
            >
          </li>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-2">
        <h5 class="font-bold text-lg text-center mb-3">Social Media:</h5>
        <section class="icons flex justify-center space-x-5">
          <Fa icon={faFacebook} size="2x" />
          <Fa icon={faInstagram} size="2x" />
          <Fa icon={faMastodon} size="2x" />
          <Fa icon={faYoutube} size="2x" />
        </section>
        <section class="datenschutz flex justify-center mt-5">
          <a href="/impressum" class="mr-2">Impressum</a> &
          <a href="/data-privacy" class="ml-2">Datenschutz</a>
        </section>
        <section class="datenschutz flex justify-center mt-2">
          <a href="/kontakt">Kontaktiere uns Jetzt</a>
        </section>
        <section class="copyright flex justify-center mt-2">
          <Fa icon={faCopyright} class="mx-2 mt-1" />
          <span>by Stewe Digital</span>
        </section>
      </div>
    </div>
  </footer>
</section>
