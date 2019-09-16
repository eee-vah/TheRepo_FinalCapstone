export class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    imported: boolean;
    category: string;
    itemImageUrl: string;
    quantity: number;

    inStock: number;

    itemSalesTax: number;
    itemImportTax: number;
    subtotal: number;
    totalSalesTax: number;
    totalImportTax: number;
    total: number;

    constructor(name: string, description: string, price: number, imported: boolean, category: string, itemImageUrl: string, quantity: number, inStock?: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imported = imported;
        this.category = category;
        this.itemImageUrl = itemImageUrl;
        this.quantity = quantity;
        this.inStock = inStock;
        this.itemSalesTax = this.itemSalesTax;
        this.itemImportTax = this.itemImportTax;
        this.subtotal = this.subtotal;
        this.totalSalesTax = this.totalSalesTax;
        this.totalImportTax = this.totalImportTax;
        this.total = this.total;
    }
}