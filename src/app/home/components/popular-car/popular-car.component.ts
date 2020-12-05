import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICar } from 'src/app/core/models/Cars';

@Component({
  selector: 'app-popular-car',
  templateUrl: './popular-car.component.html',
  styleUrls: ['./popular-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularCarComponent implements OnInit {
  @Input() cars: ICar[];

  @Output()
  loadMoreEvent = new EventEmitter();

  ngOnInit() {
  }

  loadMore() {
    this.loadMoreEvent.emit();
  }

}
