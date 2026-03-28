/**
 * Production-only: no source maps (see vite.config) + discourage React DevTools attach.
 * Minified bundles remain readable with effort; this is a light deterrent only.
 */
if (import.meta.env.PROD) {
  try {
    Object.defineProperty(window, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: {
        isDisabled: true,
        supportsFiber: true,
        inject: () => {},
        onCommitFiberRoot: () => {},
        onCommitFiberUnmount: () => {},
      },
    });
  } catch {
    /* Hook already exists (e.g. extension). */
  }
}
