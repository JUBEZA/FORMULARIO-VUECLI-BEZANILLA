<template>
  <select>

  </select>
</template>

<script>
  export default{
    name: "selectDinámico",
    props: {
      label:  {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true
      }
    }
  };
</script>
