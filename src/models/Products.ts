import { randomUUID } from "crypto";
import { comments } from "../database/comments";
import { products } from "../database/products";
import { Rating } from "./Rating";
import { ratings } from "../database/ratings";

export class Product {
  private _id: string;

  constructor(protected name: string, protected _value: number) {
    this._id = randomUUID();
    products.push(this);
  }

  get id(): string {
    return this._id;
  }

  get value(): number {
    return this._value
  }

  show(): void {
    console.log(`Produto: ${this.name}, Valor: ${this.value}`);
  }

  showDetails(): void {
    this.show();
    const result = comments.filter((comment) => comment.productId === this._id);
    result.forEach((comment) => comment.show());

    const result2 = ratings.filter((rating) => rating.productId === this._id);
    result2.forEach((rating) => rating.show());
  }
}

export class PromotionalProduct extends Product {
  constructor(name: string, value: number, public discountRate: number) {
    super(name, value)
  }

  show(): void {
    console.log(`Valor do produto: R$ ${this.value} recebeu um desconto ${this.discountRate}, Valor Final: R$ ${(this.value * (100 - this.discountRate) / 100).toFixed(2)}`)
  }
}


