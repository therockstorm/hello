<script lang="ts">
  import { supabase } from "./supabase";

  let loading = false;
  let email: string | undefined;

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      const e = error as any;
      alert(e.error_description || e.message);
    } finally {
      loading = false;
    }
  };
</script>

<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
  <div class="col-6 form-widget">
    <h1 class="header">Supabase + Svelte</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <div>
      <input
        class="inputField"
        type="email"
        placeholder="Your email"
        bind:value={email}
      />
    </div>
    <div>
      <input
        type="submit"
        class="btn btn-primary"
        value={loading ? "Loading" : "Send magic link"}
        disabled={loading}
      />
    </div>
  </div>
</form>
