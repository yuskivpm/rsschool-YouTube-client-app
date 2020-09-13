import { TestBed } from '@angular/core/testing';

import { YoutubeAuthInterceptor } from './youtube-auth.interceptor';

describe('YoutubeAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      YoutubeAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: YoutubeAuthInterceptor = TestBed.inject(YoutubeAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
