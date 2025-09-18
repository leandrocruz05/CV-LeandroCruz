// Inicializa AOS (animaciones al hacer scroll)
AOS.init({ duration: 1000, once: true });

// Modal de certificados
const modal = document.getElementById('modalCert');
const modalImg = document.getElementById('imgModal');
const cerrar = document.querySelector('.cerrar');

document.querySelectorAll('.ver-cert').forEach(btn => {
    btn.addEventListener('click', e => {
        modal.style.display = 'block';
        modalImg.src = e.target.dataset.cert;
    });
});
cerrar.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Modo oscuro
const toggleDark = document.getElementById('modoOscuro');
toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
