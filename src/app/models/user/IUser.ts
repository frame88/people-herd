export interface IUser {
    idUser: number;
    name: string;
    surname?: string;
    username?: string;
    password?: string;
    group?: number;
    mail?: string;
    phone?: string;
    birthDate?: string;
    birthPlace?: string;
    address?: string;
    taxId?: string;
}