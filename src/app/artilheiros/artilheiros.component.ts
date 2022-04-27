import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageFilter, PoPageListComponent, PoTableColumn } from '@po-ui/ng-components';
import { Artilheiro } from './artilheiro';
import { ArtilheirosService } from './artilheiros.service';

@Component({
  selector: 'app-artilheiros',
  templateUrl: './artilheiros.component.html'
})
export class ArtilheirosComponent implements OnInit {

  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent
  private disclaimers = []

  disclaimerGroup

  searchingArtilheiros: Array<Artilheiro>
  searchingArtilheirosColumns: Array<PoTableColumn>
  searchingArtilheirosFiltered: Array<Artilheiro>

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    placeholder: 'Search',
    width: 3
  }

  constructor(private artilheirosService: ArtilheirosService) { }

  ngOnInit(): void {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    }

    this.artilheirosService.getItems().subscribe(artilheiros => {
      this.searchingArtilheiros = artilheiros
      this.searchingArtilheirosFiltered = [...this.searchingArtilheiros]
    })
    this.searchingArtilheirosColumns = [

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
    this.searchingArtilheirosFiltered = this.searchingArtilheiros.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters)))
  }

  resetFilter() {
    this.searchingArtilheirosFiltered = [...this.searchingArtilheiros]
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
}
