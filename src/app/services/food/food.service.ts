import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAlllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll()
      :
      this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 3 },
      { name: 'Pizza', count: 4 },
      { name: 'Lunch', count: 6 },
      { name: 'SlowFood', count: 5 },
      { name: 'Burger', count: 2 },
      { name: 'Sandwitch', count: 2 },
      { name: 'Meetbowl', count: 2 },
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chicken Pizza',
        price: 200,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia ', 'middle east ', 'china ', 'Pizza '],
        stars: 4.0,
        imageUrl: '/assets/food1.jpg',
        tags: ['SlowFood', 'FastFood', 'Pizza']
      },
      {
        id: 2,
        name: 'Beef Spicy Pizza',
        price: 300,
        cookTime: '25-35',
        favorite: true,
        origins: ['persia ', 'bangladesh ', 'china '],
        stars: 3.8,
        imageUrl: '/assets/food2.jpg',
        tags: ['SlowFood', 'Lunch', 'Pizza']
      },
      {
        id: 3,
        name: 'Matton Pizza',
        price: 400,
        cookTime: '20-30',
        favorite: true,
        origins: ['Pakistan', 'middle east', 'India '],
        stars: 4.5,
        imageUrl: '/assets/food3.jpg',
        tags: ['Pizza', 'Lunch']
      },
      {
        id: 4,
        name: 'Vegitable Spicy Pizza',
        price: 150,
        cookTime: '20-30',
        favorite: true,
        origins: ['dhaka', 'middle east', 'uganda'],
        stars: 2.2,
        imageUrl: '/assets/food4.jpg',
        tags: ['breakfast', 'Lunch', 'Pizza']
      },
      {
        id: 5,
        name: 'Chicken Spicy Burger',
        price: 250,
        cookTime: '30-35',
        favorite: true,
        origins: ['dhaka ', 'india ', 'china '],
        stars: 4.9,
        imageUrl: '/assets/food5.jpg',
        tags: ['Burger', 'SlowFood', 'Lunch']
      },
      {
        id: 6,
        name: 'Beef Burger',
        price: 200,
        cookTime: '28-33',
        favorite: true,
        origins: ['pakistan', 'middle east', 'dubai'],
        stars: 1.7,
        imageUrl: '/assets/food6.jpg',
        tags: ['Burger', 'FastFood']
      },
      {
        id: 7,
        name: 'Meetbowl Chicken',
        price: 100,
        cookTime: '15-20',
        favorite: false,
        origins: ['bangladesh', 'dubai', 'china'],
        stars: 4.5,
        imageUrl: '/assets/food7.jpg',
        tags: ['Dinner', 'Meetbowl']
      },
      {
        id: 8,
        name: 'Meetbowl Spicy Vegitable',
        price: 150,
        cookTime: '20-25',
        favorite: false,
        origins: ['persia', 'middle east', 'china'],
        stars: 3.2,
        imageUrl: '/assets/food8.jpg',
        tags: ['Meetbowl', 'FastFood']
      },
      {
        id: 9,
        name: 'Sandwitch Chicken',
        price: 200,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 5.0,
        imageUrl: '/assets/food9.jpg',
        tags: ['SlowFood', 'Lunch', 'Sandwitch']
      },
      {
        id: 10,
        name: 'Sandwitch Spicy Vegitable',
        price: 150,
        cookTime: '15-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/food10.jpg',
        tags: ['Sandwitch', 'SlowFood', 'Lunch']
      },
    ]
  }
}