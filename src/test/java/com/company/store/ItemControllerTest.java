package com.company.store;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class ItemControllerTest {
    private MockMvc mockMvc;
    @Mock
    ItemService mockItemService;
    @InjectMocks
    ItemController itemController;

    Item item1;
    Item item2;
    Item item3;
    List<Item> itemList;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();

        item1 = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
        item2 = new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1);
        item3 = new Item("New Choco Bar", "Much Noms", 0.85, true, "Food", "www.food.com", 1);

        itemList = Arrays.asList(item1, item2, item3);
    }

    @Test
    public void rootContext_ShouldRespondWith404() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldReturnAllItems() throws Exception {
        when(mockItemService.getAllItems()).thenReturn(itemList);

        mockMvc.perform(get("/item"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].name", is(itemList.get(0).getName())));

        verify(mockItemService).getAllItems();
    }

    @Test
    public void shouldAddItems() throws Exception {
        Item newItem = new Item();
        newItem.setName("New Book");
        newItem.setDescription("Much Wow");
        newItem.setPrice(12.49);
        newItem.setImported(false);
        newItem.setCategory("Books");
        newItem.setItemImageUrl("www.books.com");
        newItem.setQuantity(1);

        when(mockItemService.addItem(newItem)).thenReturn(newItem);

        ObjectMapper mapper = new ObjectMapper();
        String objStr = mapper.writeValueAsString(newItem);

        mockMvc.perform(post("/item")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objStr))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(newItem.getName()))).andReturn();

        verify(mockItemService).addItem(newItem);
    }

    @Test
    public void shouldUpdateItem() throws Exception {
        Item newItem = new Item();
        newItem.setName("New Book");
        newItem.setDescription("Much Wow");
        newItem.setPrice(12.49);
        newItem.setImported(false);
        newItem.setCategory("Books");
        newItem.setItemImageUrl("www.books.com");
        newItem.setQuantity(1);

        ObjectMapper mapper = new ObjectMapper();
        String objStr = mapper.writeValueAsString(newItem);

        mockMvc.perform(put("/item/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objStr))
                .andExpect(status().isOk()).andReturn();

        verify(mockItemService).updateItem(newItem, 1);
    }

    @Test
    public void shouldDeleteItem() throws Exception {
        mockMvc.perform(delete("/item/1"))
                .andExpect(status().isOk()).andReturn();
        verify(mockItemService).deleteItem(1);
    }
}