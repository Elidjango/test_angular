export class Employee {
    constructor(id_usu = "", position_usu = "", age_usu = "", username_usu = "", date_create = "", date_update = "") {
        this.id_usu = id_usu;
        this.position_usu = position_usu;
        this.age_usu = age_usu;
        this.username_usu = username_usu;
        this.date_create = date_create;
        this.date_update = date_update;
    }

    id_usu: string;
    position_usu: string;
    age_usu: string;
    username_usu: string;
    date_create: string;
    date_update: string;
}