import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ICard } from '../../components/authorized/card-wrapper/interfaces/card.interface';

describe('CardService', () => {
  let cardService: CardService;
  let httpTestingController: HttpTestingController;

  const mockCards: ICard[] = [
    {
      image: 'string',
      title: 'string',
      subtitle: 'string',
      description: 'string',
    }
  ]


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    cardService = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(cardService).toBeTruthy();
  });

  it('should return cards',  () => {
    cardService.getAll().subscribe(res => {
      expect(res).toEqual(mockCards)
    })

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: 'api/cards',
    });

    req.flush(mockCards);
  });
});
