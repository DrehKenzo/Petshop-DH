const http = require('http');

const server = http.createServer((req,res) =>{
  switch(req.url){
    case '/pets' :
      res.write("aqui eu to listando pets");
    break;
    case '/pets/add':
      res.write("adicionando pet");
    break;
    case '/pets/buscar':
      res.write("buscando pet");
    break;
    default:
      res.write("to perdido");
  }

  res.end();
})
.listen(3000, "localhost", () => {
  console.log("Servidor rodando :)");
})