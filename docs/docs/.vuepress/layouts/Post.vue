<template>
  <div>
    <Content />
    <SimpleNewsletter v-if="$service.email.enabled" />
    <Comment />
  </div>
</template>

<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: {
    Comment,
  },
};
</script>
