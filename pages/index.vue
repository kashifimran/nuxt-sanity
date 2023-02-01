<template>
  <div>
    <header>
      <h1>Sanity + Nuxt</h1>
    </header>
    <main>
      <h2>Data</h2>
      <div v-if="data">
        <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
      <div v-else>
        <div>¯\_(ツ)_/¯</div>
        <p>
          Your data will show up here when you've configured everything
          correctly
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
const {data} = useSanityQuery(groq`*`);
</script>
