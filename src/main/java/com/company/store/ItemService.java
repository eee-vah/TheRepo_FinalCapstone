package com.company.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ItemService {
    @Autowired
    ItemRepository itemRepo;

    //Create a new item
    public Item addItem(Item newItem) {
        return itemRepo.save(newItem);
    }

    //Read all items or item by ID
    public List<Item> getAllItems() {
        return itemRepo.findAll();
    }

    public Item getItemById(Integer id) {
        return itemRepo.getOne(id);
    }

    //Update an existing item
    public Item updateItem(Item updatedItem, Integer id) {
        if(updatedItem.getId() == id) {
            return itemRepo.save(updatedItem);
        }
        return null;
    }

    //Delete an existing item
    public void deleteItem(Integer id) {
        itemRepo.deleteById(id);
    }

    //Updating inventory in database
    public void purchase(Item[] item) {
        for (Item p : item) {
            Item currItem = this.getItemById(p.getId());

            currItem.setQuantity(currItem.getQuantity() - p.getQuantity());
            this.updateItem(currItem, currItem.getId());
        }
    }

}