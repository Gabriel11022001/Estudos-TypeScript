var Status;
(function (Status) {
    Status["Andamento"] = "Andamento";
    Status["Concluido"] = "Conclu\u00EDdo";
    Status["Cancelada"] = "Cancelada";
})(Status || (Status = {}));
var tarefas = [];
// validar se existe outra tarefa cadastrada com o mesmo nome
var validarExisteOutraTarefaMesmoNome = function (nomeTarefa) {
    var existe = false;
    tarefas.forEach(function (tarefaValidar) {
        if (tarefaValidar.titulo == nomeTarefa) {
            existe = true;
        }
    });
    return existe;
};
// cadastrar tarefa
var cadastrar = function (tarefaCadastrar) {
    if (validarExisteOutraTarefaMesmoNome(tarefaCadastrar.titulo)) {
        throw Error("Já existe outra tarefa cadastrada com esse título!");
    }
    var idUltimaTarefa = 0;
    if (tarefas.length == 0) {
        idUltimaTarefa = 1;
    }
    else {
        var ultimaTarefa = tarefas[tarefas.length - 1];
        if (ultimaTarefa == undefined) {
            idUltimaTarefa = 1;
        }
        else {
            idUltimaTarefa = ultimaTarefa.id + 1;
        }
    }
    tarefaCadastrar.id = idUltimaTarefa;
    tarefas.push(tarefaCadastrar);
    console.log("Tarefa cadastrada com sucesso!");
};
// apresentar todas as tarefas
var apresentarTarefas = function () {
    if (tarefas.length == 0) {
        console.log("Não existem tarefas cadastradas na base de dados.");
    }
    else {
        tarefas.forEach(function (tarefa) {
            console.log(tarefa.id);
            console.log(tarefa.titulo);
            console.log(tarefa.descricao);
            console.log(tarefa.dataCadastro);
            console.log(tarefa.status);
        });
    }
};
// alterar status da tarefa
var alterarStatusTarefa = function (idTarefa, novoStatus) {
    if (tarefas.length == 0) {
        console.log("Não existem tarefas cadastradas.");
    }
    else {
        for (var i = 0; i < tarefas.length; i++) {
            var tarefa = tarefas[i];
            if (tarefa != undefined) {
                if (tarefa.id == idTarefa) {
                    tarefa.status = novoStatus;
                    console.log("Status alterado com sucesso! para " + novoStatus);
                }
            }
        }
    }
};
// deletar uma tarefa
var deletarTarefa = function (idTarefa) {
    if (tarefas.length == 0) {
        console.log("Não existem tarefas cadastradas!");
        return;
    }
    var indiceTarefaRemover = -1;
    for (var i = 0; i < tarefas.length; i++) {
        var tarefa = tarefas[i];
        if ((tarefa === null || tarefa === void 0 ? void 0 : tarefa.id) == idTarefa) {
            indiceTarefaRemover = i;
        }
    }
    if (indiceTarefaRemover >= 0) {
        tarefas.slice(indiceTarefaRemover, 1);
        console.log("Tarefa deletada com sucesso!");
    }
    else {
        console.log("Não existe uma tarefa cadastrada com esse id na base!");
    }
};
// filtrar tarefas pelo status
function filtrarPorStatus(statusFiltro) {
    if (tarefas.length == 0) {
        return [];
    }
    return tarefas.filter(function (tarefa) {
        return tarefa.status == statusFiltro;
    });
}
// apresentar os dados da tarefa
function apresentarDadosTarefa(_a) {
    var id = _a.id, titulo = _a.titulo, descricao = _a.descricao, dataCadastro = _a.dataCadastro, status = _a.status;
    console.log("=================================================");
    console.log("Id: ".concat(id));
    console.log("T\u00EDtulo: ".concat(titulo.toUpperCase()));
    console.log("Descri\u00E7\u00E3o: ".concat(descricao));
    console.log("Data de cadastro: ".concat(dataCadastro));
    console.log("Status: ".concat(status.toUpperCase()));
}
try {
    var primeiraTarefa = {
        id: 0,
        titulo: "Primeira tarefa",
        descricao: "Descrição da primeira tarefa!",
        dataCadastro: "11/02/2020",
        status: Status.Andamento
    };
    cadastrar(primeiraTarefa);
    apresentarTarefas();
    alterarStatusTarefa(1, Status.Cancelada);
    apresentarTarefas();
    var segundaTarefa = {
        id: 0,
        titulo: "Tarefa de teste 2",
        dataCadastro: "11/02/2019",
        descricao: "Descrição da segunda tarefa de teste",
        status: Status.Andamento
    };
    cadastrar(segundaTarefa);
    apresentarTarefas();
    deletarTarefa(1);
    apresentarTarefas();
    console.log("Tarefas em andamento:");
    var tarefasAndamento = filtrarPorStatus(Status.Andamento);
    console.log(tarefasAndamento);
    for (var contadorTarefasCadastrar = 0; contadorTarefasCadastrar < 100; contadorTarefasCadastrar++) {
        var tarefa = {
            id: 0,
            titulo: "Tarefa " + (contadorTarefasCadastrar + 1),
            descricao: "Descrição da tarefa: " + (contadorTarefasCadastrar + 1),
            dataCadastro: "11/02/2020",
            status: contadorTarefasCadastrar % 2 == 0 ? Status.Andamento : Status.Concluido
        };
        cadastrar(tarefa);
    }
    var tarefasConcluidas = filtrarPorStatus(Status.Concluido);
    console.log(tarefasConcluidas);
    tarefasConcluidas.forEach(function (tarefa) {
        apresentarDadosTarefa(tarefa);
    });
}
catch (e) {
    console.log(e);
}
export {};
//# sourceMappingURL=lista_tarefas.js.map