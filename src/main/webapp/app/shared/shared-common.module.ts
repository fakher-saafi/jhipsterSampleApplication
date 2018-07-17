import { NgModule } from '@angular/core';

import { SecondjhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SecondjhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SecondjhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SecondjhipsterSharedCommonModule {}
