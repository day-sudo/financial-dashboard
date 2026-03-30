async function loadTransactions() {
  try {
    const response = await fetch('/.netlify/functions/getTransactions');
    const data = await response.json();

    console.log('Dados do banco:', data);

    const container = document.getElementById('transactions');

    if (!container) return;

    container.innerHTML = '';

    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>${item.description} - R$ ${item.amount}</p>
      `;
      container.appendChild(div);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

loadTransactions();
