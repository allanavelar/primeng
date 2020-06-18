import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GMapDemo} from './gmapdemo';
import {GMapDemoRoutingModule} from './gmapdemo-routing.module';
import {GMapModule} from 'primeng/gmap';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		GMapDemoRoutingModule,
        GMapModule,
        ToastModule,
        InputTextModule,
        CheckboxModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GMapDemo
	]
})
export class GMapDemoModule {}
