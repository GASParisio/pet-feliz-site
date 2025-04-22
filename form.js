<script>
  document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // evita envio real

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    console.log("Nome:", nome);
    console.log("E‑mail:", email);
    console.log("Mensagem:", mensagem);

    alert("Mensagem salva (simulação)! Verifique no console.");
  });
</script>