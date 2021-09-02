<script lang="ts">
  export let name: string
  let counter: number = 0
  function handleClick() {
    counter++
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <button on:click={handleClick}>{counter}</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: blue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  button {
    width: 150px;
    user-select: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
