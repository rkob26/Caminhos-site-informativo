/**
 * Caminhos - Scripts da landing page
 * Controle do menu de navegação responsivo (hambúrguer).
 */
(function () {
    'use strict';

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    function setMenu(open) {
        navMenu.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
    }

    // Abre/fecha o menu ao clicar no botão hambúrguer
    hamburger.addEventListener('click', function () {
        setMenu(!navMenu.classList.contains('active'));
    });

    // Fecha o menu ao clicar em qualquer link de navegação
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setMenu(false);
        });
    });

    // Fecha o menu com a tecla Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') setMenu(false);
    });
})();
