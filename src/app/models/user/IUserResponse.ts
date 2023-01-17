import { IUser } from "./IUser";

export interface IUserResponse {
    success: boolean;
    data: IUser[];
}