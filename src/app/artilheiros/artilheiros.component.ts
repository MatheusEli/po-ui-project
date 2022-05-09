import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PoPageFilter, PoPageListComponent, PoTableColumn } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { Artilheiro } from './artilheiro';
import { ArtilheirosService } from './artilheiros.service';

@Component({
  selector: 'app-artilheiros',
  templateUrl: './artilheiros.component.html'
})
export class ArtilheirosComponent implements OnInit, OnDestroy {

  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent
  private disclaimers = []

  disclaimerGroup
  subscription: Subscription
  artilheiros: Array<Artilheiro>
  artilheirosColumns: Array<PoTableColumn>
  artilheirosFiltered: Array<Artilheiro>

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    placeholder: 'Search',
    width: 3
  }

  constructor(private artilheirosService: ArtilheirosService) { }

  ngOnInit(): void {
    this.disclaimerGroup = {
      title: 'Filtros',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    }

    this.subscription = this.artilheirosService.getItems().subscribe(artilheiros => {
      this.artilheiros = artilheiros
      this.artilheirosFiltered = [...this.artilheiros]
    })
    this.artilheirosColumns = [

      { property: 'nome', label: 'Nome' },
      { property: 'idade', label: 'Idade' },
      { property: 'gols', label: 'Gols' },
      { property: 'partidas', label: 'Partidas' }

    ]
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value)
    filters.length ? this.searchArtilheirosFilter(filters) : this.resetFilter()
  }

  searchArtilheirosFilter(filters) {
    this.artilheirosFiltered = this.artilheiros.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters)))
  }

  resetFilter() {
    this.artilheirosFiltered = [...this.artilheiros]
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter]
    this.populateDisclaimers(filter)
    this.filter()
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search'
    this.disclaimers = filters.map(value => ({ value, property }))

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers]
    } else {
      this.disclaimerGroup.disclaimers = []
    }
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers
    this.filter()
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch()
    }

    this.disclaimers = []
    this.filter()
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
