// eslint-disable-next-line consistent-return
const missingNativeCustomEvent = (() => {
  try {
    new CustomEvent('test-event'); // eslint-disable-line no-new
  } catch (error) {
    return true;
  }
})();
if (missingNativeCustomEvent) {
  window.CustomEvent = function CustomEvent(type, init = {}) {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(type, init.bubbles, init.cancelable);
    if (init.detail) {
      event.detail = init.detail;
    }
    return event;
  };
}
