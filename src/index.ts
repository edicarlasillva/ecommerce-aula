import { User } from "./models/User";
import { Product, PromotionalProduct } from "./models/Products";
import { comments } from "./database/comments";
import { Rating } from "./models/Rating";

const user01 = new User(
  "Mona",
  "MonaTechHelperFodão",
  "mona_grodew_pica_da_galaxia@growdev.com"
);
const user02 = new User(
  "Jean",
  "MonaTechHelperFodão",
  "mona_grodew_pica_da_galaxia@growdev.com"
);

const product1 = new Product("produto1", 1);
const product2 = new Product("produto2", 2);
const product3 = new Product("produto3", 3);
const product4 = new PromotionalProduct("Produto1", 100, 4.99)

user01.addToCart(product1);
user01.addToCart(product3);
user01.removeFromCart(product3);
user01.showProducts();
user01.addComment("Produto ruim nao gostei!", product1);
user02.addComment("Produto muito bom!", product1);

product1.show();
console.log("------");
product1.showDetails();


user01.updateComment(comments[0].id, "menti, mó bom o produto, foi mal.")
product1.showDetails();

user01.deleteComment(comments[0].id)

user01.addRating(4, product1)

product1.showDetails();

product4.show();


// console.log("Users Database:", JSON.stringify(users, null, 2));
