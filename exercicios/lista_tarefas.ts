interface Tarefa {

  id: number;
  titulo: string;
  descricao: string;
  dataCadastro: string;
  status: Status;

}

enum Status {

  Andamento = "Andamento",
  Concluido = "Concluído",
  Cancelada = "Cancelada"

}

const tarefas: Tarefa[] = []

// validar se existe outra tarefa cadastrada com o mesmo nome
const validarExisteOutraTarefaMesmoNome = (nomeTarefa: string): boolean => {
  let existe: boolean = false

  tarefas.forEach((tarefaValidar: Tarefa) => {

    if (tarefaValidar.titulo == nomeTarefa) {
      existe = true
    }

  })

  return existe
}

// cadastrar tarefa
const cadastrar = (tarefaCadastrar: Tarefa): void => {

  if (validarExisteOutraTarefaMesmoNome(tarefaCadastrar.titulo)) {

    throw Error("Já existe outra tarefa cadastrada com esse título!")
  }

  let idUltimaTarefa: number = 0

  if (tarefas.length == 0) {
    idUltimaTarefa = 1
  } else {
    const ultimaTarefa: Tarefa | undefined = tarefas[ tarefas.length - 1 ]

    if (ultimaTarefa == undefined) {
      idUltimaTarefa = 1
    } else {
      idUltimaTarefa = ultimaTarefa.id + 1
    }

  }

  tarefaCadastrar.id = idUltimaTarefa

  tarefas.push(tarefaCadastrar)

  console.log("Tarefa cadastrada com sucesso!")
}

// apresentar todas as tarefas
const apresentarTarefas = (): void => {

  if (tarefas.length == 0) {
    console.log("Não existem tarefas cadastradas na base de dados.")
  } else {

    tarefas.forEach((tarefa: Tarefa): void => {
      console.log(tarefa.id)
      console.log(tarefa.titulo)
      console.log(tarefa.descricao)
      console.log(tarefa.dataCadastro)
      console.log(tarefa.status)
    })

  }

}

// alterar status da tarefa
const alterarStatusTarefa = (idTarefa: number, novoStatus: Status): void => {

  if (tarefas.length == 0) {
    console.log("Não existem tarefas cadastradas.")
  } else {

    for (let i: number = 0; i < tarefas.length; i++) {
      const tarefa: Tarefa | undefined = tarefas[ i ]

      if (tarefa != undefined) {

        if (tarefa.id == idTarefa) {
          tarefa.status = novoStatus

          console.log("Status alterado com sucesso! para " + novoStatus)
        }

      }

    }

  }

}

// deletar uma tarefa
const deletarTarefa = (idTarefa: number): void => {

  if (tarefas.length == 0) {
    console.log("Não existem tarefas cadastradas!")

    return
  }

  let indiceTarefaRemover: number = -1

  for (let i: number = 0; i < tarefas.length; i++) {
    const tarefa: Tarefa | undefined = tarefas[ i ]

    if (tarefa?.id == idTarefa) {
      indiceTarefaRemover = i
    }

  }

  if (indiceTarefaRemover >= 0) {
    tarefas.slice(indiceTarefaRemover, 1)

    console.log("Tarefa deletada com sucesso!")
  } else {
    console.log("Não existe uma tarefa cadastrada com esse id na base!")
  }
  
}

// filtrar tarefas pelo status
function filtrarPorStatus(statusFiltro: Status): Tarefa[] {

  if (tarefas.length == 0) {

    return []
  }

  return tarefas.filter((tarefa: Tarefa) => {

    return tarefa.status == statusFiltro
  })
}

// apresentar os dados da tarefa
function apresentarDadosTarefa({ id, titulo, descricao, dataCadastro, status }: Tarefa): void {
  console.log("=================================================")
  console.log(`Id: ${ id }`)
  console.log(`Título: ${ titulo.toUpperCase() }`)
  console.log(`Descrição: ${ descricao }`)
  console.log(`Data de cadastro: ${ dataCadastro }`)
  console.log(`Status: ${ status.toUpperCase() }`)
}

try {

  const primeiraTarefa: Tarefa = {
    id: 0,
    titulo: "Primeira tarefa",
    descricao: "Descrição da primeira tarefa!",
    dataCadastro: "11/02/2020",
    status: Status.Andamento
  }

  cadastrar(primeiraTarefa)

  apresentarTarefas()

  alterarStatusTarefa(1, Status.Cancelada)

  apresentarTarefas()

  const segundaTarefa: Tarefa = {
    id: 0,
    titulo: "Tarefa de teste 2",
    dataCadastro: "11/02/2019",
    descricao: "Descrição da segunda tarefa de teste",
    status: Status.Andamento
  }

  cadastrar(segundaTarefa)

  apresentarTarefas()

  deletarTarefa(1)

  apresentarTarefas()

  console.log("Tarefas em andamento:")
  const tarefasAndamento: Array<Tarefa> = filtrarPorStatus(Status.Andamento)

  console.log(tarefasAndamento)

  for (let contadorTarefasCadastrar: number = 0; contadorTarefasCadastrar < 100; contadorTarefasCadastrar++) {

    const tarefa: Tarefa = {
      id: 0,
      titulo: "Tarefa " + (contadorTarefasCadastrar + 1),
      descricao: "Descrição da tarefa: " + (contadorTarefasCadastrar + 1),
      dataCadastro: "11/02/2020",
      status: contadorTarefasCadastrar % 2 == 0 ? Status.Andamento : Status.Concluido
    }

    cadastrar(tarefa)
  }

  const tarefasConcluidas: Tarefa[] = filtrarPorStatus(Status.Concluido)
  
  console.log(tarefasConcluidas)

  tarefasConcluidas.forEach(function (tarefa: Tarefa) {
    apresentarDadosTarefa(tarefa)
  })
} catch (e) {
  console.log(e)
}