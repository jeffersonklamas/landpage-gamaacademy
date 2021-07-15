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
 
 function countdown(){
    let now = new Date();
                // Altere a data do seu evento aqui
    let eventDate = new Date("nov 24, 2021 23:59:00");
    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTiime;
    
    // calculando o dia, hora, minuto e segundo
    let d = Math.floor(remTime / (1000 * 60 * 60 * 24));
    let h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((remTime % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);

    // Verifica se acabou o período do evento
     if (remTime < 0) {
      clearInterval(countdown);
      //document.getElementById("demogrande").innerHTML = "FIM";
      document.getElementById("days").innerHTML = " ";
      document.getElementById("hours").innerHTML = " ";
      document.getElementById("minutes").innerHTML = " ";
      document.getElementById("seconds").innerHTML = "<small>FIM</small>"; 
      } 
  }
  countdown();
