import { injected } from "../connectors";

export function useEagerConnect() {
  const { activate, active } = useWeb3();

  const tried = ref(false);

  onMounted(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          tried.value = true;
        });
      } else {
        tried.value = true;
      }
    });
  });

  // if the connection worked, wait until we get confirmation of that to flip the flag
  watch([tried, active], () => {
    if (!tried.value && active.value) {
      tried.value = true;
    }
  });

  return {
    tried
  };
}
