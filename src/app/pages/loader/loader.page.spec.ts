import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { IonicModule } from '@ionic/angular';
import { Route, Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach((waitForAsync) => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    
  });

  it('should go too login page after load',fakeAsync(()=>{
    
    component.ngOnInit();

    tick(1500);

    expect(router.navigate).toHaveBeenCalledWith(['login'])
  }))
  });

