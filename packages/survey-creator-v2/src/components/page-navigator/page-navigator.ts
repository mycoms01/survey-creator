import * as ko from "knockout";
import { IActionBarItem } from "survey-knockout";
import { PageModel } from "survey-knockout";
import { PopupModel } from "survey-knockout";

import "./page-navigator.scss";
const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

export class PageNavigatorViewModel {
  private _itemsSubscription: ko.Computed;
  private _selectionSubscription: ko.Computed;
  private selectedItem = ko.observable<PageModel>();
  constructor(_items: Array<PageModel> | ko.Computed<Array<PageModel>>, private _creator: any, selection?: () => PageModel, onSelect = (item: PageModel) => {}) {
    this._selectionSubscription = ko.computed(() => this.selectedItem(selection && selection()));
    const pageSelectorModel = this.popupModel.contentComponentData;
    this._itemsSubscription = ko.computed(() => {
      var pageSelectorItems = [];
      this.items(ko.unwrap(_items).map((page: PageModel) => {
          const item: IActionBarItem = <any>{
            id: page.id,
            title: _creator ? _creator.getObjectDisplayName(page) : page.title
          };
          item.active = ko.computed(() => page === this.selectedItem());
          item.action = () => {
            this.selectedItem(page);
            onSelect && onSelect(page);
          };

          pageSelectorItems.push({title: item.title, value: page});

          return item;
        })
      );
      pageSelectorModel.items(pageSelectorItems);
    });
    pageSelectorModel.selectedItem = ko.computed({
      read: () => pageSelectorModel.items().filter(item => item.value === this.selectedItem())[0],
      write: val => {}
    });
  }
  public items = ko.observableArray<IActionBarItem>();

  get visible() {
    return this.items().length > 1;
  }

  icon = "icon-navigation"
  
  popupModel = new PopupModel(
    "sv-list",
    {
      onItemSelect: (item) => {
        this._creator.selectElement(item.value);
        this.popupModel.toggleVisibility();
      },
      items: ko.observableArray(),
      selectedItem: undefined
    }
  );

  togglePageSelector = () => this.popupModel.toggleVisibility();

  dispose() {
    this._selectionSubscription.dispose();
    this._itemsSubscription.dispose();
  }
}

ko.components.register("svc-page-navigator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new PageNavigatorViewModel(
        params.items,
        params.creator,
        params.selection,
        params.onSelect
      );
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
