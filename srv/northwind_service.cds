using {Northwind} from './external/Northwind.csn';

service NorthwindService {
    @readonly
    entity Products as projection on Northwind.Products {
        key ProductID as id, ProductName as name, UnitPrice as unitPrice, UnitsInStock as stock, Discontinued as discontinued
    };

    event feedback: {
        rating: Integer;
        review: String;
    }
}
