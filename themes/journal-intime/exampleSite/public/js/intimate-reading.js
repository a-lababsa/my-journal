// Mode sombre simple pour journal intime
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        // Appliquer d'abord les préférences sauvegardées
        loadPreferences();
        // Puis initialiser le toggle
        initTiredMode();
    });
    
    function initTiredMode() {
        const toggle = document.createElement('button');
        toggle.className = 'tired-mode-toggle';
        
        // Vérifier l'état actuel pour définir la bonne icône
        const isActive = document.body.classList.contains('tired-mode');
        toggle.innerHTML = isActive ? '☀️' : '🌙';
        toggle.title = isActive ? 'Mode jour' : 'Mode nuit pour les yeux fatigués';
        
        toggle.addEventListener('click', toggleTiredMode);
        document.body.appendChild(toggle);
    }
    
    function toggleTiredMode() {
        const html = document.documentElement;
        const body = document.body;
        const isActive = body.classList.toggle('tired-mode');
        
        // Appliquer aussi au html pour la cohérence
        if (isActive) {
            html.classList.add('tired-mode');
        } else {
            html.classList.remove('tired-mode');
        }
        
        const toggle = document.querySelector('.tired-mode-toggle');
        if (toggle) {
            toggle.innerHTML = isActive ? '☀️' : '🌙';
            toggle.title = isActive ? 'Mode jour' : 'Mode nuit pour les yeux fatigués';
        }
        
        localStorage.setItem('tired-mode', isActive);
    }
    
    function loadPreferences() {
        const savedTiredMode = localStorage.getItem('tired-mode');
        if (savedTiredMode === 'true') {
            // Le mode sombre est déjà appliqué via le script inline
            // On s'assure juste que body a aussi la classe
            document.body.classList.add('tired-mode');
        }
    }
    
})();