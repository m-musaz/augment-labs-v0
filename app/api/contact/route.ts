// This API route is no longer needed since we're using Formspree directly
// The contact form now submits directly to Formspree using the @formspree/react package
// Formspree endpoint: https://formspree.io/f/xanpkwoy

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      message: 'This endpoint is deprecated. Contact form now uses Formspree directly.',
      redirect: 'Form submissions are handled by Formspree at https://formspree.io/f/xanpkwoy'
    },
    { status: 410 } // Gone - resource no longer available
  )
}
