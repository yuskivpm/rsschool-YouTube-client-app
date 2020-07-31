import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rsschool-YouTube-client-app'`, () => {
    expect(app.title).toEqual('rsschool-YouTube-client-app');
  });

  it('should render title', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'rsschool-YouTube-client-app app is running!'
    );
  });
});
