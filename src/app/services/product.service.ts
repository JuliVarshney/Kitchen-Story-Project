import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Properties
  private products: Array<Product> = [];
  private productCount:number;

  //Constructor
  constructor() {
    this.products = this.setAllProducts();
    this.productCount = this.products.length;
  }

  //Methods
  addProduct(product:Product){
    this.products.push(product);
    this.productCount = this.products.length;
  }

  removeProductById(productId:number){
    this.products = this.products.filter(item => item.productId !== productId);
    this.productCount = this.products.length;
  }
  /* *******************************************
   * Method Name: getProductById()
   * Access Type: public
   * Input Parameters: Product ID number
   * Return Type: Product object
   * Purpose: Will search the Products array and extract the target Product by Product ID
   *          Usually this would come from the database and backend, but for this version, let's filter the data here
   * ******************************************* */
  getProductById(id:number):Product{
    return this.getAllProducts().find(product => product.productId == id)!;
  }

  /* *******************************************
   * Method Name: getAllProductsBySearchTerm()
   * Access Type: public
   * Input Parameters: String for the search term
   * Return Type: Product[] array
   * Purpose: Find all products that satisfy the search term
   * ******************************************* */
  getAllProductsBySearchTerm(searchTerm:string):Product[]{
    return this.getAllProducts().filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  /* *******************************************
   * Method Name: getAllTags()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Tag[] array
   * Purpose: Retrieving all the tag names and associated counts.
   *         Ideally this information would come from the database. For this version, let's hard code the data
   * ******************************************* */
  getAllTags():Tag[]{

    return [
        {name:"All", count:this.productCount},
        {name: "herbs", count: 3},
        {name: "produce", count: 7},
        {name: "vegetables", count: 5},
        {name: "bread", count: 1},
        {name: "pantry", count: 5},
        {name: "dressing", count: 1},
        {name: "milk", count: 2},
        {name: "curd", count: 1},
        {name: "non-dairy", count: 1},
        {name: "Spices", count: 1},
        {name: "fruit", count: 2},
        {name: "vegetarian", count: 0},
        {name: "nuts", count: 1},
        {name: "bulk", count: 1},
        {name: "salad greens", count: 1},
        {name: "meat", count: 1},
        {name: "frozen", count: 0},
        {name: "water", count: 2},
        {name: "beverages", count: 5},
        {name: "poultry", count: 1},
        {name: "dairy", count: 2},
        {name: "free-range", count: 2},
        {name: "snack", count: 7},
        {name: "dried goods", count: 3},
        {name: "rice", count: 1},
        {name: "cereal", count: 1},
        {name: "seafood", count: 1},
        {name: "eggs", count: 1}
    ];
  }

  /* *******************************************
   * Method Name: getAllProductsByTag()
   * Access Type: public
   * Input Parameters: String with the target tag
   * Return Type: Product[] array
   * Purpose: Return allof the Products that have the desired tag
   * ******************************************* */
  getAllProductsByTag(tag:string):Product[]{

    //let's use the ternary operator :-)
    return (tag == "All") ?
            this.getAllProducts() :
            this.getAllProducts().filter(product => product.tags?.includes(tag));
  }

  /* *******************************************
   * Method Name: getAllProducts()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Product[] array
   * Purpose: Returns a hard-coded array of Product Objects
   *          Once the backend functionality is in place, the products will be stored in the database
   * ******************************************* */
  getAllProducts(): Product[]{
    return this.products;
  }

  getAllProductsCount():number{
    return this.products.length;
  }

  /* *******************************************
   * Method Name: setAllProducts()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Product[] array
   * Purpose: Returns a hard-coded array of Product Objects
   *          Once the backend functionality is in place, the products will be stored in the database
   * ******************************************* */
  setAllProducts(): Product[]{
    return [
      {
        productId:1,
        imageUrl: "/assets/images/palak-gaddi3.jpg",
        productName: "Spinach (Palak)- 200gm",
        price: 30,
        brand: "H‑E‑B Organics",
        rating: 3,
        numOfReviews: 715,
        description: "Palak are many ways to prepare dishes. You can buy it canned or fresh and eat it cooked or raw. It’s delicious either on its own or in other dishes. It can to improve oxidative stress, eye health, and blood pressure, improve eye health, and help prevent heart disease and cancer.",
        organic: true,
        tags: ["herbs", "produce"]
    },
    {
        productId:2,
        imageUrl: '/assets/images/Corriander-Leaves.jpg',
        productName: 'Organic Coriander- 50gm',
        price: 18,
        brand: 'H‑E‑B Organics',
        rating: 4,
        numOfReviews: 645,
        description: "Coriander leaves are green, fragile with a decorative appearance. They contain minimal aroma and have a spicy sweet taste. Now do not bother wasting time cutting off the roots as we value your money and time and provide you the freshest leafy edible parts .",
        organic: true,
        tags: ["herbs", "produce"]
    },
    {
        productId:3,
        imageUrl: '/assets/images/White Bread.jpg',
        productName: 'White Bread- (700gm)',
        price: 50,
        brand: "Harvest Gold",
        rating: 4,
        numOfReviews: 165,
        description: "Oven fresh and baked to perfection, using only the finest ingredients, this 700gm large White Bread loaf is very popular with families.",
        organic: true,
        tags: ['bread']
    },
    {
        productId:4,
        imageUrl: '/assets/images/Olive Oil3.jpg',
        productName: 'Figaro Olive Oil 200 ml',
        price: 335,
        brand: 'Figaro',
        rating: 5,
        numOfReviews: 542,
        description: "Figaro Olive Oil is made using the best quality handpicked olives. It adds a healthy and fine taste to your food. It is the perfect oil for salad dressing and seasoning. It is recommended for raw/cold usage or used as a finishing condiment. Buy Figaro Olive Oil online now!",
        organic: false,
        tags: ['pantry', 'dressing']
    },
    {
        productId:5,
        imageUrl: '/assets/images/amul.jpg',
        productName: 'Amul Taaza Homogenised Toned Milk 1 L (Tetra Pak)',
        price: 69,
        brand: 'Amul',
        rating: 4,
        numOfReviews: 785,
        description: "Milk is the most common dairy product that is used every day by almost everyone. Consume directly or add to your breakfast cereal, daily tea/coffee, milkshake and smoothies or other baked goods, desserts and puddings. So go ahead and buy Amul Taaza Homogenised Toned Milk online today.",
        organic: false,
        tags: ['milk', 'dairy', 'beverages']
    },
    {
        productId:6,
        imageUrl: '/assets/images/oranges.webp',
        productName: 'Fresh Oranges- 500gm',
        price: 35,
        brand: '',
        rating: 3,
        numOfReviews: 213,
        description: "Oranges are a type of healthy, low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.",
        organic: false,
        tags: ['fruit', 'snack']
    },
    {
        productId:7,
        imageUrl: '/assets/images/haldiram-namkeen-bhujia.webp',
        productName: 'Haldiram Bhujia Namkeen- 400gm',
        price: 98,
        brand: 'Haldiram',
        rating: 4,
        numOfReviews: 506,
        description: "Bhujia is a popular crispy snack and is prepared by using besan and spices, originating from, Bikaner, a town in the western state of Rajasthan in India.",
        organic: false,
        tags: ['pantry', 'namkeen', 'bulk', 'snack']
    },
    {
        productId:8,
        imageUrl: '/assets/images/potato2.webp',
        productName: 'Potatoes (Aaloo)- 1kg',
        price: 25,
        brand: '',
        rating: 3.5,
        numOfReviews: 475,
        description: "potatoes are medium to large in size and are oblong to oval, long, and somewhat uniform in shape. The semi-smooth skin is pale yellow to light gold with some brown specks and spots. There are also many shallow, dark brown eyes covering the surface. The flesh is deep yellow and is firm, smooth, low in moisture, and low in sugar. potatoes are mild and earthy with a floury, fluffy, and starchy texture.",
        organic: true,
        tags: ['herbs', 'vegetables', 'produce']
    },
    {
        productId:9,
        imageUrl: '/assets/images/english-cucumber.jpg',
        productName: 'Fresh Seedless Cucumber- 500gm',
        price: 42,
        brand: '',
        rating: 3.5,
        numOfReviews: 96,
        description: "Seedless Cucumbers are generally sweeter than a regular cucumber, which has large seeds. Great for salads, snacking and dipping",
        organic: false,
        tags: ['vegetables', 'produce', 'snack','salad greens']
    },
    {
        productId:10,
        imageUrl: '/assets/images/amul-dark-chocolate.jpg',
        productName: 'Amul Dark Chocolate- 55% Rich In Cocoa, 150 g Carton',
        price: 110,
        brand: 'Amul',
        rating: 4,
        numOfReviews: 987,
        description: "Amul Dark Chocolate is made with the finest ingredients and rich cocoa. Its strong flavour and silky texture is just what you need to fall in love with pure cocoa for its authentice taste.",
        organic: false,
        tags: ['milk', 'non-dairy','beverages']
    },
    {
        productId:11,
        imageUrl: '/assets/images/amul-dahi.webp',
        productName: 'Amul Masti Dahi Plain Curd  (400 g)',
        price: 34,
        brand: 'Amul',
        rating: 4,
        numOfReviews: 315,
        description: "Delicious and nutritious. Ideal meal time accompaniment. Can be used in the preparation of Lassi, Dahi Wada, etc.",
        organic: false,
        tags: ['curd', 'dairy', 'beverages']
    },
    {
        productId:12,
        imageUrl: '/assets/images/gobi.webp',
        productName: 'Gobi cauliflower vegetables- 1kg',
        price: 40,
        brand: '',
        rating: 4,
        numOfReviews: 642,
        description: "Cauliflower is an excellent source of vitamin C, vitamin K, folate, pantothenic acid, and vitamin B6. It is a very good source of choline, dietary fiber, omega-3 fatty acids, manganese, phosphorus, and biotin.",
        organic: true,
        tags: ['vegetables', 'green vegetables']
    },
    {
        productId:13,
        imageUrl: '/assets/images/apple.webp',
        productName: 'Fresh Apple Fruit, Indian- 1kg',
        price: 160,
        brand: '',
        rating: 4,
        numOfReviews: 412,
        description: "Apples are also known as nutritional powerhouse as it is associated with better health and prevention of various diseases. Vitamins found in apples helps to maintain red blood cells and nervous system. The fruit is free of fat, cholesterol and sodium and contains low amount of calories. Various vitamins and minerals such as folate, potassium, niacin, and Vitamin C, B, K and E are present in this fruit.",
        organic: true,
        tags: ['fruit', 'produce', 'snack']
    },
    {
        productId:14,
        imageUrl: '/assets/images/hide-and-seek-creme-sandwich-biscuits.jpg',
        productName: 'Parle Hide & Seek 4 Fun Flavours Choco Chip Creme Sandwich Biscuits 400 g',
        price: 75,
        brand: 'Parle',
        rating: 4.5,
        numOfReviews: 198,
        description: "Parle Hide & Seek 4 Fun Flavours Choco Chip Creme Sandwich Biscuits is incredibly tasty, and with four fun flavours to choose from, each bite will leave you wanting for more. It is made from the finest quality ingredients and its hygienic packaging ensures that the product remains fresh over a long period of time. So go ahead, buy Parle Hide & Seek 4 Fun Flavours Choco Chip Creme Sandwich Biscuits online today!",
        organic: false,
        tags: ['biscuits', 'parle','Hide and seeks','choco chip']
    },
    {
        productId:15,
        imageUrl: '/assets/images/parle_monaco_biscuits.jpg',
        productName: 'Parle Monaco Biscuits 200g + 50g Extra',
        price: 38,
        brand: 'Parle',
        rating: 3.5,
        numOfReviews: 130,
        description: "Parle Monaco Salted is the perfect accompaniment to a cup of tea, especially for those who are not fond of sweet biscuits. Each biscuit is baked to perfection, is light, crunchy, and coated with an adequate quantity of salt so that it can be your favourite mid-morning or evening snack Launched in 1942, Monaco pioneered the salted cracker category and is truly an anytime brand.",
        organic: false,
        tags: ['biscuits', 'monaco']
    },
    {
        productId:16,
        imageUrl: '/assets/images/india-gate-basmati-rice-everyday.webp',
        productName: 'India Gate Basmati Rice Everyday, 5kg',
        price: 440,
        brand: 'India Gate',
        rating: 4.5,
        numOfReviews: 714,
        description: "India Gate Basmati Rice Everyday has extra-long and soft grains, perfect for Indian cuisine. India Gate Basmati Rice Every day is premium quality basmati rice from the best farms in India. These are aromatic rice with a sweet buttery flavour that tastes amazing with a variety of dals. Its exquisite taste sets it apart from other rice grains. Basmati rice has high fibre content as well as a lower glycemic index which makes it healthier than regular rice grains. ",
        organic: false,
        tags: ['pantry', 'rice', 'dried goods']
    },
    {
        productId:17,
        imageUrl: '/assets/images/catch-super-garam-masala.webp',
        productName: 'Catch Super Garam Masala - Adds Flavour & Aroma, 200gm Pouch',
        price: 88.2,
        brand: 'Catch',
        rating: 4,
        numOfReviews: 952,
        description: "Whether vegetarian or non-vegetarian, add an amazing flavour, colour, and aroma to your gravies and curries with Catch Super Garam Masala. It is made using spices sourced from prime spice-growing locations in India to ensure premium quality spice. Catch spices are packed using state-of-the-art equipment, ensuring minimal human contact. Catch Garam Masala is available in 1000g, 200g, 100g, and 16g packs, giving you the flexibility of purchasing as per your needs. Catch spices do not have any additional fillers, ensuring premium quality spice. ",
        organic: false,
        tags: ['Spices', 'Garam Masala']
    },
    {
        productId:18,
        imageUrl: '/assets/images/tomatoes.webp',
        productName: 'Fresh Tomato- Local (Loose), 1 kg',
        price: 60,
        brand: '',
        rating: 5,
        numOfReviews: 1500,
        description: "Local tomatoes are partly sour and partly sweet and contain many seeds inside which are edible. The red colour present in tomatoes is due to lycopene, an anti-oxidant.",
        organic: true,
        tags: ['vegetables', 'produce', 'snack']
    },
    {
        productId:19,
        imageUrl: '/assets/images/Onion1.webp',
        productName: 'Fresh Onion, 1kg',
        price: 50,
        brand: '',
        rating: 3.5,
        numOfReviews: 793,
        description: "Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups.",
        organic: true,
        tags: ['vegetables', 'produce']
    },
    {
        productId:20,
        imageUrl: '/assets/images/egg2.jpg',
        productName: 'Fresh Table White Eggs, Pack of 30',
        price: 220,
        brand: 'Henfruit',
        rating: 4,
        numOfReviews: 819,
        description: "Safe against bird flu these are quality eggs that are laid by hen fed veg feed enhanced with organic minerals like vitamin e and c to help your body core temperature to stay lower in summers",
        organic: true,
        tags: ['eggs', 'free-range']
    },
    {
        productId:21,
        imageUrl: '/assets/images/organic-free-range-chicken-breasts.webp',
        productName: 'Free Range Chicken Breasts',
        price: 109.16,
        brand: 'Wild Fork Chicken',
        rating: 4,
        numOfReviews: 827,
        description: "Our Organic Poultry is Always: Antibiotic Free, Free Range, Vegetarian Fed, and Non GMO Fed. Our organic chicken breasts are delicious, low in fat, and versatile. Like all Wild Fork organic products, our chicken breasts are raised without hormones or antibiotics, only Non-GMO vegetarian fed, and hatched in the US in free-range farms. We appreciate the dedicated partnerships we’ve formed with family-owned farms that provide an environment where animals can mature naturally. Plus, all animal handling practices are third-party validated, requiring that they have ample space, access to food, water and shelter, and are handled gently to minimize stress.",
        organic: true,
        tags: ['meat', 'free-range', 'poultry']
    },
    {
        productId:22,
        imageUrl: '/assets/images/Urad daal.webp',
        productName: 'Tata Sampann Urad Dal Whole, 1Kg',
        price: 201,
        brand: 'Tata Sampann',
        rating: 4.5,
        numOfReviews: 879,
        description: "Tata Sampann Whole Urad Dal is unpolished i.e., does not undergo artificial polishing with water, oil or leather, thereby, retaining its natural goodness and protein content. Known to be one of the natural sources of protein, Tata Sampann Urad Dal Whole provides consumers with a great vegetarian protein option. Tata Sampann dals are processed in the most hygienic conditions. The 5-Step Purity process ensures that Tata Sampann Urad Dal Whole grains are clean and uniform in appearance.",
        organic: true,
        tags: ['pantry', 'Dal', 'Lentils','dried goods']
    },
    {
        productId:23,
        imageUrl: '/assets/images/Raw-Food-Almond-food-Nut-Snack.webp',
        productName: 'Grocery Almonds- 200gm',
        price: 159,
        brand: 'Grocery',
        rating: 3,
        numOfReviews: 413,
        description: "A good source of fiber and 6 vitamins and minerals. Contains 14G of total fat per serving. Resealable bag for freshness. Steam pasteurized to maintain quality and safety without cooking. You'll enjoy foods with carefully chosen ingredients. We never use high fructose corn syrup, artificial flavors and hundreds of other synthetic ingredients that may be used in processed foods. ",
        organic: false,
        tags: ['nuts', 'snack']
    },
    {
        productId:24,
        imageUrl: '/assets/images/tata-sampann-organic-toor-dal.webp',
        productName: 'Tata Sampann Organic Toor Dal/Arhar Dal, 500gm',
        price: 155,
        brand: 'Tata Sampann',
        rating: 4.5,
        numOfReviews: 736,
        description: "Tata Sampann Organic Pulses are sourced from certified organic farms where no chemical fertilizers or pesticides are used. PRODUCE OF ORGANIC FARMING : Tata Sampann Organic Pulses are produced and processed as per NPOP standard of India and NOP UNPOLISHED: It does not undergo any artificial polishing with water, oil or leather thereby retaining its goodness and wholesomeness.",
        organic: true,
        tags: ['pantry', 'dried goods']
    },
    {
        productId:25,
        imageUrl: '/assets/images/bisleri-mineral-water.webp',
        productName: 'Bisleri Mineral Water, 2L Bottle',
        price: 30,
        brand: 'Bisleri',
        rating: 4.1,
        numOfReviews: 2654,
        description: "Every Bisleri product you pick up comes with the three essential Composition of quality, innovation and value. Bisleri is one of the most popular brands for bottled water. Bisleri follows a six-step stringent purification process which means that the water from Bisleri is pure and absolutely good for your health.",
        organic: false,
        tags: ['water', 'beverages']
    },
    {
        productId:26,
        imageUrl: '/assets/images/bisleri-water-jar.webp',
        productName: '20 Liter Bisleri Water Jar',
        price: 175,
        brand: 'Bisleri',
        rating: 4.3,
        numOfReviews: 3251,
        description: "Every Bisleri product you pick up comes with the three essential Composition of quality, innovation and value. Bisleri is one of the most popular brands for bottled water. Bisleri follows a six-step stringent purification process which means that the water from Bisleri is pure and absolutely good for your health.",
        organic: false,
        tags: ['water', 'beverages']
    },
    {
        productId:27,
        imageUrl: '/assets/images/wild-caught-sea-scallops.webp',
        productName: 'Wild Caught Extra Jumbo Sea Scallops',
        price: 207,
        brand: 'HEB',
        rating: 4.5,
        numOfReviews: 748,
        description: "Rich flavor with a meaty texture. Great for sautéing or grilling. Fresh, never frozen, Wild caught",
        organic: false,
        tags: ['seafood']
    },
    {
        productId:28,
        imageUrl: '/assets/images/Ooats2.jpg',
        productName: "Quaker Oats 2kg",
        price: 338,
        brand: "Quaker Oats",
        rating: 4.5,
        numOfReviews: 3997,
        description: "Quaker Oats 2kg | Rolled Oats | 100% Natural Wholegrain | Nutritious Breakfast Cereals | Porridge | Easy to Cook",
        organic: true,
        tags: ['cereal', 'snack']
    }

    ]
  }

  /* *******************************************
   * Method Name: getAllProductsOld()
   * Access Type: public
   * Input Parameters: none
   * Return Type: String[] array
   * Purpose: Returns a hardcoded String array with the pictures of the products
   * ******************************************* */
  getAllProductsOld():String[]{
    return [
      '/assets/images/amul-dahi.webp',
      '/assets/images/amul-dark-chocolate.jpg',
      '/assets/images/amul.jpg',
      '/assets/images/apple.webp',
      '/assets/images/autumn soup.jpg',
      '/assets/images/bisleri-mineral-water.webp',
      '/assets/images/bisleri-water-jar.webp',
      '/assets/images/catch-super-garam-masala.webp',
      '/assets/images/english-cucumber.jpg',
      '/assets/images/Corriander-Leaves.jpg',
      '/assets/images/egg2.jpg',
      '/assets/images/gobi.webp',
      '/assets/images/haldiram-namkeen-bhujia.webp',
      '/assets/images/hide-and-seek-creme-sandwich-biscuits.jpg',
      '/assets/images/india-gate-basmati-rice-everyday.webp',
      '/assets/images/Olive Oil3.jpg',
      '/assets/images/Onion1.webp',
      '/assets/images/Ooats2.jpg',
      '/assets/images/oranges.webp',
      '/assets/images/palak-gaddi3.jpg',
      '/assets/images/organic-free-range-chicken-breasts.webp',
      '/assets/images/parle_monaco_biscuits.jpg',
      '/assets/images/potato2.webp',
      '/assets/images/Raw-Food-Almond-food-Nut-Snack.webp',
      '/assets/images/tata-sampann-organic-toor-dal.webp',
      '/assets/images/tomatoes.webp',
      '/assets/images/Urad daal.webp',
      '/assets/images/White Bread.jpg',
      '/assets/images/wild-caught-sea-scallops.webp',
    ]
  }

}
