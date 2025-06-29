document.addEventListener('DOMContentLoaded', function() {
    const treinos = {
        peito: {
            titulo: "Treino de Peito e Tríceps",
            exercicios: [
                "Supino Reto com Barra: 4 séries de 8-12 repetições",
                "Crucifixo Inclinado com Halteres: 3 séries de 10-15 repetições",
                "Flexões: 3 séries até a falha",
                "Tríceps na Polia Alta: 4 séries de 10-15 repetições",
                "Mergulho nas Paralelas: 3 séries até a falha"
            ]
        },
        costas: {
            titulo: "Treino de Costas e Bíceps",
            exercicios: [
                "Barra Fixa: 4 séries até a falha",
                "Remada Curvada: 4 séries de 8-12 repetições",
                "Puxada Alta: 3 séries de 10-15 repetições",
                "Rosca Direta com Barra: 4 séries de 8-12 repetições",
                "Rosca Martelo: 3 séries de 10-15 repetições"
            ]
        },
        pernas: {
            titulo: "Treino de Pernas",
            exercicios: [
                "Agachamento Livre: 4 séries de 8-12 repetições",
                "Leg Press: 4 séries de 10-15 repetições",
                "Cadeira Extensora: 3 séries de 12-18 repetições",
                "Mesa Flexora: 3 séries de 12-18 repetições",
                "Panturrilha no Leg Press: 5 séries de 15-20 repetições"
            ]
        },
        ombros: {
            titulo: "Treino de Ombros e Abdômen",
            exercicios: [
                "Desenvolvimento Militar com Barra: 4 séries de 8-12 repetições",
                "Elevação Lateral com Halteres: 3 séries de 12-18 repetições",
                "Elevação Frontal com Halteres: 3 séries de 12-18 repetições",
                "Prancha Abdominal: 4 séries de 1 minuto",
                "Elevação de Pernas: 4 séries até a falha"
            ]
        },
        cardio: {
            titulo: "Treino de Cardio e Funcional",
            exercicios: [
                "Corrida na esteira: 30 minutos em ritmo moderado",
                "Burpees: 4 séries de 15 repetições",
                "Salto na caixa: 4 séries de 12 repetições",
                "Corda Naval: 3 séries de 45 segundos",
                "Kettlebell Swing: 4 séries de 20 repetições"
            ]
        }
    };

    const params = new URLSearchParams(window.location.search);
    const treinoId = params.get('id');

    if (treinoId && treinos[treinoId]) {
        const treino = treinos[treinoId];
        document.getElementById('titulo-treino').textContent = treino.titulo;

        const detalhesContainer = document.getElementById('detalhes-treino');
        detalhesContainer.innerHTML = ''; // Limpa o container

        const card = document.createElement('div');
        card.className = 'treino-card';

        let exerciciosHtml = `<h3>Exercícios:</h3><ul>`;
        treino.exercicios.forEach(ex => {
            exerciciosHtml += `<li>${ex}</li>`;
        });
        exerciciosHtml += `</ul>`;

        card.innerHTML = exerciciosHtml;
        detalhesContainer.appendChild(card);
    } else {
        document.getElementById('titulo-treino').textContent = "Treino não encontrado";
    }
});