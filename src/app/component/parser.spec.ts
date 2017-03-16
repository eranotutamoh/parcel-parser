import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, ElementRef }    from '@angular/core';

import { ParserComponent } from './parser.component';

describe('ParserComponent (form)', () => {

    let comp:    ParserComponent;
    let fixture: ComponentFixture<ParserComponent>;
    let de:      DebugElement;
    let el;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ParserComponent ], // declare the test component
        });

        fixture = TestBed.createComponent(ParserComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h2'));
        el = de.nativeElement;


    });
    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    /*it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });*/

});
