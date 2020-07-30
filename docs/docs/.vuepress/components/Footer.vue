<template>
  <div>

  <!-- <form action="https://www.getrevue.co/profile/avimehenwal/add_subscriber"
  method="post" id="revue-form" name="revue-form"  target="_blank">
  <div class="revue-form-group">
    <label for="member_email">Email address</label>
    <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email">
  </div>
  <div class="revue-form-group">
    <label for="member_first_name">First name <span class="optional">(Optional)</span></label>
    <input class="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name">
  </div>
  <div class="revue-form-group">
    <label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
    <input class="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name">
  </div>
  <div class="revue-form-actions">
    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
  </div>
  </form>
</div> -->

    <div id="news">
      <h3> {{ message}} </h3>
      <form
        :action="actionUrl"
        method="post"
        name="revue-form"
        id="revue-form"
        class="newsletter-form"
        target="_blank"
        rel="noopener"
      >
        <input
          name="member[email]"
          id="member_email"
          class="newsletter-input"
          type="email"
          placeholder="Email address"
          required
        >
        <input
          name="member[subscribe]"
          id="member_submit"
          class="button newsletter-button"
          type="submit"
          value="Subscribe"
        >
        <!-- type=reset button -->
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
      actionUrl: 'https://www.getrevue.co/profile/avimehenwal/add_subscriber'
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
