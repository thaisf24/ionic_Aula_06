import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/genero';

/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {
      public generos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var l1 = {nome:'Terror'}
    var l2 = {nome:'Misterio'};
    var l3 = {nome:'Fantasia'};
    var l4 = {nome:'Animação'};
    var l5 = {nome:'Ação'};
    var l6 = {nome:'Comédia'};
    var l7 = {nome:'Aventura'};
    var l8 = {nome:'Ficção científica'};
    var l9 = {nome:'Suspense'};
    this.generos = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
  }

  irParaGenero(generos:Genero):void{
    this.navCtrl.push(GeneroPage, {GeneroSelecionado: generos});
  }
}
