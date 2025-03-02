import {NextResponse} from 'next/server'

export async function GET(){
    const baseUrl = process.env.API_BASE_URL
    return NextResponse.json({baseUrl})
}