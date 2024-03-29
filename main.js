const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://img-s1.onedio.com/id-61ba3f354341a07562e6bfbb/rev-0/w-600/h-399/f-jpg/s-264d580fa38d9f11e96dfc0054b2e20051e8e441.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://takestwoeggs.com/wp-content/uploads/2022/02/Dan-Dan-Noodles-Dan-Dan-Mian-5overhead-sq.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  let filterButtons = document.querySelector("#filterButtons")
  
  function categoryButtons(){
    let allButtons =
    `
    <ul class="list-inline">
    <li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="All">All</button></li>
    <li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="Korea">Korea</button></li>
    <li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="Japan">Japan</button></li>
    <li class="list-inline-item">  <button class="btn btn-outline-dark d-inline" id="China">China</button></li>
    </ul>
    `
    filterButtons.innerHTML = allButtons;
  
  }
  categoryButtons();

  function foodBlock(food){
    let html = `
    <div class="menu-items col-6">
        <img class="photo" src="${food.img}" alt="${food.title}">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${food.title}</h4>
            <h4>${food.price}</h4>
          </div>
          <div class="menu-text">${food.desc}</div>
        </div>
      </div>  
    `
    return html;
  }
  

  let foodMenuSection = document.querySelector("#foodMenu");
  

  function showAllFoods(){
    let allFoods = "";
  
    menu.forEach(food => {allFoods += foodBlock(food)})
    foodMenuSection.innerHTML = allFoods;
  
  }
  
  document.addEventListener("DOMContentLoaded",showAllFoods)
  

  let allButton = document.querySelector("#All")
  let koreanButton = document.querySelector("#Korea")
  let japanButton = document.querySelector("#Japan")
  let chinaButton = document.querySelector("#China")
  

  allButton.addEventListener("click",showAllFoods)
  
  
  function koreanCategory(){

    let koreanFoods = "";

    menu.forEach(food =>{
      if(food.category=="Korea"){
        koreanFoods += foodBlock(food)
      }
    })

    foodMenuSection.innerHTML = koreanFoods
  }
  koreanButton.addEventListener("click",koreanCategory)
  
  
  function japanCategory(){
    let japanFoods = "";
  
    menu.forEach(food =>{
      if(food.category=="Japan"){
        japanFoods += foodBlock(food)
      }
    })
  
    foodMenuSection.innerHTML = japanFoods
  }
  japanButton.addEventListener("click",japanCategory)
  
  
  function chinaCategory(){
    let chinaFoods = "";
  
    menu.forEach(food =>{
      if(food.category == "China"){
        chinaFoods += foodBlock(food)
      }
    })
  
    foodMenuSection.innerHTML = chinaFoods
  }
  chinaButton.addEventListener("click",chinaCategory)
