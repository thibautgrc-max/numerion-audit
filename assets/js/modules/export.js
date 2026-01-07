// assets/js/modules/export.js
(function () {
  "use strict";

  function downloadJSON(filename, obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function initExportButtons(payload) {
    const btn = document.getElementById("btn-export-json");
    if (btn) {
      btn.addEventListener("click", () => {
        downloadJSON(`numerion-audit-${payload.data.ID_DOSSIER || "export"}.json`, payload);
      });
    }

    const board = document.getElementById("btn-board-mode");
    if (board) {
      board.addEventListener("click", () => {
        document.body.classList.toggle("is-board-mode");
      });
    }
  }

  window.AUDIT_EXPORT = { initExportButtons };
})();
