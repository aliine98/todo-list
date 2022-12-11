import BotaoConclui from "./components/concluiTarefa.js"
import BotaoDeleta from "./components/deletaTarefa.js"

const criarTarefa = (evento) => {
   evento.preventDefault();
   const input = document.querySelector('[data-form-input]');
   const valor = input.value;
   const lista = document.querySelector('[data-list]');
   const tarefa = document.createElement('li');
   tarefa.classList.add('task');
   const conteudo = `<p class=content>${valor}</p>`
   tarefa.innerHTML = conteudo;
   const span = document.createElement('span');
   span.appendChild(BotaoConclui());
   span.appendChild(BotaoDeleta());
   tarefa.appendChild(span);
   lista.appendChild(tarefa);
   input.value = '';
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);