import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[]

  constructor() {
    this.articles = [
      new Article('Angular 2','http://angular.io',3),
    ]
  }

  addArticle(title : HTMLInputElement , link : HTMLInputElement): boolean {
    if(title.value =='')
    window.alert("Please enter a valid name")

    this.articles.push(new Article(title.value, link.value,0))
    title.value=''
    link.value=''
    return false;
  }

  sortedArticles() : Article[] {
    return this.articles.sort((a: Article, b: Article) => b.Votes - a.Votes)
  }
}
