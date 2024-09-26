let slideIndex = 0;
//document.getElementById('capa').remove()

function showSlides() {
    const slides = document.querySelectorAll('.banner-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

// Inicializa o banner ao carregar a página
window.onload = function() {
    showSlides();
};

ScrollReveal().reveal('#modelo',{
    origin: "left", 
    distance: "50px", 
    duration: 2700, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('#logo',{ 
    reset: false 
});

ScrollReveal().reveal('#whatsapp',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});
ScrollReveal().reveal('#instagram',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 200, 
    reset: false 
});
ScrollReveal().reveal('#catalogo',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 300, 
    reset: false 
});


ScrollReveal().reveal('#mapa',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 500, 
    reset: false 
});

ScrollReveal().reveal('.banner-container',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('.produto',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

let a = document.querySelector("#link")
a.href = "https://wa.me/5521976905037?text=Solicito%20orçamento%20para:%20"


let valorTotal = 0;
const valorCheckbox = 1; // Valor que será somado ou subtraído

window.onload = function() {


    window.atualizarValor = function() {
    const checkbox1 = document.getElementById('Acrigel');

    if (checkbox1.checked) {
        valorTotal += valorCheckbox; // Soma o valor se marcado
        a.href += "%20(Acrigel)%20"
    } else {
        valorTotal -= valorCheckbox; // Subtrai o valor se desmarcado
        a.href = a.href.replace('%20(Acrigel)%20','')
    }

    // Atualiza o texto com o valor total
    document.getElementById('i1').textContent = 'Itens selecionados: ' + valorTotal;
}

window.atualizarValor2 = function() {
    const checkbox1 = document.getElementById('Fibra');

    if (checkbox1.checked) {
        valorTotal += valorCheckbox; // Soma o valor se marcado
        a.href += "%20(Fibra%20de%20Vidro)%20"
    } else {
        valorTotal -= valorCheckbox; // Subtrai o valor se desmarcado
        a.href = a.href.replace('%20(Fibra%20de%20Vidro)%20','')
    }

    // Atualiza o texto com o valor total
    document.getElementById('i1').textContent = 'Itens selecionados: ' + valorTotal;
}

window.atualizarValor3 = function() {
    const checkbox1 = document.getElementById('Progressiva');

    if (checkbox1.checked) {
        valorTotal += valorCheckbox; // Soma o valor se marcado
        a.href += "%20(Progressiva)%20"
    } else {
        valorTotal -= valorCheckbox; // Subtrai o valor se desmarcado
        a.href = a.href.replace('%20(Progressiva)%20','')
    }

    // Atualiza o texto com o valor total
    document.getElementById('i1').textContent = 'Itens selecionados: ' + valorTotal;
}

window.atualizarValor4 = function() {
    const checkbox1 = document.getElementById('Brow');

    if (checkbox1.checked) {
        valorTotal += valorCheckbox; // Soma o valor se marcado
        a.href += "%20(Brow%20Lamination)%20"
    } else {
        valorTotal -= valorCheckbox; // Subtrai o valor se desmarcado
        a.href = a.href.replace('%20(Brow%20Lamination)%20','')
    }

    // Atualiza o texto com o valor total
    document.getElementById('i1').textContent = 'Itens selecionados: ' + valorTotal;
}

window.atualizarValor5 = function() {
    const checkbox1 = document.getElementById('Botox');

    if (checkbox1.checked) {
        valorTotal += valorCheckbox; // Soma o valor se marcado
        a.href += "%20(Botox)%20"
    } else {
        valorTotal -= valorCheckbox; // Subtrai o valor se desmarcado
        a.href = a.href.replace('%20(Botox)%20','')
    }

    // Atualiza o texto com o valor total
    document.getElementById('i1').textContent = 'Itens selecionados: ' + valorTotal;
}

window.atualizarValor6 = function() {
    const checkbox1 = document.getElementById('Hidragloss');

    if (checkbox1.checked) {
        valorTotal += valorCheckbox; // Soma o valor se marcado
        a.href += "%20(Hidragloss)%20"
    } else {
        valorTotal -= valorCheckbox; // Subtrai o valor se desmarcado
        a.href = a.href.replace('%20(Hidragloss)%20','')
    }

    // Atualiza o texto com o valor total
    document.getElementById('i1').textContent = 'Itens selecionados: ' + valorTotal;
}
};    
