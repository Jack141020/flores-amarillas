const btnGenerar = document.getElementById('btnGenerar');
const flor = document.getElementById('flor');
const carta = document.getElementById('carta');
const mensajeCarta = document.getElementById('mensajeCarta');

// ✏️ AQUÍ PUEDES ESCRIBIR EL MENSAJE QUE QUIERAS DEDICARLE
const textoCarta = `¡Hola, Lluvia! ✨
Quería prepararte este pequeño detalle para recordarte lo mucho que valoro tenerte en mi vida. Más allá de ser mi mejor amiga, te has vuelto como una hermanita menor para mí. Aprecio muchísimo cada risa, cada plática, cada momento compartido y la confianza que nos tenemos.
Sabes que siempre voy a estar aquí para escucharte, apoyarte y cuidarte cuando lo necesites. Gracias por ser tan genial y por estar siempre ahí. ¡Espero que te guste mucho esta flor digital hecha para ti! 💛✨`;

// Insertamos el texto en el párrafo de la carta
mensajeCarta.textContent = textoCarta;

btnGenerar.addEventListener('click', () => {
    // Si está oculta, la mostramos
    if (flor.classList.contains('oculta')) {
        flor.classList.remove('oculta');
        flor.classList.add('mostrar');

        carta.classList.remove('oculta');
        carta.classList.add('mostrar');

        btnGenerar.textContent = '✨ Ocultar Detalle ✨';
    } else {
        // Si ya está visible, la volvemos a ocultar
        flor.classList.add('oculta');
        flor.classList.remove('mostrar');

        carta.classList.add('oculta');
        carta.classList.remove('mostrar');

        btnGenerar.textContent = 'Abrir Carta y Flor';
    }
});