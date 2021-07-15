const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome, email);
    let data ={
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    alert('Enviado!!!')

    // let content = document.getElementById('content')

    // let levando = `<p> Salvando em nossos arquivos</p>`;

    // let finalizado = `<p>Agora, esta bem seguro</p>`

    // content.innerHTML = levando;

    // setTimeout(() => {
    //     content.innerHTML = finalizado;
    // }, 1000)
})