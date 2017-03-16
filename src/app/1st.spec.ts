import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParserComponent } from './component/parser.component';
import {  TestBed } from '@angular/core/testing';
import { FreightCalculator } from './services/freightCalculator';

beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, FormsModule],
        declarations: [AppComponent, ParserComponent],
        providers: [FreightCalculator]
    });
});



describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));
});