export class Pokemon{
  constructor(
    public id: number,
    public nome: string,
    public  url: string,
    public  audio: string,
    public descricao: string,
    public elemento:string,
    public nivel: number,
    public xpAtual: number,
    public xpParaProximoNivel: number,
    public hp: number,
    public ataque: number,
    public defesa: number,
    public ataqueEspecial: number,
    public defesaEspecial: number

  ) {}


}
