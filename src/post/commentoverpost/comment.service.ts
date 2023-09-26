import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { commentmodel } from "./comment.model";

@Injectable()
export class UsercommentService {

  constructor(@InjectModel('commentschema') private usercommentmodel:Model<commentmodel>  ){}


  async postComment(usercommentdto,id){
    try {
      return await this.usercommentmodel.create({...usercommentdto, userId:id});
    } catch (error) {
      // Handle the error here
      console.error("Error while creating a comment:", error);
      throw error; // Re-throw the error to propagate it up the call stack if needed
    }
  }
}