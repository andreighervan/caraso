import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule, MatCardModule, MatMenuModule, MatNativeDateModule, MatTabsModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatProgressSpinnerModule, MatSliderModule
} 
from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio'
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatDividerModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDatepickerModule  
  ],
  exports: [MatIconModule, MatAutocompleteModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatCardModule, MatMenuModule, MatNativeDateModule, MatButtonModule, MatTooltipModule, MatTableModule, MatPaginatorModule,
    MatTabsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatDividerModule, MatSliderModule, MatProgressSpinnerModule, MatStepperModule, MatExpansionModule, MatDatepickerModule],
  declarations: []
})
export class MaterialModule { }
