<template>
  <div id="menu">
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>
    </nav>
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li class="father-li">
          <a class="menu-item">菜单一</a>
          <ul class="hidden">
              <li><a class="menu-item">子菜单1</a></li>
              <li><a class="menu-item">子菜单2</a></li>
              <li><a class="menu-item">子菜单3</a></li>
          </ul>
        </li>
        <li class="father-li">
          <a>菜单二</a>
          <ul class="hidden">
              <li><a class="menu-item">子菜单1</a></li>
              <li><a class="menu-item">子菜单2</a></li>
              <li><a class="menu-item">子菜单3</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>
<style>
.father-li ul{
    list-style: none;
}
.hidden{
    display: none;
}
.show{
    display: block;
}
</style>
<script>
export default {
    mounted:function(){
        let firstMenus = document.getElementsByClassName("father-li");
        firstMenus.forEach($el=>{
            $el.addEventListener('click',()=>{
                //当前节点增加active类
                $el.classList.add('active');
                //兄弟节点删除active类
                let b = $el.parentNode.children;
                for(let i = 0, bl = b.length; i < bl; i++){
                    if(b[i] !== $el){
                        b[i].classList.remove('active')
                    }
                }
                //子菜单显示/隐藏
                $el.getElementsByTagName('ul').forEach(e=>{
                    if(e.classList.contains('hidden')){
                        e.classList.remove('hidden');
                        e.classList.add('show');
                    }else{
                        e.classList.remove('show');
                        e.classList.add('hidden');
                    }
                })
            })
        });
        let menuItems = document.getElementsByClassName("menu-item");
        menuItems.forEach($el=>{
            $el.addEventListener('click',()=>{
                
                //其他菜单删除is-active类
                let b = document.getElementsByClassName("menu-item is-active");
                for(let i = 0, bl = b.length; i < bl; i++){
                    if(b[i] !== $el){
                        b[i].classList.remove('is-active')
                    }
                }
                //选中菜单增加is-active类
                $el.classList.add('is-active');
                
            })
        })
    }
}
</script>