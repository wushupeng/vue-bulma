<template>
  <nav class="navbar is-link" role="navigation">
    <div class="navbar-brand">
      <a href="https://bulma.io" class="navbar-item  is-light">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>
    <!-- <div id="label" @click="menuToggle">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div> -->
    <div class="navbar-menu">
      <div class="navbar-start">

      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
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