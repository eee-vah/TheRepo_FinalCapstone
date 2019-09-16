package com.company.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ItemController {
    @Autowired
    ItemService itemService;

    //Create a new item
    @RequestMapping(value = "/item", method = RequestMethod.POST)
    public Item addItem(@RequestBody @Valid Item newItem) {
        return itemService.addItem(newItem);
    }

    //Read all items or item by id
    @RequestMapping(value = "/item", method = RequestMethod.GET)
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }
    @RequestMapping(value = "/item/{id}", method = RequestMethod.GET)
    public Item getItemById(@PathVariable Integer id) {
        return itemService.getItemById(id);
    }

    //Update an existing item
    @RequestMapping(value = "/item/{id}", method = RequestMethod.PUT)
    public Item updateItem(@RequestBody @Valid Item updatedItem, @PathVariable Integer id) {
        return itemService.updateItem(updatedItem, id);
    }

    //Delete an existing item
    @RequestMapping(value = "/item/{id}", method = RequestMethod.DELETE)
    public void deleteItem(@PathVariable Integer id) {
        itemService.deleteItem(id);
    }

    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public void purchase(@RequestBody @Valid Item[] item) {
        itemService.purchase(item);
    }

}