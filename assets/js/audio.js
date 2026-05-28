function iniciarAudio() {

    const audio = document.getElementById('background-music');
    const btn = document.getElementById('music-toggle-btn');

    if (!audio || !btn) return;

    audio.loop = true;
    let playing = false;

    document.addEventListener('click', function arrancar() {
        audio.play().then(() => {
            playing = true;
            btn.textContent = '⏸ Pausa';
        }).catch(() => {});
        document.removeEventListener('click', arrancar);
    }, { once: true });

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (playing) {
            audio.pause();
            playing = false;
            btn.textContent = '▶ Música';
        } else {
            audio.play();
            playing = true;
            btn.textContent = '⏸ Pausa';
        }
    });
}