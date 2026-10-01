fetch('http://localhost:3000/jogos')    
  .then(res => res.json())
  .then(data => {
    const ul = document.getElementById("lista_jogos");
    ul.innerHTML = "";
    let contador = 0;
    data.forEach(jogo => {
        contador++;
        console.log(contador);
        document.getElementById("total_jogos").textContent = contador
        const li = document.createElement("li");
         li.className = "card-jogo";
         li.innerHTML = `
        <div class="info-jogo">
          <h3>${jogo.titulo}</h3>
          <p>${jogo.genero} • ${jogo.plataforma} | Nota: ${jogo.nota}</p>
        </div>
        <div class="botoes-jogo">
          <button class="btn-editar">Editar</button>
          <button class="btn-excluir">Excluir</button>
        </div>
      `;
      ul.appendChild(li);
    });
  })
  .catch(err => console.error('Erro ao buscar jogos:', err));