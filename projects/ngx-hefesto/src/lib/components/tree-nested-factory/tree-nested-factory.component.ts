import {Component, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
/*

export class TreeNestedFactoryComponent {

  private readonly _componentSelected!: Component;

  constructor(actionComponent: Component) {
    this._componentSelected = actionComponent;
  }

  getComponent(): Component {
    return this._componentSelected;
  }

}
*/

interface HefestoConfig {
  action: Component | undefined;
}

export const Zb_Ui_CONFIG_TOKEN = new InjectionToken<HefestoConfig>('hefestoConfig');

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: []
})
export class NgxTreeNestedFactoryModule {
  static forRoot(hefestoConfig: HefestoConfig = {action: undefined}): ModuleWithProviders<NgxTreeNestedFactoryModule> {
    return {
      ngModule: NgxTreeNestedFactoryModule,
      providers: [
        {
          provide: Zb_Ui_CONFIG_TOKEN,
          useValue: hefestoConfig
        }
      ]
    };
  }
}

