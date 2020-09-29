import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieBannerComponent } from './cookie-banner.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { HttpClientModule } from '@angular/common/http';

describe('CookieBannerComponent', () => {
  let component: CookieBannerComponent;
  let fixture: ComponentFixture<CookieBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieBannerComponent ],
      imports: [ NgbModule,HttpClientModule ],
      providers: [
        NgbActiveModal,
        NgbModal,
        ToggleComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
