import { randomUUID } from "crypto";
import { User } from "./User";
import { ratings } from "../database/ratings"

export class Rating {
  private _id: string
  constructor(private _rate: number, private user: User, private _productId: string) {
    this._id = randomUUID();
    ratings.push(this);
  }

  get id(): string {
    return this._id
  }

  get productId(): string {
    return this._productId
  }

  show(): void {
    console.log(`Usuário: ${this.user.name} | Avaliação: ${this._rate}`);
  }
}
