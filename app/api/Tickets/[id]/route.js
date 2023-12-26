import Ticket from "@/app/(models)/Ticket";
import {NextResponse} from "next/server";

export async function DELETE(req,{params}){
    try{
        const {id} = params
        await Ticket.findByIdAndDelete(id);
        return NexttResponse.json({meesage:"Ticket Deleted"},{status:200})

    }catch(error) {
        return NextResponsse.json({message:"Error",error},{status:400})
    }
}