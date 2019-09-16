package com.company.store;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ItemServiceTest {
    @Mock
    @Autowired
    ItemRepository itemRepoMock;
    @InjectMocks
    ItemService itemService;

    Item item1;
    Item item2;
    Item item3;
    List<Item> itemList;

    @Before
    public void setUp() {
        item1 = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
        item2 = new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1);
        item3 = new Item("New Choco Bar", "Much Noms", 0.85, true, "Food", "www.food.com", 1);

        itemList = Arrays.asList(item1, item2, item3);
    }

    @Test
    public void shouldGetAllItems() {
        List<Item> expectedList = Arrays.asList(item1, item2, item3);
        when(itemRepoMock.findAll()).thenReturn(itemList);
        assertEquals(expectedList, itemService.getAllItems());
    }

    @Test
    public void shouldAddItems() {
        when(itemRepoMock.save(item1)).thenReturn(item1);
        assertEquals(item1, itemService.addItem(item1));
    }

    @Test
    public void shouldUpdateItem() {
        item1.setId(1);
        when(itemRepoMock.save(item1)).thenReturn(item1);
        assertEquals(item1, itemService.updateItem(item1, 1));
    }
}