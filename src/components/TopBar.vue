<template>
  <nav class="navbar is-link" role="navigation">
    <!-- <div id="label" @click="menuToggle">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div> -->
  </nav>
</template>
<style>
#label {
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
}
#menu-toggle {
  display: none; /* hide the checkbox */
}
#menu-toggle:checked + #menu {
  display: block;
}
</style>
<script>
export default {
  methods: {
    menuToggle: function() {
      let menuEl = document.getElementById('menu');
      if(menuEl.style.display=='block'){
        menuEl.style.display='none';
        menuEl.classList.remove('is-2');
        document.getElementById('right').classList.add('is-full');
      }else{
          menuEl.style.display='block';
          menuEl.classList.add('is-2');
          document.getElementById('right').classList.remove('is-full');
      }
      
    }
  }
};
</script>