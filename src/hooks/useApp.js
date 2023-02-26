import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default () => {
  const router = useRouter();
  const route = useRoute();

  watch(
    () => route.query,
    () => {
      const { error } = route.query;

      if (error) {
        alert(error);

        router.replace({ query: {} });
      }
    },
    { deep: true }
  );
};
