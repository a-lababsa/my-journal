(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        initTiredMode();
        initDysMode();
    });

    // ── Mode sombre ──────────────────────────────────────────
    function initTiredMode() {
        const btn = document.getElementById('tired-mode-btn');
        if (!btn) return;

        const isActive = document.documentElement.classList.contains('tired-mode');
        updateTiredBtn(btn, isActive);

        btn.addEventListener('click', function () {
            const active = document.documentElement.classList.toggle('tired-mode');
            document.body.classList.toggle('tired-mode', active);
            localStorage.setItem('tired-mode', active);
            updateTiredBtn(btn, active);
        });
    }

    function updateTiredBtn(btn, isActive) {
        btn.textContent = isActive ? '☀️' : '🌙';
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        btn.setAttribute('aria-label', isActive ? 'Désactiver le mode sombre' : 'Activer le mode sombre');
    }

    // ── Mode dyslexie ─────────────────────────────────────────
    function initDysMode() {
        const btn = document.getElementById('dys-mode-btn');
        if (!btn) return;

        const isActive = document.documentElement.classList.contains('dys-mode');
        updateDysBtn(btn, isActive);

        btn.addEventListener('click', function () {
            const active = document.documentElement.classList.toggle('dys-mode');
            localStorage.setItem('dys-mode', active);
            updateDysBtn(btn, active);
        });
    }

    function updateDysBtn(btn, isActive) {
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        btn.setAttribute('aria-label', isActive
            ? 'Désactiver le mode dyslexie'
            : 'Activer le mode dyslexie — police et espacement adaptés'
        );
    }

})();
