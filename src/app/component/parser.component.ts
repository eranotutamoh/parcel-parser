import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn }   from '@angular/forms';
import { Parcel } from '../models/Parcel'
import { FreightCalculator } from '../services/freightCalculator';



@Component({
    selector: 'trademe-parser',
    templateUrl: '../html/parser.html'
})
export class ParserComponent {

    parselForm: FormGroup
    title = 'Enter Parcel Dimensions and Weight'
    freightInfo: Object

    constructor(private freight: FreightCalculator , private formBr: FormBuilder) {
        this.createForm()
    }

    createForm(): void {
        this.parselForm = this.formBr.group({
            p_length: ['', [Validators.required, this.numberValidator()] ],
            p_breadth: ['',[Validators.required, this.numberValidator()] ],
            p_height: ['', [Validators.required, this.numberValidator()] ],
            p_weight: ['', [Validators.required, this.numberValidator()] ],
        });

        this.parselForm.valueChanges.subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }

    onValueChanged(data?: any){
        if (!this.parselForm) { return; }
        const form = this.parselForm;
        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'p_length': '',
        'p_breadth': '',
        'p_height': '',
        'p_weight': '',
    };

    validationMessages = {
        'p_length': {
            'required':  'Length is required.',
            'numberTest': 'Enter a valid number'
        },
        'p_breadth': {
            'required':  'Breadth is required.',
            'numberTest': 'Enter a valid number'
        },
        'p_height': {
            'required':  'Height is required.',
            'numberTest': 'Enter a valid number'
        },
        'p_weight': {
            'required':  'Weight is required.',
            'numberTest': 'Enter a valid number'
        },
    }

    numberValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const number = control.value;
            return (isNaN(number) || null) ? {'numberTest': {number}} : null;
        };
    }

    onSubmit(): boolean {
        const parcel = new Parcel(this.parselForm.value.p_length,this.parselForm.value.p_breadth, this.parselForm.value.p_height, this.parselForm.value.p_weight )

        this.freightInfo = this.freight.calculator(parcel)

        return false;
    }


}