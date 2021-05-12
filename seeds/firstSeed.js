exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: "burger", 
          price: 2500 , 
          description: "tasty burger made with Kobe beef and pineapple and teriyaki sauce", 
          image_filepath: "../src/assets/190524-classic-american-cheeseburger-ew-207p-2870431.jpg",
          product_id: "prod_JT7OrX5ZX6B512"
        },
        {
          name: "chicken sandwich", 
          price: 2200 , 
          description: "served with lettuce, onion, pickle, and drizzled in our original sauce", 
          image_filepath: "../src/assets/",
          product_id: "prod_JT7QrYJ16rASCa"
        },
        {
          name: "jam", 
          price: 900 , 
          description: "hand-made jam with local fruits produced by dedicated artisan", 
          image_filepath: "../src/assets/burger-sauce-fb-ig-5-scaled.jpg",
          product_id: "prod_JT7QqW1uqY97DX"
        },
        {
          name: "pickles", 
          price: 1200 , 
          description: "Fermented pickles with vinegar imported from Italy", 
          image_filepath: "../src/assets/dill-pickles-14132-1.jpg",
          product_id: "prod_JT7RjgMiHRrlpg"
        },
        {
          name: "french fries", 
          price: 500 , 
          description: "made fresh daily, salted with sea salt", 
          image_filepath: "../src/assets/",
          product_id: "prod_JT7SceE9y37dSO"
        },
        {
          name: "curly fries", 
          price: 600 , 
          description: "made fresh daily, seasoned with our original seasoning", 
          image_filepath: "../src/assets/",
          product_id: "prod_JT7SQ0hLVieiJl"
        },
        {
          name: "brownie", 
          price: 500 , 
          description: "delicious homemade fudge brownies", 
          image_filepath: "../src/assets/",
          product_id: "prod_JT7TyzN2nOWaNr"
        }
      ]).then(() => {
        return knex('users').del()
        .then(function () {
          return knex('users').insert([
          {
            userName: "bigrigs", 
            fullName: "Jim Riggs", 
            address: "512 Honk Honk Ln.",
            role: "merchant"
          },
          {
            userName: "catburger", 
            fullName: "Tiger Beef", 
            address: "The alley behind your house",
            role: "user"
          },
          {
            userName: "frillylily123", 
            fullName: "Janet Planet", 
            address: "645 Main St, Apt D",
            role: "user"
          }
          ]).then(() => {
            return knex('orders').del()
            .then(function () {
              return knex('orders').insert([
              {
                // userId: "3958d206-5d84-4c35-b1f1-84fec28b794c",
                items: [{product: "burger", quantity: 3}, {product: "curly fries", quantity: 1}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "6500",
                status: "pending",
                timestamp: "2016-06-22 19:10:25+09"
              },
              {
                // userId: "3567d206-5d84-4c35-b1f1-84fec28b789d",
                items: [{product: "burger", quantity: 3}, {product: "curly fries", quantity: 1}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "2300",
                status: "complete",
                timestamp: "2076-07-22 21:10:25+09"
              },
              {
                // userId: "3878d206-5d84-4c35-b1f1-84fec28b798b",
                items: [{product: "burger", quantity: 7}, {product: "brownie", quantity: 10}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "23450",
                status: "pending",
                timestamp: "2056-06-22 19:24:25+09"
              }
          ]);
         });
       });
     });
   });
 });
};
