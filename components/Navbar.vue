<template>
  <div class="navigation">

    <div
      class="btn-menu"
      @click='btnMenuClick'
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
      }
    },
    methods: {
      btnMenuClick: (event) => {
        const btnMenuEl = event.currentTarget
        console.log('CLICK')
        btnMenuEl.classList.toggle('active')
        // $overlayMenu.toggleClass('open')
      }
    }
  }
</script>

<style lang="scss" scoped>

$color-background: #333;
$color-text: #5a5a5a;
$color-main: #ffff00;
$color-active: #FFF;
$color-link: #333;

$button-height: 27px;
$button-width: 35px;


.navigation {
  position: fixed;
  background: pink;
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
    opacity: .7;
  }

  &.active {
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
  
  &.open {
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
