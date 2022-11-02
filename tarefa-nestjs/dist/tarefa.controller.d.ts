import { Tarefa } from './tarefa.entity';
import { TarefaService } from './tarefa.service';
export declare class TarefaController {
    private tarefaService;
    constructor(tarefaService: TarefaService);
    listaTarefa(): Promise<Tarefa[]>;
    salvarTarefa(tarefa: any): Promise<string>;
    buscarPorCodigo(parametro: any): Promise<Tarefa>;
    excluirTarefa(parametro: any): Promise<string>;
}
