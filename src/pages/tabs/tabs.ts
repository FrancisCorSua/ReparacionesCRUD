import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { VerTrabajadoresPage } from '../ver-trabajadores/ver-trabajadores';
import { VerProblemasPage } from '../ver-problemas/ver-problemas';
import { VerEvaluacionesPage } from '../ver-evaluaciones/ver-evaluaciones';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VerTrabajadoresPage;
  tab3Root = VerProblemasPage;
  tab4Root = VerEvaluacionesPage;

  constructor() {

  }
}
