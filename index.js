const PETSHOP = "Petshop DH";
console.log(`** ${PETSHOP} **`);

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["banho"]
  }
];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log("Pet vacinado com sucesso!");
  } else {
    console.log("Opa, seu pet já está vacinado!");
  }
};

const listarPets = () => {
  for (let pet of pets){
    console.log(`
    ---------------------
    Nome: ${pets[i].nome}
    Tipo: ${pets[i].tipo}
    Raça: ${pets[i].raca}
    Idade: ${pets[i].idade}
    Genero: "${pets[i].genero == "F" ? "Femea" : "Macho"}
    Vacinado: "${pets[i].vacinado ? "Sim" : "Não"}
    Serviços: ${pets[i].servicos}
  `)}
};

const validarDados = dadosPet => {
  return (
    dadosPet.nome != "" &&
    dadosPet.idade != "" &&
    dadosPet.genero != "" &&
    dadosPet.tipo != "" &&
    dadosPet.raca
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    novoPet.nome = novoPet.nome.toString();
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
  } else {
    console.log("Ops, insira um objeto válido!");
  }
};

// adicionarPet({
//   nome: "Costelinha",
//   tipo: "cão",
//   raca: "vira-lata",
//   idade: "6a",
//   genero: "M"
// });

// adicionarPet("scooby");

// const quantidadeVacina = bancoDeDados => {
//   let quantidadeTrue = 0;
//   let quantidadeFalso = 0;
//    for (let i = 0; i < bancoDeDados.length; i++){
//        if (!bancoDeDados[i].vacinado) {
//            quantidadeFalso+=1;
//        } else {
//            quantidadeTrue+=1;
//        };
//    };
//    console.log(`Foram encontrados ${quantidadeFalso} pets não vacinados e foram encontrados ${quantidadeTrue} pets vacinados.`);
// };

// const campanhaVacina = (bancoDeDados, vacinarPet) => {
//   let vacinadosNaCampanha = 0;
//   for (let i = 0; i < bancoDeDados.length; i++){
//       if (!bancoDeDados[i].vacinado) {
//       vacinadosNaCampanha+=1
//       vacinarPet(i);
//       };
//   };
//   console.log(`${vacinadosNaCampanha} pets foram vacinados nessa campanha.`);
// };

const campanhaVacina = () =>{
  let vacinados = pets.filter(pet => pet.vacinado).length;
  let naoVacinados = pets.filter(pet => !pet.vacinado).length;

  console.log(`
  ---------------------
Temos ${vacinados} pets vacinados.
Temos ${naoVacinados} pets NÃO vacinados.
  ---------------------
  `);
};

// const campanhaVacina = () =>{
//   console.log(Campanha de nacina 2020 \n )
// }

const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com pêlo aparado!`);
};

const darBanhoPet = pet => {
  pet.servicos.push("banho");
  console.log(`${pet.nome}está de banho tomado!`);
};

const cortarUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome} cortou as unhas!`);
};

const atenderPet = (pet, ...servicos) => {
  console.log(`Bem vindo ${pet.nome}`);
  for (let i = 0; i < servicos.length; i++) {
    servicos[i](pet);
  }

  const pagar = () => {
    console.log("Pagamento realizado com suce$$o!");
  };

  pagar();

  console.log("Volte sempre!");
};

const listarPetPeloNome = nome =>{
  if(validarDados(nome)){
    let buscarNome = pets.filter(pet => pet.nome);
    return pets.nome = nome;
  }else{
    console.log("O pet nao foi encontrado");
  }
}

// atenderPet(pets[0], cortarUnhasPet, tosarPet, darBanhoPet);
listarPetPeloNome("Batman");