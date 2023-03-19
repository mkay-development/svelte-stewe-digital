<script>
  import { open } from "../../stores/navigation";
  import { isLoggedIn } from "../../stores/user";
</script>

{#if $open}
  <section class="navigation-content">
    <div class="grid grid-cols-6 gap-3 px-2 py-2">
      <div class="col-span-3"><a href="/stellen">Stellen</a></div>
      <div class="col-span-3"><a href="/dashboard">Dashboard</a></div>
      <div class="col-span-3"><a href="/user/profile">Benutzer</a></div>
      {#if $isLoggedIn}
        <div class="col-span-3"><a href="/logout">Logout</a></div>
      {:else}
        <div class="col-span-3"><a href="/login">Login</a></div>
      {/if}
      <div class="col-span-6"><hr class="border-[#1154A6] border-2" /></div>
    </div>
  </section>
{/if}
