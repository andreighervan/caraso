import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/core/models/Cars';

@Component({
  selector: 'app-popular-car',
  templateUrl: './popular-car.component.html',
  styleUrls: ['./popular-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularCarComponent implements OnInit {
  @Input() carItem: ICar;

  constructor() { }

  ngOnInit() {
  }

}
