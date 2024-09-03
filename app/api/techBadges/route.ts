import dbConnect from '../../db/dbConnect'
import TechBadge from '../../models/techBadge'
import { NextRequest, NextResponse } from 'next/server'

interface IBadge {
    techImg: string
    techName: string
}

export async function GET() {
    try {
        await dbConnect();
        const badges = await TechBadge.find();
        return NextResponse.json({ badges });
    } catch (err) {
        console.log("GET error: " + err)
    }
}

export async function POST(request: NextRequest) {
    try {
        const newBadge: IBadge = await request.json();
        await dbConnect();
        await TechBadge.create(newBadge);
        return NextResponse.json({ message: "TechBadge Created" }, { status: 201 });

    } catch (err) {
        console.log("POST error: " + err)
    }
}
  
export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await dbConnect();
        await TechBadge.findByIdAndDelete(id);
        return NextResponse.json({ message: "TechBadge deleted" }, { status: 200 });
    } catch (err) {
        console.log("DELETE error: " + err)
    }  
}


  
