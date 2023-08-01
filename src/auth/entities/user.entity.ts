import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as request from 'supertest';

@Schema()
export class User {

    _id?:string;

    @Prop({unique: true, require:true})
    email:string;

    @Prop({request: true})
    name: string;

    @Prop({minlength: 6})
    password?: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop({type: [String], default: ['user']})
    roles: string[];


}

export const UserSchema = SchemaFactory.createForClass(User);