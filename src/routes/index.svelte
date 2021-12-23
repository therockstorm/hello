<script context="module" lang="ts">
  import type { User } from "@supabase/supabase-js";

  import Auth from "../lib/Auth.svelte";
  import Profile from "../lib/Profile.svelte";
  import { user } from "../lib/store";
  import { supabase } from "../lib/supabase";

  user.set(supabase.auth.user() as User);

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user as User);
  });

  export const prerender = true;
</script>

<section>
  <h1 class="text-blue-600">Hello, world!</h1>
  <div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}
      <Profile />
    {:else}
      <Auth />
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
