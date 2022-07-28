import { CartItem } from "./CartItem";

export class Cart {
    items: CartItem[] = [];

    get totalPrice():number {
       let totPrice = <any>0
       this.items.forEach(item => {
        totPrice += item.price
       })
       return totPrice;
    }
}


// import { CartItem } from "./CartItem";

// export class Cart {
//     items: CartItem[] = [];

//     get totalPrice():number{
//         let totalPrice = 0;
//         this.items.forEach(item => {
//             totalPrice += item.price
//         })
//         return totalPrice;
//     }
// }