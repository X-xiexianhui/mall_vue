<template>
  <div class="login_page">
  <!-- login -->
  <div class="top center">
    <div class="logo center">
      <a href="/" target="_blank"><img src="@/assets/frontend/img/logo_top.png" alt=""></a>
    </div>
  </div>
  <div class="login">
    <div class="login_center">
      <div class="login_top">
        <div class="left fl">会员登录</div>
        <div class="right fr">您还不是我们的会员？<a href="/auth/registerStep1" target="_self">立即注册</a></div>
        <div class="clear"></div>
        <div class="xian center"></div>
      </div>
      <div class="login_main center">
        <input type="hidden" id="prevPage" value="{{prevPage}}">
        <div class="username">手机号：<input class="inputclass" id="phone" type="text" name="phone"
                                         placeholder="请输入你的用户名"/></div>
        <div class="username">密码：<input class="inputclass" id="password" type="password" name="password"
                                         placeholder="请输入你的密码"/></div>
        <div class="username">
          <div class="left fl">验证码：<input class="verificode" id="phone_code" type="text" name="phone_code"
                                          placeholder="请输入验证码"/></div>
          <div class="right fl">
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="error">
      </div>
      <div class="login_submit">
        <input class="submit" type="button" id="goLogin" value="立即登录">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login'
}
</script>

<style scoped>
@import "@/assets/frontend/css/login.css";
</style>
