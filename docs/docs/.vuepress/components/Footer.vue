<template>
  <div>
    <div id="news">
      <h3> {{ message}} </h3>

      <form class="newsletter-form" id="revue-form" name="revue-form" target="_blank" rel="noopener" :action="action" method="post" @submit="subscribe">
        <input class="newsletter-input" type="email" name="member[email]" id="member_email" required="" placeholder="Email address">

        <input class="button newsletter-button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
      </form>
    </div>

    <Vssue :title="this.$page.title" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Subscribe to our Newsletter',
      action: 'https://www.getrevue.co/profile/avimehenwal/add_subscriber'
    }
  }
}
</script>

<style scoped>
#news {
    padding: 40px 20px 70px;
    text-align: center;
}
.newsletter-form {
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    box-sizing: border-box;
}
.newsletter-input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 80px 10px 20px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 16px;
}
.newsletter-button.button {
    position: absolute;
    padding: 4px 20px;
    margin: 0;
    height: calc(100% - 8px);
    right: 4px;
    top: 4px;
}
input.button {
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
}
</style>
