import Anuncio from "./anuncios.js";

export default class Anuncio_Mascota extends Anuncio{
    constructor(id,titulo, transaccion, descripcion, precio, raza, fecha_nacimiento,vacunado, animal )
    {
        super(id, titulo, transaccion,descripcion, precio)

        this.raza = raza;
        this.fecha_nacimiento = fecha_nacimiento;
        this.vacunado = vacunado;
        this.animal = animal;
    }

}