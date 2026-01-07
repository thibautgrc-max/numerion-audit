// assets/js/modules/dom.js
(function () {
  "use strict";

  function replacePlaceholders(text, data, formatter) {
    return String(text).replace(/__([A-Z0-9_]+)__/g, (_, key) => {
      const v = key in data ? data[key] : "";
      return formatter ? formatter(key, v) : String(v ?? "");
    });
  }

  function injectTextPlaceholders(data, formatter) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return node.nodeValue && node.nodeValue.includes("__")
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      node.nodeValue = replacePlaceholders(node.nodeValue, data, formatter);
    });
  }

  window.AUDIT_DOM = { injectTextPlaceholders, replacePlaceholders };
})();
