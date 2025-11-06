class tarefa{
    id: number;
    nome: string;
    descricao: string;

    private static proximoID = 1;

    constructor(nome:string, descricao:string){
        this.id = tarefa.proximoID++;
        this.nome = nome;
        this.descricao = descricao;
        
    }
    
}