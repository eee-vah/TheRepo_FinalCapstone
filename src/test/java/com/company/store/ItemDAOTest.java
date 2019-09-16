package com.company.store;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ItemDAOTest {
    @Autowired
    ItemRepository itemRepo;

    Item item1;
    Item item2;
    Item item3;

    @Before
    public void setUp() {
        item1 = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
        item2 = new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1);
        item3 = new Item("New Choco Bar", "Much Noms", 0.85, true, "Food", "www.food.com", 1);
    }

    @Test
    public void shouldGetItems() {
        itemRepo.save(item1);
        itemRepo.save(item2);
        itemRepo.save(item3);
        List<Item> itemList = new ArrayList<>();
        itemList.add(item1);
        itemList.add(item2);
        itemList.add(item3);
        List<Item> fromRepo = itemRepo.findAll();
        assertEquals(itemList, fromRepo);
    }

    @Test
    public void shouldAddItems() {
        itemRepo.save(item1);
        itemRepo.save(item2);
        itemRepo.save(item3);
        assertNotNull(item1.getId());
        assertNotNull(item2.getId());
        assertNotNull(item3.getId());
    }

    @Test
    public void shouldUpdateItem() {
        Item addedItem = itemRepo.save(item1);
        addedItem.setName("New Book");
        itemRepo.save(addedItem);
        List<Item> fromRepo = itemRepo.findAll();
        assertEquals(fromRepo.size(), 1);
        assertEquals(fromRepo.get(0).getName(), "New Book");
    }

    @Test
    public void shouldDeleteItem() {
        item1.setId(1);
        Item addedItem = itemRepo.save(item1);
        itemRepo.deleteById(addedItem.getId());
        List<Item> fromRepo = itemRepo.findAll();
        assertEquals(fromRepo.size(), 0);
    }
}