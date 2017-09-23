/**
 * picker.module
 */

import { NgModule } from '@angular/core';

import { DateTimePickerComponent } from './picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberFixedLenPipe } from './numberedFixLen.pipe';
import {DomHandler} from "./domhander";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DateTimePickerComponent],
    declarations: [DateTimePickerComponent, NumberFixedLenPipe],
    providers: [DomHandler],
})
export class DateTimePickerModule {
}


