class MealRecipe extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            color: #fff;
            background: var(--tenne-tawny);
            border-radius: 1rem;
            -webkit-border-radius: 1rem;
            -moz-border-radius: 1rem;
            -ms-border-radius: 1rem;
            -o-border-radius: 1rem;
            width: 90%;
            height: 90%;
            overflow-y: scroll;
            display: none;
            padding: 2rem 0;
          }
          
          .pict-meal {
            
          }
          
          .meal-info {
            
          }
          
          .meal-info > h3 {
            
          }
          .recipe-btn {
            
          }
          .recipe-btn:hover {
            
          }
        </style>
        
          <button type="button" class="btn recipe-close-btn" id="recipe-close-btn">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="meal-details-content">
            <h2 class = "recipe-title">${this.meal.strMeal}</h2>
            <p class = "recipe-category">${this.meal.strCategory}</p>
            <div class = "recipe-instruct">
              <h3>Instructions:</h3>
              <p>${this.meal.strInstructions}</p>
            </div>
            <div class = "recipe-meal-img">
              <img src = "${this.meal.strMealThumb}" alt = "">
            </div>
            <div class = "recipe-link">
              <a href = "${this.meal.strYoutube}" target = "_blank">Watch Video</a>
            </div>
          </div>
      `;
  }
}

customElements.define("meal-recipe", MealRecipe);
