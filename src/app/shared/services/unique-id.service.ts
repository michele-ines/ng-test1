import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UniqueIdService {

  // Número de identificadores gerados até o momento
  private numberOfGeneratedIds = 0;

  // Método público para gerar um identificador único com prefixo
  public generateUniqueIdWithPrefix(prefix: string): string {

    // Verifica se o prefixo não é vazio
    if (!prefix) {

      // Lança um erro se o prefixo for vazio
      throw Error ('Prefix can note be empty');
     }

    // Gera um identificador único usando o método generateUniqueId()
    const uniqueId = this.generateUniqueId();

    // Incrementa o contador de identificadores gerados
    this.numberOfGeneratedIds++;

    // Retorna o identificador único com o prefixo
    return `${prefix}-${uniqueId}`;
  }

  // Método público para obter o número de identificadores gerados
  public getNumberOfGenerateUniqueIds(): number {

    // Retorna o número de identificadores gerados
    return this.numberOfGeneratedIds
  }

  // Método privado para gerar um identificador único
  private generateUniqueId(): string {

    // Retorna um identificador único usando a função uuidv4()
    return uuidv4();
  }
}
