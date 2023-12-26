import Ticket from "@/app/(models)/Ticket";
import {NextResponse} from "next/server";

export async function DELETE(req,{params}){
    try{

    }catch(error) {
        return NextResponsse.json({message:"Error",error},{status:400})
    }
}