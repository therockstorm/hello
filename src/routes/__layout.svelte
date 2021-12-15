<script lang="ts">
  import "../app.css";
</script>

<header>
</header>

<main>
  <slot />
</main>

<footer>
</footer>

<style>
  main {
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1024px;
    padding: 1rem;
    width: 100%;
  }
</style>
