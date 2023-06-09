import {defineStore} from "pinia"

export const useItemStore = defineStore("items", {
    state: () => ({
        articles: [],
        isActive: false
    }),

    actions: {
        async getArticles() {
            try {
              fetch('http://localhost:1337/api/items?populate=*')
                .then(response => response.json())
                .then(data => {
                  const articles = Object.values(data)[0];
                  for ( let i = 0; i < articles.length; i++) {
                    this.articles.push(articles[i])
                  }
        
                  console.log(articles)
                })
                .catch(error => {
                  console.error(error);
                });
        
            } catch (error) {
              console.error(error);
            }
            },
            
            emptyStore() {
              this.articles = [];
            }
    },
    
    toggleActive: () => {
      this.isActive = !this.isActive
      console.log(this.isActive)
    }
})