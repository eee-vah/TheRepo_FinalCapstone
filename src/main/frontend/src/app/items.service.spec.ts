import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemsService } from './items.service';
import { Item } from './item';

describe('ItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: ItemsService = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });

  it('should get items', inject(
    [ HttpTestingController ],
    (httpMock: HttpTestingController) => {
      const mockData = [
        new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
        new Item("New CD", "Much Bass", 14.99, false, "Music", "www.books.com", 1),
        new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.books.com", 1)
      ];

  const service: ItemsService = TestBed.get(ItemsService);
  service.getItems().subscribe(
    (res: any) => {
      expect(res.length).toEqual(mockData.length);
      expect(res[0].name).toEqual(mockData[0].name);
      expect(res[1].name).toEqual(mockData[1].name);
      expect(res[2].name).toEqual(mockData[2].name);
    });

  const mockReq = httpMock.expectOne("http://localhost:8080/item");
  expect(mockReq.request.method).toEqual("GET");
  mockReq.flush(mockData);
  }));

})