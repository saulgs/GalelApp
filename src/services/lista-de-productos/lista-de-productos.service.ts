import { Item } from './../../models/item/item.model';
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class ListaDeProductosService{
    
    private ReferenciaListaDeProductos = this.db.list<Item>('lista-productos');

    constructor(private db: AngularFireDatabase){
        
    }

    getListaDeProductos(){
        return this.ReferenciaListaDeProductos;
    }

    ingresarProducto(item: Item){
        return this.ReferenciaListaDeProductos.push(item);
    }

    editarProducto(key: string, item: Item){
        return this.ReferenciaListaDeProductos.update(key, item);
    }
}