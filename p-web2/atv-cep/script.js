function buscarEndereco() {
    const cep = document.getElementById('cep').value.trim();
    const endereco = document.getElementById('endereco');
  
    if (cep.length !== 8 || isNaN(cep)) {
      alert('CEP inválido. Deve conter 8 números.');
      endereco.textContent = '(O endereço aparecerá aqui)';
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado.');
          endereco.textContent = '(O endereço aparecerá aqui)';
        } else {
          endereco.textContent = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        }
      })
      .catch(() => {
        alert('Erro ao buscar o endereço.');
        endereco.textContent = '(O endereço aparecerá aqui)';
      });
  }
  
  function validarFormulario() {
    const matricula = document.getElementById('matricula').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const enderecoText = document.getElementById('endereco').textContent.trim();
  
    if (matricula.length < 3 || nome.length < 3 || cep.length < 3 || enderecoText.length < 3 || enderecoText === '(O endereço aparecerá aqui)') {
      alert('Todos os campos devem estar preenchidos corretamente (mínimo 3 caracteres).');
    } else {
      alert('Formulário enviado com sucesso!');
    }
  }
  