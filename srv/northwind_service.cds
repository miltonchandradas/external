using {northwind} from './external/northwind.csn';

service NorthwindService {
    @readonly
    entity Products as projection on northwind.Products {
        key ProductID as id, ProductName as name, UnitPrice as unitPrice, UnitsInStock as stock, Discontinued as discontinued
    }
}
