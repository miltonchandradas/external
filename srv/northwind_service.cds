using {Northwind} from './external/Northwind.csn';

service NorthwindService {
    @readonly
    entity Products as projection on Northwind.Products;
}
