<template>
  <header class="topHeader">
    <h1 class="topHeader-title">BMW Fan!!!!!</h1>
    <div class="topHeader-outer">
      <nuxt-link to="#" class="topHeader-menu" id="openNav">
          <span class="topHeader-menu_bar fa fa-bars"></span>
          <p class="topHeader-menu_text">Menu</p>
      </nuxt-link>
      <nav id="topNav" class="topNav">
        <nuxt-link to="#" class="topNav-close" id="closeNav">
            <CloseIcon />
        </nuxt-link>
        <ul class="topNav-listBox">
          <li class="topNav-listBox_li"><nuxt-link to="/" class="topNav-listBox_a">Home</nuxt-link></li>
          <li class="topNav-listBox_li"><nuxt-link to="/01" class="topNav-listBox_a">BMW</nuxt-link></li>
          <li class="topNav-listBox_li"><nuxt-link to="/02" class="topNav-listBox_a">エンブレムの由来</nuxt-link></li>
          <li class="topNav-listBox_li"><nuxt-link to="/03" class="topNav-listBox_a">製品の特徴</nuxt-link></li>
          <li class="topNav-listBox_li"><nuxt-link to="/04" class="topNav-listBox_a">二輪車</nuxt-link></li>
          <li class="topNav-listBox_li"><nuxt-link to="/05" class="topNav-listBox_a">モータースポーツ</nuxt-link></li>
          <li class="topNav-listBox_li"><nuxt-link to="/06" class="topNav-listBox_a">経営状況</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style>
</style>
