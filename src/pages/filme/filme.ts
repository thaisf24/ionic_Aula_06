import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { DestinoPage } from '../destino/destino';


/**
 * Generated class for the FilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
})
export class FilmePage {
  public filme:Filme[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    var l1 = {titulo:'A Freira', genero:'Terror,Misterio,Suspense,Sobrenatural'};
    var l2 = {titulo:'Harry Potter e a Pedra Filosofal', genero:' Fantasia, Aventura, Família'};
    var l3 = {titulo:'O Senhor dos Anéis',genero:'Animação, Fantasia'};
    var l4 = {titulo:'Os Vingadores- The Avengers', genero:' Ação, Aventura, Ficção científica'};
    var l5 = {titulo:'Deadpool 2', genero:' Ação, Comédia , Aventura'};
    var l6 = {titulo:'Pantera Negra', genero:' Ação, Aventura, Ficção científica, Fantasia'};
    var l7 = {titulo:'Os incriveis 2', genero:' Animação,Aventura,Familia'};
    var l8 = {titulo:'Velozes e Furiosos 8', genero:' Ação, Suspense'};
    var l9 = {titulo:'Harry Potter e as Reliquias da Morte', genero:'Fantasia, Aventura'};
    this.filme = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
  }

  irParaDestino(filme:Filme):void{
   this.navCtrl.push(DestinoPage, {filmeSelecionado: filme});
  }
}
