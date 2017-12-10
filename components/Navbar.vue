<template>
  <div
    class="navigation"
    v-bind:class="{ isNavOpen: isNavOpen }"
  > 

    <div
      class="btn-menu"
      v-on:click="isNavOpen = !isNavOpen"
    >
      <span class="btn-menu-line top"></span>
      <span class="btn-menu-line middle"></span>
      <span class="btn-menu-line bottom"></span>
    </div>

    <div class="overlay">
      <nav class="overlay-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isNavOpen: false
      }
    }
  }
</script>

<style lang="scss" scoped>

$color_nav_bar: #2b2b2b;
$color-background: #2b2b2b;
$color-text: #5a5a5a;
$color-main: #ffff00;
$color-active: #FFF;
$color-link: #2b2b2b;

$button-height: 27px;
$button-width: 35px;


.navigation {
  position: fixed;
  background: $color_nav_bar;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 15px;
  z-index: 100;
}

.btn-menu {
  position: relative;
  float: right;
  height: $button-height;
  width: $button-width;
  cursor: pointer;
  transition: opacity .25s ease;
  &:hover {
    opacity: .8;
  }

  .btn-menu-line {
    background: $color-main;
    border: none;
    height: 5px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition:  all .35s ease;
    cursor: pointer;
    
    &:nth-of-type(2) {
      top: 11px;
    }
    
    &:nth-of-type(3) {
      top: 22px;
    }
  }

}



.overlay {
  position: fixed;
  background: $color-main;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;

  nav {
    position: relative;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    font-family: 'Vollkorn', serif;
    font-weight: 400;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%; 
    
    li {
      display: block;
      height: 25%;
      height: calc(100% / 4);
      min-height: 50px;
      position: relative;
      opacity: 0;
      
      a {
        display: block;
        position: relative;
        color: $color-link;
        text-decoration: none;
        overflow: hidden;
        
        &:hover:after,
         &:focus:after,
         &:active:after {
           width: 100%;
         }
        
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 3px;
          background: $color-link;
          transition: .35s;
        }
      }
    }
  }
}

// nav is open! see overlay
.isNavOpen {

  .btn-menu {
    z-index: 200;
    .top {
      transform: translateY(11px) translateX(0) rotate(45deg);
      background: $color-text;
    }
    .middle {
      opacity: 0;
      background: $color-text;
    }
    
    .bottom {
      transform: translateY(-11px) translateX(0) rotate(-45deg);
      background: $color-text;
    }
  }

  .overlay {
    opacity: 1;
    visibility: visible;
    height: 100%;
    
    li {
      animation: fadeInRight .5s ease forwards;
      animation-delay: .35s;
      
      &:nth-of-type(2) {
        animation-delay: .4s;
      }
      &:nth-of-type(3) {
        animation-delay: .45s;
      }
      &:nth-of-type(4) {
        animation-delay: .50s;
      }
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
