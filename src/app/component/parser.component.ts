import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';
import { Parcel } from '../models/Parcel'
import { FreightCalculator } from '../services/freightCalculator';


@Component({
    selector: 'trademe-parser',
    templateUrl: '../html/parser.html'
})
export class ParserComponent {

    parselForm: FormGroup
    noddy = false
    freightInfo: Object

    constructor(private freight: FreightCalculator , private formBr: FormBuilder) {
        this.createForm()
    }

    createForm(): void {
        this.parselForm = this.formBr.group({
            p_length: ['', Validators.required ],
            p_breadth: ['', Validators.required ],
            p_height: ['', Validators.required ],
            p_weight: ['', Validators.required ]
        });


    }



    onSubmit(): boolean {
        const parcel = new Parcel(this.parselForm.value.p_length,this.parselForm.value.p_breadth, this.parselForm.value.p_height, this.parselForm.value.p_weight )

        this.freightInfo = this.freight.calculator(parcel)
        //console.log(JSON.stringify(this.parselForm.value));
        return false;
    }


}