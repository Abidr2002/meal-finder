class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
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
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
        }
        
        .pict-meal {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        
        .meal-info {
          padding: 24px;
        }
        
        .meal-info > h3 {
          font-weight: lighter;
          font-size: 1.4rem;
        }
      </style>
      
      <div class="meal-info" data-id="${this._meal.idMeal}">
        <img class="pict-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
        <h3>${this._meal.strMeal}</h3>
      </div>
    `;
  }
}

customElements.define('meal-item', MealItem);
